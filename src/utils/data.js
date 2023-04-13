import Discovery from '../../public/assets/discovery.svg';
import Launch from '../../public/assets/launch.svg';
import SignOff from '../../public/assets/signOff.svg';
import Development from '../../public/assets/development.svg';
import FSD from '../../public/assets/FSD.svg';
import Cloud from '../../public/assets/cloud.svg';
import Design from '../../public/assets/write.svg';
import Product from '../../public/assets/Product_Design.svg';
import FullStack from '../../public/assets/Full_Stack.svg';
import Devops from '../../public/assets/Devops.svg';

export const testimonials = [
  {
    name: 'Hany Elgabry',
    title: 'Product Manager',
    content:
      'Krishna was friendly through the whole session and he has good experience in Java. I am satisfied with the support provided by him, and I would recommend him for any quick and deep code review or walkthrough.',
  },
  {
    name: 'Chris Smith',
    title: 'Special Projects Director',
    content:
      'Krishna is very organized and very keen on understanding the project. He delivered exactly what I needed and even figured out a very complicated integration.',
  },
  {
    name: 'Jerry L',
    title: 'Business Owner',
    content:
      'I enjoyed working with them on a recent project and was thoroughly impressed with their work. Their attention to detail and thoroughness was evident from the start, and their expertise in the field was exceptional.',
  },
];

export const features = [
  {
    title: 'Discovery and Scoping',
    description:
      'This phase is about understanding your vision, goals, and challenges and working with you to develop a plan to help you succeed.',
    icon: 'bx:bxs-briefcase',
    img: Discovery.src,
  },
  {
    title: 'Sign Off Design',
    description:
      'Sign-off is where we get the green light to move forward, after ensuring that all design and requirements are fully understood and approved.',
    icon: 'bx:bxs-window-alt',
    img: SignOff.src,
  },
  {
    title: 'Development',
    description:
      'This is where we put our expertise to work, building high-quality solutions that drive business growth and success.',
    icon: 'bx:bxs-data',
    img: Development.src,
  },
  {
    title: 'Launch and Support',
    description:
      'This is where we take your project live, and provide ongoing support to ensure that your solutions are successful and scalable.',
    icon: 'bx:bxs-file-find',

    img: Launch.src,
  },
];

export const menuitems = [
  {
    title: 'Services',
    path: '/services',
  },
  {
    title: 'About Us',
    path: '/about',
  },
];

export const services = [
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
