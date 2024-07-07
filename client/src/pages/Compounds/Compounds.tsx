import Filter, { FilterTypes } from "./Filter";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ShowCards from "../../components/ShowCards";
import { useState } from "react";
import PaginationNav from "../../components/PaginationNav";
import axios from "../../api/axios";

const Compounds = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});

  const { isLoading, error, data, isPreviousData } = useQuery({
    queryKey: ["showItems", { page, filter }],
    queryFn: () => axios.get(`/compounds?page=${page}`, { params: filter }),
    keepPreviousData: true,
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading";
  if (error) return "An error has occured" + error;

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);
  const pagesArray = Array(data?.data?.total_pages)
    .fill()
    .map((_, index) => index + 1);

  const handleFilterUpdate = (newFilter: FilterTypes) => {
    setFilter(newFilter);
  };

  return (
    <div className="mt-[97px] xl:max-w-[1400px] w-full mx-auto px-[15px] flex flex-row gap-[30px] pb-5">
      <Filter onFilterUpdate={handleFilterUpdate} />
      {/* <ShowItems /> */}
      <div className="max-w-[1018px] w-full sm:p-4 sm:border border-[#dddddd] rounded-lg">
        <p className="flex flex-row items-center gap-2 text-sm mb-6 ml-4">
          <Link to={"/"} className="font-light">
            Home
          </Link>{" "}
          <FaAnglesRight size={10} />
          <span className="text-[#B4BBC5]">Egypt's Compounds</span>
        </p>
        <h1 className="font-bold sm:text-3xl text-2xl relative mb-7">
          <span className="">Egypt's</span> Compounds - {data?.data?.total}{" "}
          compounds and 30810 properties for sale.
        </h1>
        <ShowCards data={data?.data.data} />
        <PaginationNav
          prevPage={prevPage}
          nextPage={nextPage}
          isPreviousData={isPreviousData}
          page={page}
          setPage={setPage}
          pagesArray={pagesArray}
          total_pages={data?.data?.total_pages}
        />
      </div>
    </div>
  );
};

export default Compounds;
