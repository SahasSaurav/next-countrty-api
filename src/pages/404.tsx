import Link from "next/link";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";

export default function error404Page() {
  return (
    <>
      <Navbar />
      <div className="container flex-col mx-auto p-4">
        <Link href="/">
          <a>
            <BackButton name="Back to Home" />
          </a>
        </Link>
        <div className="flex flex-col justify-center items-center  w-full text-white ">
          <svg
            className="h-64 w-full sm:w-auto"
            version="1.1"
            id="fd59ce54-f850-4dfc-bc34-dd7d379d600e"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 1074.4 584.2"
          >
            <ellipse
              cx="540.6"
              cy="549.3"
              rx="527.5"
              ry="34.9"
              className="fill-current text-gray-700 dark:text-gray-100"
            />
            <path
              className="st1 fill-current text-gray-400 dark:text-gray-300 shadow-md"
              // fill="#B8BDC4"
              d="M520.4 167c-85.9 0-147.7 55.1-147.7 183.8 0 145.8 61.7 184.4 147.7 184.4s151.3-42.3 151.3-184.4c.1-151.9-65.3-183.8-151.3-183.8zm.6 319.8c-59.5 0-90.6-34.9-90.6-135.9 0-89.1 32.4-136.1 91.9-136.1s91.9 30.9 91.9 136.1c0 98.4-33.7 135.9-93.2 135.9z"
            />
            <path
              className="st2"
              fill="#ff9563"
              d="M321.3 433.5h-35.5V328.9c0-11.6-9.4-21-21-21h-8.3c-11.6 0-21 9.4-21 21v104.6H135.3c-6.6 0-12-5.4-12-12 0-1.9.5-3.9 1.4-5.6l106.1-200.8c5.4-10.2 1.5-22.9-8.7-28.3-.3-.1-.6-.3-.8-.4l-6.3-3c-10.1-4.8-22.2-.8-27.4 9.1l-129.4 242c-2.2 4.1-3.4 8.7-3.4 13.4 0 15.7 12.7 28.4 28.4 28.4h152.3v66.2c0 13.9 11.2 25.1 25.1 25.1 13.9 0 25.1-11.2 25.1-25.1v-66.2h35.5c11.8 0 21.4-9.6 21.4-21.4.2-11.8-9.4-21.4-21.3-21.4zM979.3 433.5h-35.5V328.9c0-11.6-9.4-21-21-21h-8.3c-11.6 0-21 9.4-21 21v104.6H793.3c-6.6 0-12-5.4-12-12 0-1.9.5-3.9 1.4-5.6l106.1-200.8c5.4-10.2 1.5-22.9-8.7-28.3-.3-.1-.6-.3-.8-.4l-6.3-3c-10.1-4.8-22.2-.8-27.4 9.1l-129.4 242c-2.2 4.1-3.4 8.7-3.4 13.4 0 15.7 12.7 28.4 28.4 28.4h152.3v66.2c0 13.9 11.2 25.1 25.1 25.1 13.9 0 25.1-11.2 25.1-25.1v-66.2h35.5c11.8 0 21.4-9.6 21.4-21.4.2-11.8-9.4-21.4-21.3-21.4z"
            />
            <ellipse
              className="st1"
              fill="#B8BDC4"
              cx="480.9"
              cy="319.1"
              rx="17"
              ry="22"
            />
            <ellipse
              className="st1"
              fill="#B8BDC4"
              cx="573.4"
              cy="319.6"
              rx="17"
              ry="22"
            />
            <path
              className="st1"
              fill="#B8BDC4"
              d="M560.4 384.6c0 9.9-13.9 18-31 18s-31-8.1-31-18c0-8.6 10.4-15.8 24.3-17.6 2.2-.3 4.4-.4 6.7-.4 3.7 0 7.5.4 11.1 1.2 11.7 2.6 19.9 9.2 19.9 16.8z"
            />
            <path
              className="st3"
              fill="#fff"
              d="M540.9 369.3c0 1.3-.5 2.5-1.3 3.4-.8.9-2 1.4-3.2 1.4h-10c-2.6-.1-4.6-2.2-4.5-4.8 0-1 .3-1.9.8-2.7 2.2-.3 4.4-.5 6.7-.5 3.7 0 7.5.4 11.1 1.3.3.6.4 1.3.4 1.9z"
            />
            <circle className="st3" fill="#fff" cx="484.9" cy="308.1" r="5" />
            <circle className="st3" fill="#fff" cx="577.9" cy="308.1" r="5" />
            <circle
              className="st4"
              fill="#ff9563"
              cx="582.9"
              cy="355.1"
              r="5"
            />
            <circle
              className="st4"
              fill="#ff9563"
              cx="460.9"
              cy="355.1"
              r="5"
            />
          </svg>
          <h3 className="text-gray-900 dark:text-gray-50 text-4xl">Page Not Found</h3>
          <p className="text-gray-800 dark:text-gray-200 opacity-75  text-xl text font-normal">
            Uh oh, we can't seeem to find the page you're looking for. Try going
            back to the previous page.
          </p>
        </div>
      </div>
    </>
  );
}
