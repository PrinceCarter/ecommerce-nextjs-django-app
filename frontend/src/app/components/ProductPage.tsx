"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

interface Product {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const ProductPage = () => {
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/api/product-details/?q=${id}`)
      .then((res) => res.json())
      .then((product: Product) => setProductDetails(product))
      .catch((e) => console.log("Error fetching product details: ", e));
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!productDetails) {
    return <h2>No product details found...</h2>;
  }

  return (
    <div className="container mx-auto my-auto py-24">
      <div className="grid grid-cols-2">
        <div className="mx-auto">
          <Image
            src={productDetails.image}
            alt={productDetails.title}
            width={400}
            height={400}
          />
        </div>

        <div className="gap-4 items-center align-middle my-auto space-y-8 px-12">
          <h1 className="text-4xl font-extrabold">{productDetails.title}</h1>
          <h3 className="text-xl">${productDetails.price}</h3>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to cart
          </button>
          <p>{productDetails.category}</p>
          <p>{productDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
