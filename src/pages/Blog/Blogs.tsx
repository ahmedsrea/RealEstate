import { Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Blogs = () => {
  const [page, setPage] = useState(1);
  const url = `http://localhost:3000/api/v1/blogs?page=${page}`;
  const {
    isLoading,
    error,
    data: blogs,
    isPreviousData,
  } = useQuery({
    queryKey: ["showItems", { page }],
    queryFn: () => axios.get(url),
    keepPreviousData: true,
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading";
  if (error) return "An error has occured" + error;

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const nav = (
    <nav className="flex justify-center gap-2 py-5 mb-[48px] border-t border-[#DDDDDD]">
      <button
        onClick={prevPage}
        disabled={isPreviousData || page === 1}
        className={`flex items-center border px-[12px] py-2 rounded-md gap-2 hover:bg-[#FB6B01] hover:text-white hover:opacity-75 ${
          page !== 1 ? "border-[#FB6B01] text-[#FB6B01]" : "text-[#6a6a6a]"
        }`}
      >
        <FaAngleDoubleLeft size={8} />
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={isPreviousData || page === blogs?.data?.total_pages}
        className={`flex items-center border px-[12px] py-2 rounded-md gap-2 hover:bg-[#FB6B01] hover:text-white hover:opacity-75 ${
          isPreviousData || page === blogs?.data?.total_pages
            ? "text-[#6a6a6a]"
            : "border-[#FB6B01] text-[#FB6B01] "
        }`}
      >
        Next
        <FaAngleDoubleRight size={8} />
      </button>
    </nav>
  );

  return (
    <div className="mt-9 xl:max-w-[1400px] w-full mx-auto px-[15px]">
      <h1 className="text-[24px] font-bold mb-4">Egypt's Real Estate Blog</h1>

      <div>
        <div className="ml-3">
          <Link to={"/"} className="text-[#019DFC] hover:text-black">
            Home
          </Link>{" "}
          <span className="mr-2 ml-2">/</span> Blog
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 pb-[56px]">
          {blogs?.data?.data.map((data: any) => (
            <div
              key={data._id}
              className="rounded-md overflow-hidden border border-[#DDDDDD] group"
            >
              <Link to={`/blog/${data.slug}`}>
                <img src={data.images} alt="" />
              </Link>
              <div className="p-4">
                <Link to={`/blog/${data.slug}`}>
                  <h1 className="font-bold group-hover:text-[#019DFC]">
                    {data.title}
                  </h1>
                </Link>
                <div className="font-thin text-[13px]">
                  Published at {new Date(data.createdAt).toLocaleDateString()}
                </div>
                <div className=" text-[14px] my-3 text-[#2d3436]">
                  <ReactMarkdown
                    children={data?.markdown?.slice(0, 50) + "..."}
                  />
                  {/* <ReactMarkdown>Hello *Ahmed*</ReactMarkdown> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {nav}

        <div className="w-full py-5 border-t border-[#DDDDDD]">
          <div className="w-full flex justify-center bg-[#E2E3E4] p-5 rounded-[4px] text-[#595e60]">
            Please contact us on{" "}
            <span className="font-bold mx-1 text-[#404446]">+201009808986</span>{" "}
            or via
            <span className="font-bold mx-1 text-[#404446]">WhatsApp</span> to
            get help.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
