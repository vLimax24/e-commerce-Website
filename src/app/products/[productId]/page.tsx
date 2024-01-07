import products from '../../../api/products';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { MongoClient } from 'mongodb'
import { useState, useEffect } from 'react';

const ProductDetails = ({
  params,
}: {
  params: { productId: string; name: string };
}) => {

  const product = products.find((p) => p.id === Number(params.productId));
  const productArray:any = []

  const url = 'mongodb+srv://limax:limax@ecommerce.cqfzhye.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(url);
  const dbName = 'ecommerce';

  async function connect() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      await findDocumentById(params.productId);
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    } finally {
      await client.close();
    }
  }

  async function findDocumentById(id: any) {
    const db = client.db(dbName);
    const collection = db.collection('products');

    const document = await collection.findOne({ _id: id });

    if (document) {
      const productTest = document
      console.log(productTest);
    } else {
      console.log('Document not found');
    }

    
  }

  connect();

  return (
    <div className="container mx-auto my-8 p-8 shadow-lg rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <Image
                src={product?.imageLink}
                alt={product?.name}
                width={600}
                height={400}
                className="rounded-2xl mb-5"
                draggable='false'
                style={{ width: '600px', height: '400px', objectFit: 'cover'  }}
            />
        </div>
        <div>
          <p className="text-xl font-bold mb-2">Name: <span className='font-normal'>{product?.name}</span></p>
          <p className="mb-4">Description: {product?.description}</p>
          <p className="text-lg mb-2">Price: {product?.price}</p>
          <p className="text-lg mb-2">Quantity: {product?.quantity}</p>
            <div className='flex justify-between'>
            <Button className="w-[45%] mt-20">
                <ShoppingCart className="mr-2 h-4 w-4" />Add to cart
            </Button>
            <Button className="w-[45%] mt-20">
                <Star className="mr-2 h-4 w-4" />Add to Wishlist
            </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;