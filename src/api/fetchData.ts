import { connectToDatabase } from './databaseConnection';

async function handler(res: any) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('products');
    const data = await collection.find({}).toArray();

    console.log('Fetched data from MongoDB:', data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export { handler }