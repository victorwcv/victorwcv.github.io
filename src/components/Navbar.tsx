import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header className="w-full h-16 z-40  lg:bg-zinc-950/90 bg-zinc-950/80 text-white lg:sticky static top-0">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <img
          src="vc-logo.png"
          alt="vc logo"
          className="block w-12 h-12 object-contain brightness-125"
        />
        <nav className="lg:block hidden">
          <ul className="flex gap-12 font font-semibold">
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
