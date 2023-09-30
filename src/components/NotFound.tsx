import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="absolute top-0 left-0 w-[100vw] h-[100vh] grid md:grid-cols-2 grid-cols-1 z-50 bg-white">
      <div className="w-full flex flex-col justify-center items-start maxw-[500px] mx-auto">
        <h1 className="text-7xl">404</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <Link to="/" className="border border-gray-300 rounded-md p-3 flex">
          Go Home
        </Link>
      </div>
      <div className="not-found-image"></div>
    </div>
  );
};

export default NotFound;
