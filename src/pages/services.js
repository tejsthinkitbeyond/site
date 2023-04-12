import Layout from '@/components/layout';
import heroImage from '../assets/hero.png';
import FSD from '../assets/FSD.svg';
import Cloud from '../assets/cloud.svg';
import Design from '../assets/design.svg';
import Product from '../assets/Product_Design.svg';
import FullStack from '../assets/Full_Stack.svg';
import Devops from '../assets/Devops.svg';
import { ServicesList } from '@/components/servicesList/servicesList';

export default function Services() {
  const services = [
    {
      title: 'Product Design',
      icon: 'bx:bxs-briefcase',
      img: Design.src,
      cover: Product.src,
      direction: 'left',
      desc: "A well-designed product can differentiate between success and failure in today's competitive market. We understand the importance of product design and take a user-centric approach to ensure your product is intuitive, engaging, and aesthetically pleasing. Our services include:",
      points: [
        {
          serviceTitle: 'User research',
          serviceDesc:
            'In-depth user research to gain a deep understanding of your target audience and their needs, preferences, and behaviours.',
        },
        {
          serviceTitle: 'User experience design',
          serviceDesc:
            'Creating user experience (UX) designs optimized for conversions and engaging users throughout the customer journey.',
        },
        {
          serviceTitle: 'User interface design',
          serviceDesc:
            'We design beautiful user interfaces (UI) that reflect your brand and create a seamless user experience.',
        },
      ],
    },
    {
      title: 'Full Stack Web Development',
      icon: 'bx:bxs-briefcase',
      img: FSD.src,
      cover: FullStack.src,
      direction: 'right',
      desc: 'We specialize in building scalable and reliable web applications for startups, small and medium businesses. Whether you need a new web application built from scratch or need to enhance an existing application, we can help. Our services include:',
      points: [
        {
          serviceTitle: 'AI Agents',
          serviceDesc:
            'Supercharging business with AI by leveraging the power of machine learning and automation to streamline processes, improve decision-making, and drive growth.',
        },
        {
          serviceTitle: 'Back-end development',
          serviceDesc:
            'Building robust and scalable systems that power your web application and support your business processes.',
        },
        {
          serviceTitle: 'Front-end development',
          serviceDesc:
            'Creating engaging and intuitive front-end interfaces that drive conversions and engage users.',
        },
        {
          serviceTitle: 'DevOps',
          serviceDesc:
            'We provide comprehensive DevOps services that ensure your web application is secure, reliable, and scalable, with minimal downtime and maximum performance.',
        },
      ],
    },
    {
      title: 'Cloud and DevOps Services',
      icon: 'bx:bxs-briefcase',
      img: Cloud.src,
      cover: Devops.src,
      direction: 'left',
      desc: 'Moving to the cloud can be a game-changer for startups, small and medium businesses. We specialize in helping businesses migrate to the cloud and optimize their cloud infrastructure for maximum performance, security, and cost-effectiveness. Our team of experienced cloud and DevOps experts use latest technologies and best practices to deliver cloud solutions that meet your specific requirements. Our services include:',
      points: [
        {
          serviceTitle: 'Cloud migration',
          serviceDesc:
            'We help you seamlessly migrate your on-premise infrastructure to the cloud, with minimal disruption to your business.',
        },
        {
          serviceTitle: 'Cloud infrastructure optimisation',
          serviceDesc:
            'We optimise your cloud infrastructure to ensure maximum performance, security, and cost-effectiveness.',
        },
        {
          serviceTitle: 'DevOps',
          serviceDesc:
            'We provide comprehensive services that ensure your cloud infrastructure is secure, reliable, and scalable, with minimal downtime and maximum performance.',
        },
      ],
    },
  ];
  return (
    <Layout>
      <div className="mt-16 text-center">
        <h1 className="text-6xl font-bold lg:tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
          Services
        </h1>
      </div>

      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            class={`section font-sans px-8 md:px-24 ${
              isOdd && 'bg-theme-light'
            }`}
          >
            <div class="container">
              <div class="items-center md:grid md:grid-cols-2">
                {/* Carousel */}
                <div class={`flex justify-center ${!isOdd && 'md:order-2'}`}>
                  <div
                    class={`w-full mb-10 lg:mb-0 rounded-lg overflow-hidden`}
                  >
                    <img src={service.cover} alt="" srcset="" class="px-4" />
                  </div>
                </div>

                {/* Content */}
                <div
                  class={`flex justify-center w-full mt-5 md:mt-0 ${
                    !isOdd && 'md:order-1'
                  }`}
                >
                  <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:text-left text-center">
                    <div class="flex flex-col mb-10 lg:items-start items-center text-gray-800">
                      <div class="flex-grow">
                        <div class="flex items-center mb-5">
                          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full   text-white">
                            <img src={service.img} alt="" srcset="" />
                          </div>
                          <h2 class="text-gray-700 text-2xl title-font font-medium mx-4">
                            {service.title}
                          </h2>
                        </div>
                        <p
                          class={`leading-relaxed text-base md:w-11/12 text-center ${
                            isOdd ? 'md:text-right' : 'md:text-left'
                          } text-gray-700`}
                        >
                          {service.desc}
                        </p>
                        <ServicesList service={service} isOdd={isOdd} />
                        <a class="mt-3 text-white inline-flex items-center">
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </Layout>
  );
}
