export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Hany Elgabry',
      title: 'Product Manager',
      content:
        'Krishna was friendly through the whole session and he showed a good Java experience when started code walkthrough and I am satisfied with all support provided by him, and I recommend him for any quick and deep code review or walkthrough.',
    },
    {
      name: 'Chris Smith',
      title: 'Special Projects Director',
      content:
        'Krishna is very organized and very keen on understanding the project. He delivered exactly what i needed and even figured out a very complicated integration.',
    },
    {
      name: 'Jerry L',
      title: 'Business Owner',
      content:
        'I enjoyed working with them on a recent project and was thoroughly impressed with their work. Their attention to detail and thoroughness was evident from the start, and their expertise in the field was exceptional.',
    },
  ];
  return (
    <div class="flex flex-col gap-3 mx-auto mt-16 text-center px-8 md:px-24">
      <h2 class="font-bold text-5xl text-gray-700">
        Here's what our clients have to say about us
      </h2>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="grid md:grid-cols-3 -m-4">
            {testimonials.map((testimonial) => (
              <div class="lg:mb-0  mx-4 p-8 shadow-md transform hover:-translate-y-3 ease-in duration-500">
                <div class="h-full text-center flex flex-col items-center justify-between">
                  <p class="leading-relaxed">{testimonial.content}</p>
                  <div>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                    <h2 class="text-gray-900 text-sm">{testimonial.name}</h2>
                    <p class="text-gray-500">{testimonial.title}</p>
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
