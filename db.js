import mongoose from 'mongoose'

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongoose connection successful')
    } catch (error) {
        throw new Error('Error connecting to database')
    }
}

export default connect