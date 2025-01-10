import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header className="w-full h-16 z-40  lg:bg-zinc-950 bg-zinc-950/80 text-white lg:sticky static top-0">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portafolio</h1>
        <nav className="lg:block hidden">
          <ul className="flex gap-12 font font-semibold">
            <li className="hover:text-primary">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-primary">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
