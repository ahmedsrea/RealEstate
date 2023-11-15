import { useState } from "react";
import { Link } from "react-router-dom";
import ForSaleCard from "../../components/ForSaleCard";
import SaleFilter from "./SaleFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PaginationNav from "../../components/PaginationNav";

const ForSale = () => {
  const [page, setPage] = useState(1);
  const url = `http://localhost:3000/api/v1/compounds/get-property?page=${page}`;
  const {
    isLoading,
    error,
    data: Property,
    isPreviousData,
  } = useQuery({
    queryKey: ["showProperty", { page }],
    queryFn: () => axios.get(url),
    keepPreviousData: true,
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading";
  if (error) return "An error has occured" + error;

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);
  const pagesArray = Array(Property?.data?.total_pages)
    .fill()
    .map((_, index) => index + 1);

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

        <div>
          <div className="sm:border sm:border-[#DDDDDD] rounded-lg lg:min-w-[730px] md:max-w-[690px] sm:max-w-[510px] w-full mx-auto sm:p-4">
            {Property?.data?.data.map((data) => (
              <ForSaleCard {...data} key={data._id} />
            ))}
          </div>
          <PaginationNav
            prevPage={prevPage}
            nextPage={nextPage}
            isPreviousData={isPreviousData}
            page={page}
            setPage={setPage}
            pagesArray={pagesArray}
            total_pages={Property?.data?.total_pages}
          />
        </div>
      </div>
    </div>
  );
};

export default ForSale;
