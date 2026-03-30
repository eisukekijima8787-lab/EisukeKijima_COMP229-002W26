let mongoose = require('mongoose');

let projectsModels = mongoose.Schema(
    {
        title: String,
        completion: Date, 
        description: String
    },
    {
        collection: "projects"
    }
);

// Ensure virtual fields are serialised.
projectsModels.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model("Projects", projectsModels);