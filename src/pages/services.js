import Layout from '@/components/layout';
import { ServicesList } from '@/components/servicesList/servicesList';
import { services } from '@/utils/data';

export default function Services() {
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
            key={service.title}
            className={`section bg-hero font-sans px-8 md:px-24 ${
              isOdd && 'bg-theme-light '
            }`}
          >
            <div className="container">
              <div className="items-center md:grid md:grid-cols-2">
                <div
                  className={`flex justify-center ${!isOdd && 'md:order-2'}`}
                >
                  <div
                    className={`w-full mb-10 lg:mb-0 rounded-lg overflow-hidden`}
                  >
                    <img
                      src={service.cover}
                      alt=""
                      srcset=""
                      className="px-4"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex justify-center w-full mt-5 md:mt-0 ${
                    !isOdd && 'md:order-1'
                  }`}
                >
                  <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center text-gray-800">
                      <div className="flex-grow">
                        <div className="flex items-center mb-5">
                          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full   text-white">
                            <img src={service.img} alt="" srcset="" />
                          </div>
                          <h2 className="text-gray-700 text-2xl title-font font-medium mx-4">
                            {service.title}
                          </h2>
                        </div>
                        <p
                          className={`leading-relaxed text-base md:w-11/12 text-center ${
                            isOdd ? 'md:text-right' : 'md:text-left'
                          } text-gray-700`}
                        >
                          {service.desc}
                        </p>
                        <ServicesList service={service} isOdd={isOdd} />
                        <a className="mt-3 text-white inline-flex items-center">
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 ml-2"
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
