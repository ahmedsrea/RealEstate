import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowsUpDown, FaBath, FaBed, FaCamera } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

type ForSaleCardTypes = {
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

const ForSaleCard = ({
  title,
  images,
  price,
  unite_type,
  bedrooms,
  bathrooms,
  unite_size,
  location,
  slug,
  small,
}: ForSaleCardTypes) => {
  const image = images?.split(",");
  const f = new Intl.NumberFormat("en-EG");
  return (
    <div
      className={`${
        small ? "max-h-[150px]" : "sm:min-h-[180px] min-h-[130px]"
      } w-full border border-[#DDDDDD] flex flex-row mb-5 rounded-lg overflow-hidden group`}
    >
      <div
        className={`sm:max-w-[200px] ${
          small ? "w-[100px]" : "max-w-[150px]"
        } relative`}
      >
        <div className="absolute"></div>
        <Link to={`/${slug}`}>
          <img src={image[0]} alt={title} className="w-full h-full bg-cover" />
          <div className="absolute right-4 bottom-4 text-[#B4B8B8] text-sm flex flex-row gap-1 z-10">
            <FaCamera size={15} />
            <span className="text-white">{image.length}</span>
          </div>
          <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black to-transparent"></div>
        </Link>
      </div>

      <div className="p-4 flex-1">
        <div className="font-bold">
          <Link
            to={`/${slug}`}
            className={`group-hover:text-[#01B8FD] block leading-5 ${
              small ? "text-xs" : "sm:text-base text-xs"
            } `}
          >
            {title}
          </Link>
          <p
            className={`text-[#FB6B01] ${
              small ? "hidden" : "block"
            } sm:text-[18px] text-sm mt-1`}
          >
            {price ? f.format(price) : "1,000,000"}{" "}
            <span className="font-normal">EGP</span>
          </p>
        </div>
        <div className={`${small ? "mt-2" : "mt-4"}`}>
          <ul className="flex flex-row gap-4">
            <li className="flex flex-row items-center gap-1">
              <IoHome
                color="#5C727D"
                className={`${
                  small ? "text-xs" : "sm:text-[16px] text-[12px]"
                }`}
              />
              <p
                className={`text-[#6F818A] ${
                  small ? "text-xs" : "sm:text-sm text-xs"
                }`}
              >
                {unite_type}
              </p>
            </li>
            <li className="flex flex-row items-center gap-1">
              <FaBed
                color="#5C727D"
                className={`${
                  small ? "text-xs" : "sm:text-[16px] text-[12px]"
                }`}
              />
              <p
                className={`text-[#6F818A] ${
                  small ? "text-xs" : "sm:text-sm text-xs"
                }`}
              >
                {bedrooms}
              </p>
            </li>
            <li className="flex flex-row items-center gap-1">
              <FaBath
                color="#5C727D"
                className={`${
                  small ? "text-xs" : "sm:text-[16px] text-[12px]"
                }`}
              />
              <p
                className={`text-[#6F818A] ${
                  small ? "text-xs" : "sm:text-sm text-xs"
                }`}
              >
                {bathrooms}
              </p>
            </li>
            <li className="flex flex-row items-center gap-1">
              <FaArrowsUpDown
                color="#5C727D"
                className={`${
                  small ? "text-xs" : "sm:text-[16px] text-[12px]"
                }`}
              />
              <p
                className={`text-[#6F818A] ${
                  small ? "text-xs" : "sm:text-sm text-xs"
                }`}
              >
                {unite_size} m<sup>2</sup>
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-2 flex flex-row justify-between items-center">
          <p
            className={`flex flex-row items-center gap-1 ${
              small ? "hidden" : "block"
            }`}
          >
            <FaMapMarkerAlt
              color="#5C727D"
              className="sm:text-[16px] text-[12px]"
            />{" "}
            <span className="text-[#6F818A] sm:text-sm text-xs">
              {location}
            </span>
          </p>
          <Link
            to={`/${slug}`}
            className={`transition duration-300 border border-[#01B8FD] text-[#01B8FD] hover:bg-[#019DFB] hover:text-white 
            ${small ? "text-xs" : "text-sm"}
            ${small ? "px-2 py-1" : "px-5 py-1"} 
            `}
          >
            {small ? "Show Price" : "Details"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForSaleCard;
