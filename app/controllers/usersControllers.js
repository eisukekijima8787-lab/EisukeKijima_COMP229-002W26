let UsersModel = require('../models/users');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newUser = new UsersModel(req.body);

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

module.exports.list = async function (req, res, next) {
    try {
        let list = await UsersModel.find({});

        res.json({
            success: true,
            message: "Users list retrieved successfully.",
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

        let user = await UsersModel.findOne({ _id: id });
        if (!user)
            throw new Error('User not found. Are you sure it exists?');

        res.json({
            success: true,
            message: "User retrieved successfully.",
            data: user
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