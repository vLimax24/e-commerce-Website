import { notFound} from 'next/navigation'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import Image from 'next/image'
  import { Button } from "@/components/ui/button"
  import { ShoppingCart } from "lucide-react"
  import { cn } from "@/lib/utils"
  import Link from 'next/link'


async function getData() {
    const res = await fetch("http://localhost:3000/api/products", { cache: "no-store"})
    if(!res.ok) return notFound()
    return res.json()
}

type CardProps = React.ComponentProps<typeof Card>;

export default async function ProductList({ className, ...props }: CardProps) {

    const data = await getData()
    console.log(data)
    return (
        <>
            <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full mt-20 p-10'>
                {data && data?.map((item:any) => (
                    <div key={item?._id}>
                        <Card key={item?._id} className={cn("w-[380px] mb-5", className)} {...props}>
                            <CardHeader>
                                <CardTitle>{item?.title}</CardTitle>
                                <CardDescription>{item?.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={item?.imageLink}
                                    alt={item?.title}
                                    width={600}
                                    height={200}
                                    className="rounded-2xl mb-5"
                                    draggable='false'
                                    style={{ width: '600px', height: '200px', objectFit: 'cover'  }}
                                />
                                <div className='flex justify-between px-1'>
                                    <p>Price: {item?.price}</p>
                                    <p>Quantity: {item?.quantity}</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/products/${item?.productId}`}>
                                    <Button className='w-full'><ShoppingCart className="mr-2 h-4 w-4" />Add to cart</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}