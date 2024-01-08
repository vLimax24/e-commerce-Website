import mongoose from 'mongoose'

const { Schema } = mongoose

const adminSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true})

export default mongoose.models.admins || mongoose.model('admins', adminSchema)