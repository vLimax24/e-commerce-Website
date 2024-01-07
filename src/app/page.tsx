import { ItemGrid } from '../components'
import { MongoClient } from 'mongodb'


export default function Home() {

  const url = 'mongodb+srv://limax:limax@ecommerce.cqfzhye.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(url);
  const dbName = 'ecommerce';

  async function connect() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      await findDocumentById('1');
      // Call your functions for database operations here
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    } finally {
      // Ensure to close the connection when done
      await client.close();
    }
  }

  async function findDocumentById(id: any) {
    const db = client.db(dbName);
    const collection = db.collection('products');
  
    // Example: Find a document by ID
    const document = await collection.findOne({ _id: id });
  
    if (document) {
      console.log('Found document:', document);
    } else {
      console.log('Document not found');
    }
  }

  connect();
  return (
   <div className='w-full flex justify-center items-center mt-20 '>
    <ItemGrid/>
   </div>
  )
}
