let ContactsModel = require('../models/contactsModels');
//let UserModel = require('../models/usersModels');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newContact = new ContactsModel(req.body);
        newContact.owner = req.user ? req.user.id : (req.auth ? req.auth.id : null);

        let result = await ContactsModel.create(newContact);
        console.log(result);

        res.status(200)
        res.json({
            success: true,
            message: "Contact added successfully.",
            data: result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.list = async (req, res) => {
  try {
    let contact = await ContactsModel.find();
    console.log("Walk:", contact);
    //res.json(projects);
    res.json({
    success: true,
    message: "Contact List retrieved successfully.",
    data: contact
});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports.getById = async function (req, res, next) {
    try {
        let id = req.params.id;

        let contact = await ContactsModel.findOne({ _id: id });
        if (!contact)
            throw new Error('Contact not found. Are you sure it exists?');

        res.json({
            success: true,
            message: "Contact retrieved successfully.",
            data: contact
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.processEdit = async function (req, res, next) {
    try {
        let id = req.params.id;
        let updatedContact = new ContactsModel(req.body);
        updatedContact._id = id;
        updatedContact.owner = req.user ? req.user.id : (req.auth ? req.auth.id : null);

        let result = await ContactsModel.updateOne({ _id: id }, updatedContact);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.status(200)
            res.json({
                success: true,
                message: "Contact updated successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('Contact not updated. It does not exist or there is nothing to change.')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports.performDelete = async function (req, res, next) {
    try {
        let id = req.params.id;

        let result = await ContactsModel.deleteOne({ _id: id });
        console.log(result);

        if (result.deletedCount > 0) {
            res.status(200)
            res.json({
                success: true,
                message: "Contact deleted successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('Contact not deleted. Are you sure the id is correct?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.hasAuthorization = async function (req, res, next) {
    try {
        let id = req.params.id;
        let contact = await ContactsModel.findById(id).populate('owner');

        if (contact == null) {
            throw new error('Item not found');
        }
        else if (contact.owner != null) { // If the item found has a owner.

            if (contact.owner.id != req.auth.id) { // If the owner differs
                let currentUser = await UserModel.findOne({ _id: req.auth.id }, 'admin');

                if (currentUser.admin != true) { // If the user is not a Admin

                    console.log('====> Not authorized');
                    return res.status(403).json(
                        {
                            success: false,
                            message: 'User is not authorized to modify this item.'
                        }
                    );
                }
            }
        }

        // If it reaches this point, runs the next middleware.
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }

}