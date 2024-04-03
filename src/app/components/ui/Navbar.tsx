import Link from 'next/link';
import Menu from './Menu';
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12  text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* Logo */}
      <div className="text-xl md:font-bold flex-1">
        <Link href="/">
          Prosper <span className="text-black">Pizza</span>
        </Link>
      </div>
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Cardápio</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-400 px-2 rounded-xl">
          <Image
            src="/phone.png"
            alt="Ícone de uma Telefone"
            width={20}
            height={20}
          />
          <span>00 00000-0000</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
