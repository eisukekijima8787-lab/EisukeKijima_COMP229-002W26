import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date, required: true },
    updated: { type: Date, required: true },
    // Add any other fields you want in your schema
},
{
    collection: 'my_custom_users_collection' // Set custom collection name here
})

usersSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
    }
})

export default mongoose.model("users", usersSchema);