import { FaArrowsUpDown, FaBath, FaBed } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import Connect from "../../../components/Connect";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import PropInfo from "./PropInfo";

export interface DataType {
  title?: string;
  location?: string;
  status?: string;
  del_date?: number;
  dev_by?: string;
  unite_type?: string;
  unite_size?: number;
  bedrooms?: number;
  bathrooms?: number;
  size?: number;
  images?: string;
  proj_name: string;
  unite_space: string;
  price: number;
  furnishing: string;
  features?: string;
  pay?: string;
}

const FirstSectoin = ({
  title,
  status,
  del_date = 2022,
  dev_by,
  unite_type,
  unite_size,
  bedrooms,
  bathrooms,
  images,
  proj_name,
  unite_space,
  price,
  furnishing,
}: DataType) => {
  document.title = title;
  const image = images?.split(",");

  return (
    <div className="w-full bg-[#EDF0F4] lg:py-9 py-3">
      <div className="xl:max-w-[1400px] w-full mx-auto px-[15px] flex flex-col-reverse lg:flex-row  gap-9">
        <div className="lg:max-w-[550px] w-full lg:h-[400px] md:h-[700px] sm:h-[600px]">
          <Gallery image={image} />
        </div>

        <div>
          <h1 className="mb-3 font-bold text-xl lg:text-3xl text-[#2d3436]">
            About {title}
          </h1>
          <p className="text-[#FB6B01] mb-4 lg:text-base text-xs">
            تواصل معنا لمعرفة احدث الاسعار والعروض
          </p>
          <div className="flex flex-row mb-2 lg:text-base text-sm">
            <h3 className="text-[#83818A]">
              <span className="font-bold text-[#6F818A] mr-1">Status</span>{" "}
              {status}
            </h3>
            <h3 className="text-[#83818A] ml-5 ">
              <span className="font-bold text-[#6F818A] mr-1">
                Delivery Date
              </span>{" "}
              {del_date}
            </h3>
          </div>
          <h3 className="mb-2 lg:text-base text-sm">
            <span className="font-bold text-[#6F818A] mr-1">Developed by:</span>{" "}
            <Link
              to={`/developers/${dev_by}`}
              className="text-[#019DFC] hover:text-[#0266a4]"
            >
              {dev_by}
            </Link>
          </h3>
          <div className="mb-12">
            <ul className="flex flex-row gap-4">
              <li className="flex flex-row items-center gap-1">
                <IoHome
                  color="#5C727D"
                  className="sm:text-[16px] text-[12px]"
                />
                <p className="text-[#6F818A] sm:text-sm text-xs">
                  {unite_type}
                </p>
              </li>
              <li className="flex flex-row items-center gap-1">
                <FaBed color="#5C727D" className="sm:text-[16px] text-[12px]" />
                <p className="text-[#6F818A] sm:text-sm text-xs">{bedrooms}</p>
              </li>
              <li className="flex flex-row items-center gap-1">
                <FaBath
                  color="#5C727D"
                  className="sm:text-[16px] text-[12px]"
                />
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

          <PropInfo
            proj_name={proj_name}
            dev_by={dev_by}
            unite_type={unite_type}
            unite_space={unite_space}
            price={price}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            furnishing={furnishing}
          />
          <Connect />
        </div>
      </div>
    </div>
  );
};

export default FirstSectoin;
