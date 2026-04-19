let mongoose = require('mongoose');

let servicesModel = mongoose.Schema(
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
        collection: "services"
    }
);

// Ensure virtual fields are serialised.
servicesModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model("services", servicesModel);