import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl-p-40 flex justify-between items-center md:font-bold flex-1 text-red-500 uppercase">
      <Link href="/" className="font-bold text-center text-xl">
        Prosper <span className="text-black">Pizza</span>
      </Link>
      <p className="text-black text-sm flex items-center">
        ©
        <span className="uppercase text-md">Todos os direitos reservados.</span>
      </p>
    </div>
  );
};

export default Footer;
