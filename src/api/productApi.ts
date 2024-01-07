import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const { productId } = req.query;

  const url = 'mongodb+srv://limax:limax@ecommerce.cqfzhye.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(url);
  const dbName = 'ecommerce';

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('products');
    const document = await collection.findOne({ _id: productId });

    if (document) {
      res.status(200).json(document);
      console.log('Product fetched:', document);
    } else {
      res.status(404).json({ message: 'Document not found' });
      console.log('Document not found');
    }
  } catch (err) {
    console.error('Error fetching product from MongoDB:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}