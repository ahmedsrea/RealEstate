import { DataType } from "./FirstSectoin";

const PropInfo = ({
  proj_name,
  dev_by,
  unite_type,
  unite_space,
  price,
  bedrooms,
  furnishing,
  bathrooms,
}: DataType) => {
  return (
    <div className="w-full mb-8 lg:hidden border border-[#ddd] rounded-[4px]">
      <div className="bg-white flex flex-row items-center w-full text-[#2d3436] border-b border-[#ddd] text-sm">
        <strong className="w-[20%] border-r border-[#ddd] pl-2 pr-5 py-1">
          Project Name
        </strong>
        <p className="w-[70%] pl-2">{proj_name}</p>
      </div>
      <div className="bg-white flex flex-row items-center w-full text-[#2d3436] border-b border-[#ddd] text-sm">
        <strong className="w-[20%] border-r border-[#ddd] pl-2 pr-5 py-1">
          Developer Name
        </strong>
        <p className="w-[70%] pl-2">{dev_by}</p>
      </div>
      <div className="bg-white flex flex-row items-center w-full text-[#2d3436] border-b border-[#ddd] text-sm">
        <strong className="w-[20%] border-r border-[#ddd] pl-2 pr-5 py-1">
          Unit Type
        </strong>
        <p className="w-[70%] pl-2">{unite_type}</p>
      </div>
      <div className="bg-white flex flex-row items-center w-full text-[#2d3436] border-b border-[#ddd] text-sm">
        <strong className="w-[20%] border-r border-[#ddd] pl-2 pr-5 py-1">
          Unit Space
        </strong>
        <p className="w-[70%] pl-2">{unite_space}</p>
      </div>
      <div className="bg-white flex flex-row items-center w-full text-[#2d3436] border-b border-[#ddd] text-sm">
        <strong className="w-[20%] border-r border-[#ddd] pl-2 pr-5 py-1">
          Unit Price
        </strong>
        <p className="w-[70%] pl-2">{price}</p>
      </div>
      <div className="bg-white flex flex-row items-center w-full text-[#2d3436] border-b border-[#ddd] text-sm">
        <strong className="w-[20%] border-r border-[#ddd] pl-2 pr-5 py-1">
          Number of Rooms
        </strong>
        <p className="w-[70%] pl-2">{bedrooms}</p>
      </div>
      <div className="bg-white flex flex-row items-center w-full text-[#2d3436] border-b border-[#ddd] text-sm">
        <strong className="w-[20%] border-r border-[#ddd] pl-2 pr-5 py-1">
          Number of Baths
        </strong>
        <p className="w-[70%] pl-2">{bathrooms}</p>
      </div>
      <div className="bg-white flex flex-row items-center w-full text-[#2d3436] text-sm">
        <strong className="w-[20%] border-r border-[#ddd] pl-2 pr-5 py-1">
          Finishing Type
        </strong>
        <p className="w-[70%] pl-2">{furnishing}</p>
      </div>
    </div>
  );
};

export default PropInfo;
