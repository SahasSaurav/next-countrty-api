import {  useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function Navbar() {
  const { dark, toggleTheme } = useContext(ThemeContext);


  return (
    <nav className=" w-full bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-100 shadow-lg py-2">
      <div className="container  justify-between ">
        <h2 className="text-3xl sm:text-4xl  ">Where in the World?</h2>
        <button
          className=" flex flex-row justify-center items-center px-2 py-1 border-2 rounded border-gray-700 dark:border-gray-50 transform hover:scale-105 focus:outline-none"
          onClick={toggleTheme}
        >
          <svg
            className="transform scale-75 sm:scale-100 w-6 h-6 stroke-2 stroke-current mr-1 fill-current "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
          <span>Dark Mode</span>
        </button>
      </div>
    </nav>
  );
}
