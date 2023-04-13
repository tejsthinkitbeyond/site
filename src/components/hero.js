import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../../public/assets/Hero.svg';
import Circle from '../../public/assets/circle2-orange.svg';
import Dots from '../../public/assets/dots2-purple.svg';

export const Hero = () => {
  return (
    <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8  px-8 md:px-24">
      <div className="py-6 md:order-1 hidden md:block relative w-full">
        {/* <img src={Circle.src} className="absolute top-0 h-28" /> */}
        <Image
          src={Circle.src}
          alt="Circle"
          loading="eager"
          format="avif"
          className="absolute top-0 h-28"
          width={100}
          height={100}
        />
        <Image
          src={heroImage}
          alt="Astronaut in the air"
          loading="eager"
          format="avif"
        />
        <Image
          src={Dots.src}
          alt="Dots"
          loading="eager"
          format="avif"
          className="absolute bottom-0 right-0 h-20"
          width={100}
          height={100}
        />
        {/* <img src={Dots.src} className="absolute bottom-0 right-0 h-20" /> */}
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
          Dedicated to bringing your ideas to life
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Our personalized consulting services guide you through the launch
          process and beyond.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start">
          <Link
            href="/contact"
            rel="noopener"
            className="bg-green-400 text-white text-xl hover:bg-green-600 border-2 border-transparent rounded-md px-4 py-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};
