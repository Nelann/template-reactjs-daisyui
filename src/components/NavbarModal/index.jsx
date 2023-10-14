import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

const NavbarModal = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-900 bg-opacity-20 backdrop-filter backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="mt-2">
                  <div className="flex flex-col justify-center items-start space-y-4">
                    <div className="flex flex-row justify-between w-full">
                      <a href="/" className="font-semibold">
                        Home
                      </a>
                      <button type="button" onClick={closeModal}>
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <a href="/" className="font-semibold">
                      About
                    </a>
                    <a href="/" className="font-semibold">
                      About
                    </a>
                    <form action="" className="w-full">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-md w-full rounded-full"
                      />
                    </form>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="mt-4 space-y-4">
                  <a
                    href="/login"
                    className="inline-block text-center w-full bg-red-500 hover:bg-red-600 focus:bg-red-700 py-2.5 rounded-md text-white font-semibold"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="inline-block text-center w-full bg-red-500 hover:bg-red-600 focus:bg-red-700 py-2.5 rounded-md text-white font-semibold"
                  >
                    Register
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

NavbarModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default NavbarModal;
