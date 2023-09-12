import Select from "../../components/inputs/Select";
import { projectType, location, budget } from "../../data/constants";

const SearchForm = () => {
  return (
    <div className="bg-black/60 p-7 rounded-lg w-full sm:w-[80%] md:w-fit z-10">
      <p className="text-sm text-[#CCCCCC] text-left mb-1">All Developments</p>
      <form method="POST" action="/search">
        <div className="flex flex-col md:flex-row gap-5 mb-7">
          <Select data={projectType} name="proj_type" id="proj_type" />
          <Select data={location} name="location" id="location" />
          <Select data={budget} name="budget" id="budget" />
        </div>
        <button
          type="submit"
          className="bg-[#FB6B01] hover:bg-white hover:text-[#FB6B01] py-2 px-6 rounded-md transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
