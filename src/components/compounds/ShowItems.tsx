import { useEffect, useState } from "react";
import axios from "axios";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ShowProp from "../card";

const ShowItems = () => {
  const url = "http://localhost:3000/get-compounds";
  const [comps, setComps] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((comps) => setComps(comps.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-[1018px] w-full p-4 border border-[#dddddd] rounded-lg">
      <p className="flex flex-row items-center gap-2 text-base mb-7">
        <Link to={"/"} className="font-light">
          Home
        </Link>{" "}
        <FaAnglesRight size={10} />
        <span className="text-sm text-[#B4BBC5]">Egypt's Compounds</span>
      </p>
      <h1 className="font-bold text-3xl relative">
        <span className="before:absolute before:bottom-0 before:left-0 before:w-[50px] before:h-[10px] before:border-[#FB6B01] before:content-none">
          Egypt's
        </span>{" "}
        Compounds - 1020 compounds and 30810 properties for sale.
      </h1>
      <div className="mt-6 border-t border-gray-500 pt-4 grid lg:grid-cols-2 grid-cols-1 gap-7">
        {comps.map(({ title, dev_by, price, images, slug }, index) => {
          const image = images?.split(",");
          return (
            <ShowProp
              key={index}
              title={title}
              dev_by={dev_by}
              price={price}
              image={image[0]}
              slug={slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowItems;
