import { features } from '@/utils/data';

export const Features = () => {
  return (
    <div className="px-8 md:px-24 bg-slate-100 py-10">
      <div class="md:mt-0">
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
          <div key={item.title} class="flex flex-col gap-4">
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
