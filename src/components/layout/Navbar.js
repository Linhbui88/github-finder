import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-stone-900 bg-neutral-300">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-xl font-bold align-middle">
            Github Finder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/">
              <button className="btn-ghost btn-sm rounded-btn">HOME</button>
            </Link>
            <Link to="/about">
              <button className="btn-ghost btn-sm rounded-btn">ABOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
