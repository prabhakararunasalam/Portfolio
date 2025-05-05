import React, { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button - Always visible on small screens */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="fixed top-4 left-4 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg bg-white shadow-md sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.25A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9zm.75 4.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 md:w-52 transition-transform duration-300 ease-in-out bg-gray-200 text-gray-900 dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto font-serif">
          <span className="block text-2xl font-bold mb-6 dark:text-white">
            Prabhakar
          </span>

          <ul className="space-y-6 font-medium text-lg">
            <li>
              <a href="#" className="sidebar-link">🏠 Home</a>
            </li>
            <li>
              <a href="#about" className="sidebar-link">👤 About</a>
            </li>
            
            <li>
              <a href="#mywork" className="sidebar-link">💼 My Work</a>
            </li>
            <li>
              <a href="#contact" className="sidebar-link">✉️ Contact</a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
