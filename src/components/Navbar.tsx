import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header className="sm:block hidden w-full h-16 z-40 bg-zinc-900 text-white sticky top-0">
      <div className="container mx-auto px-4 h-full sm:flex hidden justify-between items-center">
        <img
          src="vc-logo.png"
          alt="vc logo"
          className="block w-12 h-12 object-contain brightness-125"
        />
        <nav className="block">
          <ul className="flex md:gap-12 gap-8 font font-semibold">
            <li className="hover:text-primary">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary">
              <a href="#resume">Resume</a>
            </li>
            <li className="hover:text-primary">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:text-primary">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
