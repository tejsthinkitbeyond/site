import Image from 'next/image';
import Layout from '@/components/layout';
import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import Head from 'next/head';
import { CTA } from '@/components/cta';
import { Testimonials } from '@/components/testimonials';
import { Tagline } from '@/components/tagline';
import favicon from '../../public/favicon.ico';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-hero">
      <Head>
        <title>ThinkITBeyond</title>
        <link rel="icon" href={favicon.src} type="image/x-icon" />
      </Head>
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
