import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ForSaleCard from "../../components/ForSaleCard";
import SaleFilter from "./SaleFilter";

const ForSale = () => {
  const url = "http://localhost:3000/get-property";
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="lg:max-w-[1110px] mx-auto px-[15px] my-[30px]">
      <h1 className="font-bold text-3xl mb-16">100 Properties for salse</h1>
      <div className="ml-3">
        <Link to={"/"} className="text-[#019DFC] hover:text-black">
          Home
        </Link>{" "}
        <span className="mr-2 ml-2">/</span>
        <Link to={"/"} className="text-[#019DFC] hover:text-black">
          Properties for sale
        </Link>{" "}
      </div>

      <div className="flex flex-row items-start gap-6 mt-16">
        <SaleFilter />

        <div className="sm:border sm:border-[#DDDDDD] rounded-lg lg:min-w-[730px] md:max-w-[690px] sm:max-w-[510px] w-full mx-auto sm:p-4">
          {data.map((data) => (
            <ForSaleCard {...data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForSale;
