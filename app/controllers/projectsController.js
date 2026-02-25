import projectsModel from '../models/projectsModel.js';

export const processAdd = async (req, res, next) => {
    try {
        let newProject = new projectsModel(req.body);

        let result = await projectsModel.create(newProject);
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

export const getById = async (req, res, next) => {
    try {
        let id = req.params.id;

        let project = await projectsModel.findOne({ _id: id });
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

export const processEdit = async (req, res, next) => {
    try {
        let id = req.params.id;
        let updatedProject = new projectsModel(req.body);
        updatedProject._id = id;

        let result = await projectsModel.updateOne({ _id: id }, updatedProject);
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

export const performDelete = async (req, res, next) => {
    try {
        let id = req.params.id;

        let result = await projectsModel.deleteOne({ _id: id });
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

export async function list(req, res, next) {
    try {
        let list = await projectsModel.find({});

        res.json({
            success: true,
            message: "Projects list retrieved successfully.",
            data: list
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}