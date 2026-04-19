let mongoose = require('mongoose');

let contactsModel = mongoose.Schema(
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
        collection: "contacts"
    }
);

// Ensure virtual fields are serialised.
contactsModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model("contacts", contactsModel);