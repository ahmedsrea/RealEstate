import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const searchContext = useContext(SearchContext);
  const { setSearchData } = searchContext;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setSearchData({ proj_name: `${search}` });
    navigate("/compounds");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative lg:w-auto flex flex-1 lg:ml-[50px] ml-[25px] "
    >
      <input
        type="search"
        placeholder="Project name"
        name="title"
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-2xl border border-[#d1d1d1] pl-3 py-[5px] placeholder:text-[#75757E] lg:w-[204px] w-[100%] focus:outline-none"
      />
      <div
        className="absolute top-2 right-4 bg-white text-[#AAAAAA] cursor-pointer"
        onClick={handleSubmit}
      >
        <FiSearch />
      </div>
    </form>
  );
};

export default Search;
