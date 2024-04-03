'use client';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Funcionamento', url: '/working' },
  { id: 4, title: 'Contate nós', url: '/contact' },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //temporário
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Menu mobile"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Menu mobile"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 flex flex-col justify-center items-center h-[calc(100vh-6rem)] w-full text-3xl gap-8 z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href={'/login'}>Login</Link>
          ) : (
            <Link href={'/orders'}>Orders</Link>
          )}
          <Link
            href={'/cart'}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CartIcon />
          </Link>
          <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-400 px-2 rounded-xl">
            <Image
              src="/phone.png"
              alt="Ícone de uma Telefone"
              width={20}
              height={20}
            />
            <span>00 00000-0000</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
