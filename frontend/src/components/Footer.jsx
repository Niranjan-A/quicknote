import { LinkedinIcon, GlobeIcon } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-base-300 border-t border-base-content/10 p-8">
      <footer className="footer items-center max-w-6xl mx-auto">
        <aside className="grid-flow-col items-center">
          <p className="font-mono text-primary">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            <a
              href="https://niranjanakilan.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary px-2"
              aria-label="Visit Niranjan Akilan's portfolio website"
            >
              Niranjan Akilan
            </a>
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/niranjan-akilan/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary"
            aria-label="Visit Niranjan Akilan's LinkedIn profile"
          >
            <LinkedinIcon
              className="size-5"
              aria-hidden="true"
            />
          </a>
          <a
            href="https://niranjanakilan.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary"
            aria-label="Visit Niranjan Akilan's portfolio website"
          >
            <GlobeIcon
              className="size-5"
              aria-hidden="true"
            />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
