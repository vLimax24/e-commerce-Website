import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },

}, { timestamps: true})

export default mongoose.models.Item || mongoose.model('Item', productSchema)