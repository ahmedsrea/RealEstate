import { FaAnglesRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShowCards from "../../components/ShowCards";
import { useState } from "react";
import PageButton from "../../components/PageButton";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ShowItems = () => {
  const [page, setPage] = useState(1);
  const uselocation = useLocation();
  const searchParams = new URLSearchParams(uselocation.search);
  // const selectedView = searchParams.get("view");

  const params = {
    title: searchParams.get("title"),
    location: searchParams.get("location"),
    proj_type: searchParams.get("project_type"),
    unite_type: searchParams.get("property_type"),
    dev_by: searchParams.get("developer"),
    min_area: searchParams.get("min_area"),
    max_area: searchParams.get("max_area"),
    min_price: searchParams.get("min_price"),
    max_price: searchParams.get("max_price"),
  };

  const url = `http://localhost:3000/api/v1/compounds?page=${page}`;
  const { isLoading, error, data, isPreviousData } = useQuery({
    queryKey: ["showItems", { page }],
    queryFn: () => axios.get(url, { params }),
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

  const nav = (
    <nav className="flex justify-center gap-2 mt-[65px] mb-[75px] pt-5 border-t border-[#DDDDDD]">
      <button
        onClick={prevPage}
        disabled={isPreviousData || page === 1}
        className={`border px-[12px] py-2 rounded-md hover:bg-[#FB6B01] hover:text-white hover:opacity-75 transition duration-300 ${
          isPreviousData || page !== 1
            ? "border-[#FB6B01] text-[#FB6B01]"
            : "text-[#6a6a6a]"
        }`}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      {pagesArray.map((pg) => (
        <PageButton
          key={pg}
          pg={pg}
          setPage={setPage}
          isPreviousData={isPreviousData}
        />
      ))}
      <button
        onClick={nextPage}
        disabled={isPreviousData || page === data?.data?.total_pages}
        className={`border px-[12px] py-2 rounded-md hover:bg-[#FB6B01] hover:text-white hover:opacity-75 transition duration-300 ${
          isPreviousData || page === data?.data?.total_pages
            ? "text-[#6a6a6a]"
            : "border-[#FB6B01] text-[#FB6B01]"
        }`}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </nav>
  );

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
        <span className="">Egypt's</span> Compounds - {data?.data?.total}{" "}
        compounds and 30810 properties for sale.
      </h1>
      <ShowCards data={data?.data.data} />
      {nav}
    </div>
  );
};

export default ShowItems;
