import { useLocation } from "react-router-dom";
import {
  projectType,
  location,
  propertyType,
  developer,
  view,
  area,
  price,
} from "../../data/constants";

const Filter = () => {
  const uselocation = useLocation();
  const searchParams = new URLSearchParams(uselocation.search);
  const selectedProjectType = searchParams.get("project_type");
  const selectedLocation = searchParams.get("location");
  const selectedPropertyType = searchParams.get("property_type");
  const selectedDeveloper = searchParams.get("developer");
  const selectedView = searchParams.get("view");
  const selectedMinArea = searchParams.get("min_area");
  const selectedMaxArea = searchParams.get("max_area");
  const selectedMinPrice = searchParams.get("min_price");
  const selectedMaxPrice = searchParams.get("max_price");

  return (
    <div className="max-w-[320px] h-fit hidden lg:block p-4 border border-[#dddddd] rounded-lg">
      <form method="" action="" className="flex flex-col">
        <label htmlFor="location">Location</label>
        <select name="location" id="location" className="filter-select">
          <option value="">Show all</option>
          {location.map((location, index) => (
            <option
              value={location.value}
              key={index}
              selected={location.value === selectedLocation}
            >
              {location.title}
            </option>
          ))}
        </select>
        <label htmlFor="project-type">Project Type</label>
        <select name="project_type" id="project-type" className="filter-select">
          <option value="">Show all</option>
          {projectType.map((type, index) => (
            <option
              value={type.value}
              key={index}
              selected={type.value === selectedProjectType}
            >
              {type.title}
            </option>
          ))}
        </select>
        <label htmlFor="property-type">Property Type</label>
        <select
          name="property_type"
          id="property-type"
          className="filter-select"
        >
          <option value="">Show all</option>
          {propertyType.map((type, index) => (
            <option
              value={type.value}
              key={index}
              selected={type.value === selectedPropertyType}
            >
              {type.title}
            </option>
          ))}
        </select>
        <label htmlFor="dev">Developer</label>
        <select name="developer" id="dev" className="filter-select">
          <option value="">Show all</option>
          {developer.map((dev, index) => (
            <option
              value={dev.value}
              key={index}
              selected={dev.value === selectedDeveloper}
            >
              {dev.title}
            </option>
          ))}
        </select>
        <label htmlFor="view">View</label>
        <select name="view" id="view" className="filter-select">
          <option value="">Show all</option>
          {view.map((view, index) => (
            <option
              value={view.value}
              key={index}
              selected={view.value === selectedView}
            >
              {view.title}
            </option>
          ))}
        </select>
        <label htmlFor="area">Area</label>
        <div className="flex flex-row gap-3">
          <select name="min_area" id="area" className="filter-select flex-1">
            <option value="">Min</option>
            {area.map((area, index) => (
              <option
                value={area.value}
                key={index}
                selected={
                  area.value ===
                  (selectedMinArea !== null
                    ? parseFloat(selectedMinArea)
                    : null)
                }
              >
                {area.title}
              </option>
            ))}
          </select>
          <select name="max_area" id="" className="filter-select  flex-1">
            <option value="">Max</option>
            {area.map((area, index) => (
              <option
                value={area.value}
                key={index}
                selected={
                  area.value ===
                  (selectedMaxArea !== null
                    ? parseFloat(selectedMaxArea)
                    : null)
                }
              >
                {area.title}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="price">Price</label>
        <div className="flex flex-row gap-3">
          <select name="min_price" id="price" className="filter-select flex-1">
            <option value="">Min</option>
            {price.map((price, index) => (
              <option
                value={price.value}
                key={index}
                selected={price.value === selectedMinPrice}
              >
                {price.title}
              </option>
            ))}
          </select>
          <select name="max_price" id="" className="filter-select  flex-1">
            <option value="">Max</option>
            {price.map((price, index) => (
              <option
                value={price.value}
                key={index}
                selected={price.value === selectedMaxPrice}
              >
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
