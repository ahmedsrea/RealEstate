import { projectType, location, budget } from "../../data/constants";

const SearchForm = () => {
  return (
    <div className="bg-black/60 p-7 rounded-lg w-full sm:w-[80%] md:w-fit z-10">
      <p className="text-sm text-[#CCCCCC] text-left mb-1">All Developments</p>
      <form method="POST" action="/search">
        <div className="flex flex-col md:flex-row gap-5 mb-7">
          <select name="category" className="p-2 rounded-md">
            <option value="">Select</option>
            {projectType.map((category, index) => (
              <option value={category.value} key={index}>
                {category.title}
              </option>
            ))}
          </select>
          <select name="location" className="p-2 rounded-md">
            <option value="">Select</option>
            {location.map((location, index) => (
              <option value={location.value} key={index}>
                {location.title}
              </option>
            ))}
          </select>
          <select name="budget" className="p-2 rounded-md">
            <option value="">Select</option>
            {budget.map((budget, index) => (
              <option value={budget.value} key={index}>
                {budget.title}
              </option>
            ))}
          </select>
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
