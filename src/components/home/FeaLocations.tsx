import { Link } from "react-router-dom";
import { featLocations } from "../../assests/constants";

const FeaLocations = () => {
  return (
    <div
      className="flex flex-col items-center my-12 xl:max-w-[1400px] w-full
    py-[14px] px-[15px] mx-auto"
    >
      <h1 className="md:text-3xl text-2xl mb-12 text-black font-bold">
        Featured Locations
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full">
        {featLocations.map((data) => (
          <Link to={`/search=${data.title.toLocaleLowerCase()}`}>
            <div className="flex lg:h-[240px] relative overflow-hidden rounded-lg">
              <img src={data.bg} alt={data.title} className="flex-1 " />
              <div className="absolute top-0 left-0 bg-black/50 w-full h-full text-white p-4 flex justify-between">
                <span>{data.title}</span>
                <span>{data.proj}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to={"/compounds"} className="mt-14 text-[#019DFB]">
        See all locations
      </Link>
    </div>
  );
};

export default FeaLocations;
