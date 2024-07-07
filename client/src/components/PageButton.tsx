const PageButton = ({ pg, setPage, isPreviousData }: any) => {
  return (
    <button
      className="border border-[#FB6B01] px-[13px] py-[7px] rounded-md focus:bg-[#FB6B01] focus:text-white text-[#FB6B01] 
      hover:bg-[#f4ac78] hover:border-[#f4ac78] hover:text-white transition duration-300"
      onClick={() => setPage(pg)}
      disabled={isPreviousData}
    >
      {pg}
    </button>
  );
};

export default PageButton;
