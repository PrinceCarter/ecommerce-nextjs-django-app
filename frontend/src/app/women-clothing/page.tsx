"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {Spinner} from "@nextui-org/spinner";
import Link from "next/link";

interface Product {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const WomensClothing = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/womens-wear", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((items) => setItems(items))
      .catch((e) => console.log("Error: ", e));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-12 py-12">
        {items?.map((item: Product) => (
          <div key={item.id} className="flex flex-col justify-center items-center gap-8">
            <Image src={item.image} alt={item.title} width={200} height={200} />
            <Link href={`/women-clothing/${item.id}`}>
              <h4 className="text-center px-4">{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomensClothing;
