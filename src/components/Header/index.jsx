import { useState } from "react";
import NavbarModal from "../NavbarModal";
import { Link } from "react-router-dom";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-b-gray-200 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg firefox:bg-opacity-80">
      <nav className="navbar px-4 md:px-4 items-center">
        <div className="navbar-start h-16">
          <Link
            to="/"
            className="text-2xl md:text-4xl font-semibold text-red-500"
          >
            MovieReview
          </Link>
        </div>
        <div className="navbar-center hidden lg:block w-full max-w-xl">
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full rounded-full"
            />
          </form>
        </div>
        <div className="navbar-end">
          <div className="flex-none items-center block lg:hidden">
            <button type="button" onClick={handleToggleModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <NavbarModal isOpen={isOpen} closeModal={handleToggleModal} />
          </div>
          <div className="hidden md:block md:space-x-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-full font-semibold text-white bg-red-500 hover:bg-red-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 rounded-full font-semibold outline outline-1 hover:text-white bg-transparent hover:bg-red-600 hover:border-none "
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
