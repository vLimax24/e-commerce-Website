import { ShoppingCart } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import products from '../api/products';

type CardProps = React.ComponentProps<typeof Card>;

function ShopCard({ className, ...props }: CardProps) {
    return (
      <>
        {products.map((product, index) => (
          <Card key={index} className={cn("w-[380px] mb-5", className)} {...props}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Image
                src={product.imageLink}
                alt={product.name}
                width={600}
                height={200}
                className="rounded-2xl mb-5"
                draggable='false'
                style={{ width: '600px', height: '200px', objectFit: 'cover'  }}
              />
              <div className="flex justify-between">
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/products/${product.id}`}>
                <Button className="!w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />Add to cart
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </>
    );
  }
  
  export default ShopCard;
