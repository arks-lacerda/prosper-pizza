import Image from 'next/image';
import Slider from './components/ui/Slider';
import Featured from './components/ui/Featured';
import Offer from './components/ui/offer';

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
