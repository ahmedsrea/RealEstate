import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import PageButton from "./PageButton";

const PaginationNav = ({
  prevPage,
  nextPage,
  isPreviousData,
  page,
  setPage,
  pagesArray,
  total_pages,
}) => {
  return (
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
        disabled={isPreviousData || page === total_pages}
        className={`border px-[12px] py-2 rounded-md hover:bg-[#FB6B01] hover:text-white hover:opacity-75 transition duration-300 ${
          isPreviousData || page === total_pages
            ? "text-[#6a6a6a]"
            : "border-[#FB6B01] text-[#FB6B01]"
        }`}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </nav>
  );
};

export default PaginationNav;
