import { MongoClient } from 'mongodb';

async function connectToDatabase() {
    try {
        const client = await MongoClient.connect('mongodb+srv://limax:limax@ecommerce.cqfzhye.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
        return client.db('ecommerce');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export { connectToDatabase };