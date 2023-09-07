import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowsUpDown, FaBath, FaBed } from "react-icons/fa6";
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
}: ForSaleCardTypes) => {
  const image = images.split(",");
  const f = new Intl.NumberFormat("en-EG");
  return (
    <div className="sm:min-h-[180px] min-h-[130px] w-full border border-[#DDDDDD] flex flex-row mb-5 rounded-lg overflow-hidden group">
      <div className="sm:max-w-[200px] max-w-[150px] relative">
        <Link to={`/${slug}`}>
          <img src={image[0]} alt={title} className="w-full h-full bg-cover" />
          <div className="font-bold text-2xl absolute right-4 bottom-4 text-white">
            {image.length}
          </div>
        </Link>
      </div>

      <div className="p-4 flex-1">
        <div className="font-bold">
          <Link
            to={`/${slug}`}
            className="group-hover:text-[#01B8FD] block leading-5 sm:text-base text-xs"
          >
            {title}
          </Link>
          <p className="text-[#FB6B01] sm:text-[18px] text-sm mt-1">
            {price ? f.format(price) : "1,000,000"}{" "}
            <span className="font-normal">EGP</span>
          </p>
        </div>
        <div className="mt-4">
          <ul className="flex flex-row gap-4">
            <li className="flex flex-row items-center gap-1">
              <IoHome color="#5C727D" className="sm:text-[16px] text-[12px]" />
              <p className="text-[#6F818A] sm:text-sm text-xs">{unite_type}</p>
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
        <div className="mt-2 flex flex-row justify-between items-center">
          <p className="flex flex-row items-center gap-1">
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
            className="transition duration-300 px-5 py-1 border border-[#01B8FD] text-[#01B8FD] text-sm hover:bg-[#019DFB] hover:text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForSaleCard;
