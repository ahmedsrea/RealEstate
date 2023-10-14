import { useState } from "react";
import CompoundCard from "./CompoundCard";
import PropertyCards from "./PropertyCard";

const ShowCards = ({ data }: any) => {
  const [card, setCard] = useState("compounds");
  return (
    <div>
      <div className="pt-3 border-b border-[#dddddd] text-lg font-light">
        <button
          className={`
          ${
            card === "compounds"
              ? "border-black text-[#2D3436]"
              : "border-none text-[#999999]"
          } 
            px-6
            pb-2 
            uppercase  
            border-b-[3px] 
            hover:border-none
            `}
          onClick={() => setCard("compounds")}
        >
          compounds
        </button>
        <button
          className={`
          ${
            card === "properties"
              ? "border-black text-[#2D3436]"
              : "border-none text-[#999999]"
          }
            px-6 
            pb-2 
            uppercase
            border-b-[3px]
            hover:border-none
            `}
          onClick={() => setCard("properties")}
        >
          properties
        </button>
      </div>

      <div className="min-h-[185px]">
        {card === "compounds" && data && (
          <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-7">
            {data.map((data: any) => (
              <CompoundCard key={data._id} {...data} />
            ))}
          </div>
        )}

        {card === "properties" && data && <PropertyCards data={data} />}

        {!data && (
          <p className="text-xl font-extralight pt-16 px-5">
            There are no compounds matching these criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowCards;
