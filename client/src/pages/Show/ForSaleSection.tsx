import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ForSaleCard from "../../components/ForSaleCard";

const ForSaleSection = () => {
  const [data, setData] = useState([]);

  // async function useFetch() {
  //   let url = `http://localhost:3000/get-property`;
  //   return await fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }

  // useEffect(() => {
  //   useFetch();
  // }, [data]);

  return (
    <div className="xl:max-w-[1400px] mx-auto mt-16 bg-[#FFFFFF] w-full px-[15px] pb-14">
      <div className="lg:max-w-[780px] w-full">
        <h1 className="mb-3 font-bold text-2xl text-[#2d3436]">
          Properties for sale
        </h1>

        <div className="grid md:grid-cols-2 gap-5">
          {/* {data &&
            data.map((data: any) => (
              <ForSaleCard {...data} key={data._id} small />
            ))} */}
        </div>

        <Link
          to={"/for-sale"}
          className="text-[#019DFB] hover:text-opacity-70 text-lg"
        >
          Show more properties
        </Link>
      </div>
    </div>
  );
};

export default ForSaleSection;
