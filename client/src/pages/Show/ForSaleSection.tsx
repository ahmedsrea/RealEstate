import { Link } from "react-router-dom";
import ForSaleCard from "../../components/ForSaleCard";
import { useQuery } from "@tanstack/react-query";
import axios from "../../api/axios";

const ForSaleSection = () => {
  const { data } = useQuery({
    queryKey: ["forsale"],
    queryFn: () => axios.get("compounds?proj_type=property&per_page=4"),
  });
  return (
    <div className="xl:max-w-[1400px] mx-auto mt-16 bg-[#FFFFFF] w-full px-[15px] pb-14">
      <div className="lg:max-w-[780px] w-full">
        <h1 className="mb-3 font-bold text-2xl text-[#2d3436]">
          Properties for sale
        </h1>

        <div className="grid md:grid-cols-2 gap-5">
          {data?.data?.data &&
            data?.data?.data.map((data: any) => (
              <ForSaleCard {...data} key={data._id} small />
            ))}
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
