let ContactsModel = require('../models/contactsModels');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newContact = new ContactsModel(req.body);

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

module.exports.list = async function (req, res, next) {
    try {
        let list = await ContactsModel.find({});

        res.json({
            success: true,
            message: "Contacts list retrieved successfully.",
            data: list
        });
    } catch (error) {
        console.log(error);
        next(error);
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