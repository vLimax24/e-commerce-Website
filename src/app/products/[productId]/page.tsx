import products from '../../api/productsList';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { MongoClient } from 'mongodb'
import { useEffect } from 'react'

const ProductDetails = ({
  params,
}: {
  params: { productId: string; name: string };
}) => {

  const product = products.find((p) => p.id === Number(params.productId));
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