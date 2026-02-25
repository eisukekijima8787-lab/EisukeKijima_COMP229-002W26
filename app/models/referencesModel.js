import mongoose from 'mongoose';

const referencesSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    // Add any other fields you want in your schema
},
{
    collection: 'my_custom_references_collection' // Set custom collection name here
})

referencesSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
    }
})

export default mongoose.model("references", referencesSchema);