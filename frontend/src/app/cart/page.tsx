"use client";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";

interface Product {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="container mx-auto my-auto py-24">
      {items.length === 0 ? (
        <div>Your shopping bag is empty</div>
      ) : (
        <div className="grid grid-cols-4">
          <div>
            <div className="flex-1 grid">
              <div>Shopping Bag</div>
            </div>
            <div>
              {items.map((item: Product) => (
                <div key={item.id} className="p-4 border rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                  />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid">Order Summary</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
