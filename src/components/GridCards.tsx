import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowsUpDown, FaBath, FaBed, FaCamera } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

type GridCardsProps = {
  title: string;
  images: string;
  price: number;
  unite_type: string;
  bedrooms: number;
  bathrooms: number;
  unite_size: number;
  location: string;
  slug: string;
  small: boolean;
};

const GridCards = ({
  title,
  images,
  price,
  unite_type,
  bedrooms,
  bathrooms,
  unite_size,
  location,
  slug,
}: GridCardsProps) => {
  const image = images.split(",");
  const f = new Intl.NumberFormat("en-EG");
  const type = unite_type?.split("-");

  return (
    <div className="sm:h-[400px] h-[300px] w-full flex flex-col rounded-md border border-[#DDDDDD] overflow-hidden group">
      {/* First Part */}
      <div className="sm:min-h-[240px] h-[180px] relative">
        <img src={image[0]} alt={title} className="w-full h-full bg-cover" />
        <div className="w-full absolute right-0 bottom-0 p-4 text-[#B4B8B8] text-sm flex flex-row justify-between z-10">
          <div className="flex flex-row items-center gap-1">
            <FaMapMarkerAlt
              color="#ffffffb3"
              className="sm:text-[16px] text-[12px]"
            />{" "}
            <span className="text-[#FFFFFF] sm:text-sm text-xs">
              {location}
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaCamera size={15} />
            <span className="text-white">{image.length}</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Second Part */}
      <div className="px-3 pt-3 h-full">
        <div className="font-bold">
          <Link
            to={`/${slug}`}
            className="group-hover:text-[#01B8FD] block leading-5 sm:text-base text-xs"
          >
            {title}
          </Link>
          <p
            className="text-[#FB6B01] block
          } sm:text-[18px] text-sm mt-1"
          >
            {price ? f.format(price) : "1,000,000"}{" "}
            <span className="font-normal">EGP</span>
          </p>
        </div>
        <div className="sm:mt-4 mt-2">
          <ul className="flex flex-row gap-4">
            <li className="flex flex-row items-center gap-1">
              <IoHome color="#5C727D" className="sm:text-[16px] text-[12px]" />
              <p className="text-[#6F818A] sm:text-sm text-xs">
                {type && type[0]}
              </p>
            </li>
            <li className="flex flex-row items-center gap-1">
              <FaBed color="#5C727D" className="sm:text-[16px] text-[12px]" />
              <p className="text-[#6F818A] sm:text-sm text-xs">{bedrooms}</p>
            </li>
            <li className="flex flex-row items-center gap-1">
              <FaBath color="#5C727D" className="sm:text-[16px] text-[12px]" />
              <p className="text-[#6F818A] sm:text-sm text-xs">{bathrooms}</p>
            </li>
            <li className="flex flex-row items-center gap-1">
              <FaArrowsUpDown
                color="#5C727D"
                className="sm:text-[16px] text-[12px]"
              />
              <p className="text-[#6F818A] sm:text-sm text-xs">
                {unite_size} m<sup>2</sup>
              </p>
            </li>
          </ul>
        </div>
        <div className="my-2">
          <Link
            to={`/${slug}`}
            className={`transition duration-300 border border-[#01B8FD] text-[#01B8FD] hover:bg-[#019DFB] hover:text-white 
           text-sm
           px-5 py-1
            `}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
