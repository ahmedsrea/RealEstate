import { useState } from "react";
import Select from "../../components/inputs/Select";
import { projectType, location, budget } from "../../data/constants";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [data, setData] = useState({
    proj_type: "",
    location: "",
    budget: "",
  });
  const navigate = useNavigate();

  function handle(e: any) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    navigate(
      `/search?project_type=${data.proj_type}&location=${data.location}&budget_range=${data.budget}`
    );
  }

  return (
    <div className="bg-black/60 p-7 rounded-lg w-full sm:w-[80%] md:w-fit z-10">
      <p className="text-sm text-[#CCCCCC] text-left mb-1">All Developments</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-5 mb-7">
          <Select
            data={projectType}
            name="proj_type"
            id="proj_type"
            onChange={(e) => handle(e)}
          />
          <Select
            data={location}
            name="location"
            id="location"
            onChange={(e) => handle(e)}
          />
          <Select
            data={budget}
            name="budget"
            id="budget"
            onChange={(e) => handle(e)}
          />
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
