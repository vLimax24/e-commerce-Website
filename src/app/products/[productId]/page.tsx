import products from '../../api/productsList';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { MongoClient } from 'mongodb'
import { useEffect } from 'react'

async function getData() {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store"})
  if(!res.ok) return notFound()
  return res.json()
}

const ProductDetails = async ({
  params,
}: {
  params: { productId: any; name: string };
}) => {



  const product = products.find((p) => p.id === Number(params.productId));
  const data = await getData()
  console.log(data)

  const productData = data[params.productId - 1]

  return (
    <div className="container mx-auto my-8 p-8 shadow-lg rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <Image
                src={productData.imageLink}
                alt={productData.title}
                width={600}
                height={400}
                className="rounded-2xl mb-5"
                draggable='false'
                style={{ width: '600px', height: '400px', objectFit: 'cover'  }}
            />
        </div>
        <div>
          <p className="text-xl mb-2">Name: {productData.title}</p>
          <p className="mb-4">Description: {productData.description}</p>
          <p className="text-lg mb-2">Price: {productData.price}</p>
          <p className="text-lg mb-2">Quantity: {productData.quantity}</p>
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