import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaBuilding } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import PageButton from "../../components/PageButton";
import { useState } from "react";

type Data = {
  title: string;
  images: string;
  slug: string;
  _id: string;
};

const Developers = () => {
  const [page, setPage] = useState(1);
  const url = `http://localhost:3000/api/v1/developers?page=${page}`;
  const {
    isLoading,
    error,
    data: devs,
    isPreviousData,
  } = useQuery({
    queryKey: ["devs", { page }],
    queryFn: () => axios.get(url),
    keepPreviousData: true,
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occured" + error;

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);
  const pagesArray = Array(devs?.data?.data.total_pages)
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
        disabled={isPreviousData || page === devs?.data?.total_pages}
        className={`border px-[12px] py-2 rounded-md hover:bg-[#FB6B01] hover:text-white hover:opacity-75 transition duration-300 ${
          isPreviousData || page === devs?.data?.total_pages
            ? "text-[#6a6a6a]"
            : "border-[#FB6B01] text-[#FB6B01]"
        }`}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </nav>
  );

  return (
    <div className="mt-9 xl:max-w-[1400px] w-full mx-auto px-[15px]">
      <h1 className="text-[24px] font-bold mb-4">Developers</h1>

      <div className="ml-4">
        <Link to={"/"} className="text-[#019DFC] hover:text-black">
          Home
        </Link>{" "}
        <span className="mr-2 ml-2">/</span> Developers
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-[120px] mb-16">
        {devs?.data?.data.map(({ title, slug, images, _id }: Data) => (
          <div
            className="relative h-[250px] flex flex-col items-center"
            key={_id}
          >
            <div className="bg-[#FAFBFC] rounded-lg border-[1px] border-[#DDDDDD] group relative flex flex-col justify-center text-center w-full h-[190px]">
              <div className="absolute -top-[35%] left-[31%] w-[125px] h-[125px] z-10">
                <img
                  src={images}
                  alt={title}
                  className="w-[125px] h-[125px] border-[1px] border-[#DDDDDD] rounded-[50%]"
                />
              </div>

              <Link
                to={`${slug}`}
                className="absolute top-0 left-0 w-full h-full z-20"
              ></Link>
              <h1 className="group-hover:text-[#019dfc] text-[#2D3436] mt-16 font-bold text-base px-1">
                {title}
              </h1>
              <p className="flex items-center gap-1 justify-center mt-9 text-[#6A6A6A] opacity-80">
                <FaBuilding size={15} className="opacity-70" />{" "}
                <span className="font-bold opacity-100">1</span>
                <span className="text-xs">project</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {nav}
    </div>
  );
};

export default Developers;
