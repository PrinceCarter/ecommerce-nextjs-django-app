"use client";

import Image from "next/image";
import { Carousel, Flowbite } from "flowbite-react";
import customTheme from "./customTheme";

export default function Home() {
  const images = [
    "https://www.highsnobiety.com/static-assets/dato/1690970245-inside-nigerias-booming-streetwear-renaissance-07.jpg",
    "https://data2.nssmag.com/images/galleries/20114/streetwear-1024x683.jpg",
    "https://media.npr.org/assets/img/2022/03/16/j000003_5013_02_custom-53d78773b28cab391e1627cf417c58fa55866d80.jpg",
    "https://static.bangkokpost.com/media/content/dcx/2022/11/17/4529285.jpg",
    "https://i.pinimg.com/736x/b6/ac/f1/b6acf1383a9ccdd187d12798346ad8ba.jpg",
  ];

  const menCategories = [
    {
      category: "Sweaters",
      image:
        "https://i.pinimg.com/736x/b6/ac/f1/b6acf1383a9ccdd187d12798346ad8ba.jpg",
    },
    {
      category: "Dress Shirts",
      image:
        "https://i.pinimg.com/736x/b6/ac/f1/b6acf1383a9ccdd187d12798346ad8ba.jpg",
    },
    {
      category: "Casual Shirts",
      image:
        "https://i.pinimg.com/736x/b6/ac/f1/b6acf1383a9ccdd187d12798346ad8ba.jpg",
    },
    {
      category: "Shorts",
      image:
        "https://i.pinimg.com/736x/b6/ac/f1/b6acf1383a9ccdd187d12798346ad8ba.jpg",
    },
    {
      category: "Hats",
      image:
        "https://i.pinimg.com/736x/b6/ac/f1/b6acf1383a9ccdd187d12798346ad8ba.jpg",
    },
    {
      category: "Pants & Shorts",
      image:
        "https://i.pinimg.com/736x/b6/ac/f1/b6acf1383a9ccdd187d12798346ad8ba.jpg",
    },
  ];

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="relative w-full h-[64rem]">
        <Carousel>
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-full">
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="m-12 grid gap-4">
        <p className="text-2xl text-gray-900 dark:text-white">
          Men: Shop by Category
        </p>
        <div className="h-48 sm:h-64 xl:h-80 2xl:h-64">
          <Carousel>
            {[0, 1].map((slide) => (
              <div key={slide} className="flex space-x-4">
                {menCategories
                  .slice(slide * 3, (slide + 1) * 3)
                  .map((category, index) => (
                    <div key={index} className="relative z-0 w-1/3 h-auto">
                      <Image
                        src={category.image}
                        alt={category.category}
                        style={{objectFit:"cover"}}
                        quality={100}
                        width={500}
                        height={500}
                        className="rounded-none"
                      />
                      <div className="absolute z-10 bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                        {category.category}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Flowbite>
  );
}
