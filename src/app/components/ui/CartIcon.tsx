import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4 md:gap-1">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="Ícone do carrinho de compras" fill />
      </div>
      <p className="flex gap-3 items-center">
        Carrinho{' '}
        <span className="text-gray-800 bg-white rounded-full text-center block w-8 h-8 md:bg-black md:text-white md:text-sm md:flex md:justify-center md:items-center">
          3
        </span>
      </p>
    </Link>
  );
};

export default CartIcon;
