import {
  projectType,
  location,
  propertyType,
  developer,
  view,
  area,
  price,
} from "../../data/constants";
import { useForm } from "react-hook-form";

export interface FilterTypes {
  location: string;
  project_type: string;
  property_type: string;
  developer: string;
  view: string;
  min_area: number;
  max_area: number;
  min_price: number;
  max_price: number;
}

interface FilterProps {
  onFilterUpdate: (filter: FilterTypes) => void;
}

const Filter = ({ onFilterUpdate }: FilterProps) => {
  const { register, handleSubmit } = useForm<FilterTypes>();

  return (
    <div className="max-w-[320px] h-fit hidden lg:block p-4 border border-[#dddddd] rounded-lg">
      <form
        onSubmit={handleSubmit((data) => onFilterUpdate(data))}
        className="flex flex-col"
      >
        <label htmlFor="location">Location</label>
        <select
          {...register("location")}
          id="location"
          className="filter-select"
        >
          <option value="">Show all</option>
          {location.map((location, index) => (
            <option value={location.value} key={index}>
              {location.title}
            </option>
          ))}
        </select>
        <label htmlFor="project-type">Project Type</label>
        <select
          {...register("project_type")}
          id="project-type"
          className="filter-select"
        >
          <option value="">Show all</option>
          {projectType.map((type, index) => (
            <option value={type.value} key={index}>
              {type.title}
            </option>
          ))}
        </select>
        <label htmlFor="property-type">Property Type</label>
        <select
          {...register("property_type")}
          id="property-type"
          className="filter-select"
        >
          <option value="">Show all</option>
          {propertyType.map((type, index) => (
            <option value={type.value} key={index}>
              {type.title}
            </option>
          ))}
        </select>
        <label htmlFor="dev">Developer</label>
        <select {...register("developer")} id="dev" className="filter-select">
          <option value="">Show all</option>
          {developer.map((dev, index) => (
            <option value={dev.value} key={index}>
              {dev.title}
            </option>
          ))}
        </select>
        <label htmlFor="view">View</label>
        <select {...register("view")} id="view" className="filter-select">
          <option value="">Show all</option>
          {view.map((view, index) => (
            <option value={view.value} key={index}>
              {view.title}
            </option>
          ))}
        </select>
        <label htmlFor="area">Area</label>
        <div className="flex flex-row gap-3">
          <select
            {...register("min_area")}
            id="area"
            className="filter-select flex-1"
          >
            <option value="">Min</option>
            {area.map((area, index) => (
              <option value={area.value} key={index}>
                {area.title}
              </option>
            ))}
          </select>
          <select
            {...register("max_area")}
            id="area"
            className="filter-select  flex-1"
          >
            <option value="">Max</option>
            {area.map((area, index) => (
              <option value={area.value} key={index}>
                {area.title}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="price">Price</label>
        <div className="flex flex-row gap-3">
          <select
            {...register("min_price")}
            id="price"
            className="filter-select flex-1"
          >
            <option value="">Min</option>
            {price.map((price, index) => (
              <option value={price.value} key={index}>
                {price.title}
              </option>
            ))}
          </select>
          <select
            {...register("max_price")}
            id="price"
            className="filter-select flex-1"
          >
            <option value="">Max</option>
            {price.map((price, index) => (
              <option value={price.value} key={index}>
                {price.title}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#FB6B01] hover:bg-white hover:text-[#FB6B01] py-2 px-6 rounded-md transition duration-300 mt-3"
        >
          Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
