import Image from 'next/image';
import Layout from '@/components/layout';
import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { CTA } from '@/components/cta';
import { Testimonials } from '@/components/testimonials';
import { Tagline } from '@/components/tagline';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-hero">
      <Layout>
        <Hero />
        <Features />
        <CTA />
        <Testimonials />
        <Tagline />
      </Layout>
    </div>
  );
}
