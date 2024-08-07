import { Link, useNavigate } from "react-router-dom";
import { featLocations } from "../../data/constants";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const FeaLocations = () => {
  const searchContext = useContext(SearchContext);
  const { setSearchData } = searchContext;
  const navigate = useNavigate();
  const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(50px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const searchLocation = (title: string) => {
    setSearchData({ location: `${title}` });
    navigate("/compounds");
  };

  return (
    <div
      className="flex flex-col items-center my-12 xl:max-w-[1400px] w-full
    py-[14px] px-[15px] mx-auto"
    >
      <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
        <h1 className="md:text-3xl text-2xl mb-16 text-black font-bold relative">
          Featured Locations
          <span className="under-line"></span>
        </h1>
      </Reveal>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full">
        {featLocations.map((data, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => searchLocation(data.title)}
          >
            <div className="flex lg:h-[240px] min-h-[240px] max-h-[300px] relative overflow-hidden rounded-lg">
              <img src={data.bg} alt={data.title} className="flex-1" />
              <div className="absolute top-0 left-0 bg-black/50 w-full h-full text-white p-4 flex justify-between">
                <span>{data.title}</span>
                <span>{data.proj}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/compounds"} className="mt-14 text-[#019DFB]">
        See all locations
      </Link>
    </div>
  );
};

export default FeaLocations;
