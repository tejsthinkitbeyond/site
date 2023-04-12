export const Footer = () => {
  return (
    <footer className="my-20 px-8 md:px-24">
      <p className="text-center text-sm text-slate-500">
        Copyright © {new Date().getFullYear()} ThinkITBeyond. All rights
        reserved.
      </p>
      <p className="text-center text-xs text-slate-500 mt-1">
        Made by{' '}
        <a
          href="https://thinkitbeyond.com"
          target="_blank"
          rel="noopener"
          className="hover:underline"
        >
          ThinkITBeyond
        </a>
      </p>
    </footer>
  );
};
