import React from 'react';
import Image from 'next/image';

const Notification = () => {
  return (
    <div className="lg:justify-center md:justify-start sm:justify-center h-12 bg-red-500 text-white px-4 flex items-center text-center text-sm md:text-base cursor-pointer gap-4">
      <p>Entrega gratuita para todos os pedidos acima de R$ 50,00.</p>
    </div>
  );
};

export default Notification;
