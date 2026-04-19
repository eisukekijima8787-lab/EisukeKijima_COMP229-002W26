let UsersModel = require('../models/usersModels');
//let UserModel = require('../models/usersModels');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newUser = new UsersModel(req.body);
        newUser.owner = req.user ? req.user.id : (req.auth ? req.auth.id : null);

        let result = await UsersModel.create(newUser);
        console.log(result);

        res.status(200)
        res.json({
            success: true,
            message: "User added successfully.",
            data: result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.list = async (req, res) => {
  try {
    let users = await UsersModel.find();
    console.log("Walk:", users);
    //res.json(users);
    res.json({
    success: true,
    message: "User List retrieved successfully.",
    data: users
});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports.getById = async function (req, res, next) {
    try {
        let id = req.params.id;

        let aboutUs = await UsersModel.findOne({ _id: id });
        if (!aboutUs)
            throw new Error('User not found. Are you sure it exists?');

        res.json({
            success: true,
            message: "User retrieved successfully.",
            data: aboutUs
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.processEdit = async function (req, res, next) {
    try {
        let id = req.params.id;
        let updatedUser = new UsersModel(req.body);
        updatedUser._id = id;
        updatedUser.owner = req.user ? req.user.id : (req.auth ? req.auth.id : null);

        let result = await UsersModel.updateOne({ _id: id }, updatedUser);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.status(200)
            res.json({
                success: true,
                message: "User updated successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('User not updated. It does not exist or there is nothing to change.')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports.performDelete = async function (req, res, next) {
    try {
        let id = req.params.id;

        let result = await UsersModel.deleteOne({ _id: id });
        console.log(result);

        if (result.deletedCount > 0) {
            res.status(200)
            res.json({
                success: true,
                message: "User deleted successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('User not deleted. Are you sure the id is correct?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.hasAuthorization = async function (req, res, next) {
    try {
        let id = req.params.id;
        let aboutUs = await UsersModel.findById(id).populate('owner');

        if (aboutUs == null) {
            throw new error('Item not found');
        }
        else if (aboutUs.owner != null) { // If the item found has a owner.

            if (aboutUs.owner.id != req.auth.id) { // If the owner differs
                let currentUser = await UsersModel.findOne({ _id: req.auth.id }, 'admin');

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