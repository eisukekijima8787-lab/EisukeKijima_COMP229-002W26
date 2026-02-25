import mongoose from 'mongoose';

const projectsSchema = mongoose.Schema({
    title: { type: String, required: true },
    completion: { type: Date, required: true },
    description: { type: String, required: true },
    // Add any other fields you want in your schema
},
{
    collection: 'my_custom_projects_collection' // Set custom collection name here
})

projectsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
    }
})

export default mongoose.model("projects", projectsSchema);