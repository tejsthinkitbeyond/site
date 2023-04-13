import { testimonials } from '@/utils/data';

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-3 mx-auto mt-16 text-center px-8 md:px-24  bg-slate-100 py-10">
      <h2 className="font-bold text-5xl text-gray-700">
        Here&apos;s what our clients have to say about us
      </h2>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="grid md:grid-cols-3 -m-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="lg:mb-0  bg-white mx-4 p-8 shadow-md transform hover:-translate-y-3 ease-in duration-500 mb-4 md:mb-0"
              >
                <div className="h-full text-center flex flex-col items-center justify-between">
                  <p className="leading-relaxed">{testimonial.content}</p>
                  <div>
                    <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4" />
                    <h2 className="text-gray-900 text-sm">
                      {testimonial.name}
                    </h2>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
