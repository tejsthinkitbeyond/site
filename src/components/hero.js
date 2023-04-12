import Link from 'next/Link';
import Image from 'next/Image';
import heroImage from '../assets/hero.png';
import Circle from '../assets/circle2-orange.svg';
import Dots from '../assets/dots2-purple.svg';

export const Hero = () => {
  return (
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8  px-8 md:px-24">
      <div class="py-6 md:order-1 hidden md:block relative">
        <img src={Circle.src} class="absolute top-0 h-28" />
        <Image
          src={heroImage}
          alt="Astronaut in the air"
          loading="eager"
          format="avif"
        />
        <img src={Dots.src} class="absolute bottom-0 right-0 h-20" />
      </div>
      <div>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
          Dedicated to bringing your ideas to life
        </h1>
        <p class="text-lg mt-4 text-slate-600 max-w-xl">
          Our personalized consulting services guide you through the launch
          process and beyond.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
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
