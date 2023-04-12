import style from './servicesList.module.css';

export const ServicesList = ({ service, isOdd }) => {
  return (
    <ul class="md:w-11/12">
      {service.points.map((i) => (
        <li
          class={`w-full border-b-2  ${
            isOdd ? 'md:text-right' : 'md:text-left'
          } border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50`}
        >
          <span
            class={`font-bold  ${
              i.serviceTitle === 'AI Agents'
                ? `${style.linearWipe} text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-600 text-green-500`
                : 'text-gray-900'
            }`}
          >{`${i.serviceTitle}:`}</span>{' '}
          <span>{i.serviceDesc}</span>
        </li>
      ))}
    </ul>
  );
};
