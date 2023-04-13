import Layout from '@/components/layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <div className="mt-8 md:mt-0 text-center">
        <h1 className="text-6xl font-bold lg:tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          About Us
        </h1>
      </div>

      <div className="gap-3 mx-auto mt-8  px-8 md:px-24 bg-hero">
        <p className="text-center md:text-left text-lg leading-relaxed text-gray-700">
          We deliver innovative and reliable IT solutions that help businesses
          achieve their goals and improve their operations while building
          long-term, collaborative relationships with clients and serving as a
          trusted technical partner leveraging the latest technology stack and
          industry best practices to deliver quality and results-driven
          solutions.
          <br />
          <br />
          At ThinkITBeyond, we understand that in today&apos;s digital age,
          having a reliable IT infrastructure is essential for the success of
          any business. However, many companies, especially small and
          medium-sized ones, need more resources and expertise to keep up with
          the latest technological advancements. That&apos;s where we come in.
          Our mission is to make IT services accessible and affordable to all
          businesses, regardless of their size or industry.
          <br />
          <br />
          Our vision is to help businesses unlock their digital potential by
          providing them with cutting-edge IT solutions that are tailored to
          their unique needs. We believe technology should be an enabler, not a
          hindrance, to business growth. That&apos;s why we take the time to
          understand our client&apos;s business processes, challenges, and goals
          before designing and implementing IT solutions that align with their
          objectives.
        </p>

        <div className="w-full my-10 flex justify-center">
          <Link
            href="/contact"
            rel="noopener"
            className="bg-primary text-white text-xl hover:bg-green-600 border-2 border-transparent rounded-md px-4 py-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Layout>
  );
}
