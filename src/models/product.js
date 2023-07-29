import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {type: String, require: true, minLength: 3}, 
    price: {type: Number, require: true}, 
    description:{type: String},
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
        defaultValue: "Uncategorized"
    },
},
    {
    timestamps: true,versionKey: false
})
export default mongoose.model('Product',productSchema);


