import { FaAnglesRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShowCards from "../../components/ShowCards";

const ShowItems = () => {
  const uselocation = useLocation();
  const searchParams = new URLSearchParams(uselocation.search);
  // const selectedView = searchParams.get("view");

  const params = {
    location: searchParams.get("location"),
    proj_type: searchParams.get("project_type"),
    unite_type: searchParams.get("property_type"),
    dev_by: searchParams.get("developer"),
    min_area: searchParams.get("min_area"),
    max_area: searchParams.get("max_area"),
    min_price: searchParams.get("min_price"),
    max_price: searchParams.get("max_price"),
  };

  const url = "http://localhost:3000/api/v1/compounds";
  const { isLoading, error, data } = useQuery({
    queryKey: ["showItems"],
    queryFn: () => axios.get(url, { params }),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading";
  if (error) return "An error has occured" + error;

  return (
    <div className="max-w-[1018px] w-full sm:p-4 sm:border border-[#dddddd] rounded-lg">
      <p className="flex flex-row items-center gap-2 text-sm mb-6 ml-4">
        <Link to={"/"} className="font-light">
          Home
        </Link>{" "}
        <FaAnglesRight size={10} />
        <span className="text-[#B4BBC5]">Egypt's Compounds</span>
      </p>
      <h1 className="font-bold sm:text-3xl text-2xl relative mb-7">
        <span className="">Egypt's</span> Compounds - 1020 compounds and 30810
        properties for sale.
      </h1>
      <ShowCards data={data?.data.data} />
    </div>
  );
};

export default ShowItems;
