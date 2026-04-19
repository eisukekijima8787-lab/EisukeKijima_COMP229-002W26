let ProjectsModel = require('../models/projectsModels');
let UserModel = require('../models/usersModels');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newProject = new ProjectsModel(req.body);
        newProject.owner = req.user ? req.user.id : (req.auth ? req.auth.id : null);

        let result = await ProjectsModel.create(newProject);
        console.log(result);

        res.status(200)
        res.json({
            success: true,
            message: "Project added successfully.",
            data: result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.list = async (req, res) => {
  try {
    let projects = await ProjectsModel.find();
    console.log("Walk:", projects);
    //res.json(projects);
    res.json({
    success: true,
    message: "Project List retrieved successfully.",
    data: projects
});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports.getById = async function (req, res, next) {
    try {
        let id = req.params.id;

        let project = await ProjectsModel.findOne({ _id: id });
        if (!project)
            throw new Error('Project not found. Are you sure it exists?');

        res.json({
            success: true,
            message: "Project retrieved successfully.",
            data: project
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.processEdit = async function (req, res, next) {
    try {
        let id = req.params.id;
        let updatedProject = new ProjectsModel(req.body);
        updatedProject._id = id;
        updatedProject.owner = req.user ? req.user.id : (req.auth ? req.auth.id : null);

        let result = await ProjectsModel.updateOne({ _id: id }, updatedProject);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.status(200)
            res.json({
                success: true,
                message: "Project updated successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('Project not updated. It does not exist or there is nothing to change.')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports.performDelete = async function (req, res, next) {
    try {
        let id = req.params.id;

        let result = await ProjectsModel.deleteOne({ _id: id });
        console.log(result);

        if (result.deletedCount > 0) {
            res.status(200)
            res.json({
                success: true,
                message: "Project deleted successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('Project not deleted. Are you sure the id is correct?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.hasAuthorization = async function (req, res, next) {
    try {
        let id = req.params.id;
        let project = await ProjectsModel.findById(id).populate('owner');

        if (project == null) {
            throw new error('Item not found');
        }
        else if (project.owner != null) { // If the item found has a owner.

            if (project.owner.id != req.auth.id) { // If the owner differs
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