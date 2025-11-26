import React from "react";

export default function Products() {
  return (
    <div className="w-full py-10 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-primary-c mb-5">
        E-Shop
      </h2>
      <h3 className="text-center text-xl md:text-2xl font-semibold mb-4">
        Check Out Our Latest Fitness Gear
      </h3>
      <div className="flex w-full overflow-x-auto gap-6 py-4">
        {productData.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl p-4 w-[250px] shrink-0 border border-gray-200 hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={name}
        className="object-cover h-[200px] w-full rounded-2xl"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-primary-c font-bold text-md">{price}</p>
    </div>
  );
}

export const productData = [
  {
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=60",
    name: "Dumbbell Set",
    price: "$49.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Yoga Mat",
    price: "$29.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1632077804406-188472f1a810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2V0dGxlYmVsbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Kettlebell",
    price: "$39.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVzaXN0YW5jZSUyMEJhbmRzfGVufDB8fDB8fHww",
    name: "Resistance Bands",
    price: "$19.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=60",
    name: "Dumbbell Set",
    price: "$49.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Yoga Mat",
    price: "$29.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1632077804406-188472f1a810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2V0dGxlYmVsbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Kettlebell",
    price: "$39.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVzaXN0YW5jZSUyMEJhbmRzfGVufDB8fDB8fHww",
    name: "Resistance Bands",
    price: "$19.99",
  },
];
