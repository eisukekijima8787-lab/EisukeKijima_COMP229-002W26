let mongoose = require('mongoose');

let projectsModel = mongoose.Schema(
    {
        title: String,
        completion: Date,
        description: String,
        // Adds relationship with User
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    },
    {
        collection: "projects"
    }
);

// Ensure virtual fields are serialised.
projectsModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model("Projects", projectsModel);