export const Footer = () => {
  return (
    <footer class="my-20 px-8 md:px-24">
      <p class="text-center text-sm text-slate-500">
        Copyright © {new Date().getFullYear()} ThinkITBeyond. All rights
        reserved.
      </p>
      <p class="text-center text-xs text-slate-500 mt-1">
        Made by{' '}
        <a
          href="https://thinkitbeyond.com"
          target="_blank"
          rel="noopener"
          class="hover:underline"
        >
          ThinkITBeyond
        </a>
      </p>
    </footer>
  );
};
