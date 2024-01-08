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
import { notFound} from 'next/navigation'

async function getData() {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store"})
  if(!res.ok) return notFound()
  return res.json()
}

type CardProps = React.ComponentProps<typeof Card>;

async function ShopCard({ className, ...props }: CardProps) {

    const data = await getData()
    return (
      <>
        {data.map((item:any) => (
          <Card key={item._id} className={cn("w-[380px] mb-5", className)} {...props}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Image
                src={item.imageLink}
                alt={item.name}
                width={600}
                height={200}
                className="rounded-2xl mb-5"
                draggable='false'
                style={{ width: '600px', height: '200px', objectFit: 'cover'  }}
              />
              <div className="flex justify-between">
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/products/${item._id}`}>
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
