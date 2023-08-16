import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <form
      method=""
      action=""
      className="relative lg:w-auto flex flex-1 lg:ml-[50px] ml-[25px] "
    >
      <input
        type="search"
        placeholder="Project name"
        name="navSearch"
        className="rounded-2xl border border-[#d1d1d1] pl-3 py-[5px] placeholder:text-[#75757E] lg:w-[204px] w-[100%] focus:outline-none"
      />
      <div className="absolute top-2 right-4 bg-white text-[#AAAAAA]">
        <FiSearch />
      </div>
    </form>
  );
};

export default Search;
