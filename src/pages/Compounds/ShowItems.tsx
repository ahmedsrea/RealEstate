import { FaAnglesRight } from "react-icons/fa6";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShowCards from "../../components/ShowCards";

const ShowItems = () => {
  // const [searchParams] = useSearchParams();

  // const proj_type = searchParams.get("project_type");
  // const location = searchParams.get("location");
  // const budget_range = searchParams.get("budget_range");

  const url = "http://localhost:3000/get-compounds";
  const { isLoading, error, data } = useQuery({
    queryKey: ["showItems"],
    queryFn: () => axios.get(url),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading";
  if (error) return "An error has occured" + error;

  return (
    <div className="max-w-[1018px] w-full sm:p-4 sm:border border-[#dddddd] rounded-lg">
      <p className="flex flex-row items-center gap-2 text-sm mb-7 ml-4">
        <Link to={"/"} className="font-light">
          Home
        </Link>{" "}
        <FaAnglesRight size={10} />
        <span className="text-[#B4BBC5]">Egypt's Compounds</span>
      </p>
      <h1 className="font-bold sm:text-3xl text-2xl relative">
        <span className="before:absolute before:bottom-0 before:left-0 before:w-[50px] before:h-[10px] before:border-[#FB6B01] before:content-none">
          Egypt's
        </span>{" "}
        Compounds - 1020 compounds and 30810 properties for sale.
      </h1>
      <ShowCards data={data?.data} />
    </div>
  );
};

export default ShowItems;
