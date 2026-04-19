let mongoose = require('mongoose');

let usersModel = mongoose.Schema(
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
        collection: "users"
    }
);

// Ensure virtual fields are serialised.
usersModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model("users", usersModel);