import Discovery from '../assets/discovery.svg';
import Launch from '../assets/launch.svg';
import SignOff from '../assets/signOff.svg';
import Development from '../assets/development.svg';

export const Features = () => {
  const features = [
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
  return (
    <div className="px-8 md:px-24">
      <div class="mt-16 md:mt-0">
        <div class="flex items-center">
          <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-gray-700">
            How We Work
          </h2>
        </div>
        <p class="text-lg mt-4 text-slate-600">
          Unlocking your digital potential with our expert IT consulting.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-2 mt-16 gap-16 text-gray-700">
        {features.map((item) => (
          <div class="flex flex-col gap-4">
            <div class="flex items-center">
              <img src={item.img} alt="" srcet="" class="h-10" />
              <h3 class="font-semibold text-xl mx-1">{item.title}</h3>
            </div>
            <p class="text-slate-500 text-lg mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
