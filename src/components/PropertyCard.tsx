import { useState } from "react";
import { FaThLarge } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import ForSaleCard from "./ForSaleCard";
import GridCards from "./GridCards";

const PropertyCards = ({ data }: any) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full">
      <div className="w-flul flex flex-row justify-end border-b border-[#dddddd] pb-4 mb-4">
        <FaList
          size={20}
          className={`
          ${toggle ? "text-[#5C727D]" : "text-[#ADB8BE]"} 
          mr-4 
          cursor-pointer`}
          onClick={() => setToggle(true)}
        />
        <FaThLarge
          size={20}
          className={`
          ${!toggle ? "text-[#5C727D]" : "text-[#ADB8BE]"} 
          cursor-pointer`}
          onClick={() => setToggle(false)}
        />
      </div>

      {toggle &&
        data.map((data: any) => <ForSaleCard key={data._id} {...data} />)}

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 px-4">
        {!toggle &&
          data.map((data: any) => <GridCards key={data._id} {...data} />)}
      </div>
    </div>
  );
};

export default PropertyCards;
