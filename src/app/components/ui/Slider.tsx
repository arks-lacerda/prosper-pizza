'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const data = [
  {
    id: 1,
    title: 'Pizza sempre fresca, sempre crocante e sempre quente',
    image: '/slide1.avif',
  },
  {
    id: 2,
    title: 'Entregamos seu pedido onde você estiver em Brasil',
    image: '/slide2.jpeg',
  },
  {
    id: 3,
    title: 'A melhor pizza para compartilhar com sua família',
    image: '/slide3.avif',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[600px] lg:h-[800px]  lg:flex-row my-10 mx-4">
      {/* Text container */}
      <div className="p-4 h-1/2 flex items-center justify-center flex-col gap-4  text-red-500 font-bold lg:w-1/2  bg-fuchsia-100">
        <h1 className="text-4xl text-center md:p-10 font-semibold leading-[1.3] md:text-5xl  xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-xl uppercase font-semibold">
          Peça Agora
        </button>
      </div>

      {/* Image Container */}
      <div className="h-1/2 relative w-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt="Um homem com dois pedaço de pizza tampando os olhos"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
