let ServicesModel = require('../models/servicesModels');
//let UserModel = require('../models/usersModels');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newService = new ServicesModel(req.body);
        newService.owner = req.user ? req.user.id : (req.auth ? req.auth.id : null);

        let result = await ServicesModel.create(newService);
        console.log(result);

        res.status(200)
        res.json({
            success: true,
            message: "Service added successfully.",
            data: result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.list = async (req, res) => {
  try {
    let services = await ServicesModel.find();
    console.log("Walk:", services);
    //res.json(services);
    res.json({
    success: true,
    message: "Service List retrieved successfully.",
    data: services
});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports.getById = async function (req, res, next) {
    try {
        let id = req.params.id;

        let services = await ServicesModel.findOne({ _id: id });
        if (!services)
            throw new Error('Service not found. Are you sure it exists?');

        res.json({
            success: true,
            message: "Service retrieved successfully.",
            data: services
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.processEdit = async function (req, res, next) {
    try {
        let id = req.params.id;
        let updatedService = new ServicesModel(req.body);
        updatedService._id = id;
        updatedService.owner = req.user ? req.user.id : (req.auth ? req.auth.id : null);

        let result = await ServicesModel.updateOne({ _id: id }, updatedService);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.status(200)
            res.json({
                success: true,
                message: "Service updated successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('Service not updated. It does not exist or there is nothing to change.')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports.performDelete = async function (req, res, next) {
    try {
        let id = req.params.id;

        let result = await ServicesModel.deleteOne({ _id: id });
        console.log(result);

        if (result.deletedCount > 0) {
            res.status(200)
            res.json({
                success: true,
                message: "Service deleted successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('Service not deleted. Are you sure the id is correct?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.hasAuthorization = async function (req, res, next) {
    try {
        let id = req.params.id;
        let services = await ServicesModel.findById(id).populate('owner');

        if (services == null) {
            throw new error('Item not found');
        }
        else if (services.owner != null) { // If the item found has a owner.

            if (services.owner.id != req.auth.id) { // If the owner differs
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