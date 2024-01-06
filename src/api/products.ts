// src/data/products.ts

export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    quantity: number;
    imageLink: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Nike Air 2",
      description: "Offizieller Nike Schuh",
      price: "$45",
      quantity: 100,
      imageLink: "/shoe.jpg",
    },
    {
        id: 2,
        name: "Puma Future X2",
        description: "Offizieller Nike Schuh",
        price: "$45",
        quantity: 100,
        imageLink: "/shoe2.jpg",
      },
      {
        id: 3,
        name: "New Balance Rose",
        description: "Offizieller Nike Schuh",
        price: "$45",
        quantity: 100,
        imageLink: "/shoe3.jpg",
      },
      {
        id: 4,
        name: "Nike Bounce Air",
        description: "Offizieller Nike Schuh",
        price: "$45",
        quantity: 100,
        imageLink: "/shoe4.jpg",
      },
      {
        id: 5,
        name: "Nike Casual",
        description: "Offizieller Nike Schuh",
        price: "$45",
        quantity: 100,
        imageLink: "/shoe5.jpg",
      },
      {
        id: 6,
        name: "Nike Sports",
        description: "Offizieller Nike Schuh",
        price: "$45",
        quantity: 100,
        imageLink: "/shoe6.jpg",
      },
      {
        id: 7,
        name: "Nike Air Max 2",
        description: "Offizieller Nike Schuh",
        price: "$45",
        quantity: 100,
        imageLink: "/shoe7.jpg",
      },
      {
        id: 8,
        name: "Business Shoes",
        description: "Offizieller Nike Schuh",
        price: "$45",
        quantity: 100,
        imageLink: "/shoe8.jpg",
      },
  ];
  
  export default products;