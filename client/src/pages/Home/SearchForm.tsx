import { useContext } from "react";
import Select from "../../components/inputs/Select";
import { SearchContext } from "../../context/SearchContext";
import { projectType, location, budget } from "../../data/constants";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { setSearchData } = searchContext;

  return (
    <div className="bg-black/60 p-7 rounded-lg w-full sm:w-[80%] md:w-fit z-10">
      <p className="text-sm text-[#CCCCCC] text-left mb-1">All Developments</p>
      <form
        onSubmit={handleSubmit((data) => {
          setSearchData(data);
          navigate("/compounds");
          console.log(data);
        })}
      >
        <div className="flex flex-col md:flex-row gap-5 mb-7">
          <Select
            data={projectType}
            name="proj_type"
            id="proj_type"
            register={register}
          />
          <Select
            data={location}
            name="location"
            id="location"
            register={register}
          />
          <Select data={budget} name="budget" id="budget" register={register} />
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
