import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="absolute top-0 left-0 w-[100vw] h-[100vh] z-50 bg-white flex flex-col justify-center items-center px-2">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-7xl">404</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <Link
          to="/"
          className="border border-gray-300 rounded-md p-3 flex mt-2"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
