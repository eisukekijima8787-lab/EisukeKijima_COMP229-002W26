import mongoose from 'mongoose';

const servicesSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    // Add any other fields you want in your schema
},
{
    collection: 'my_custom_services_collection' // Set custom collection name here
})

servicesSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
    }
});

export default mongoose.model("services", servicesSchema);