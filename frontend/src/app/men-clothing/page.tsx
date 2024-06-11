"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const MensClothing = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/mens-wear", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((items) => {
        setItems(items);
        setLoading(false);
      })
      .catch((e) => {
        console.log("Error: ", e);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>
  if (!items) return <p>No items found</p>

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-12 py-12">
        {items?.map((item: Product) => (
          <div key={item.id} className="flex flex-col justify-center items-center gap-8">
            <Image src={item.image} alt={item.title} width={200} height={200} />
            <Link href={`/men-clothing/${item.id}`}>
              <h4 className="text-center px-4">{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensClothing;
