import {
  projectType,
  location,
  propertyType,
  developer,
  view,
  area,
  price,
} from "../../assests/constants";

const Filter = () => {
  return (
    <div className="block max-w-[320px] p-4 border border-[#dddddd] rounded-lg">
      <form method="" action="" className="flex flex-col">
        <label htmlFor="">Location</label>
        <select name="location" className="filter-select">
          <option value="">Show all</option>
          {location.map((location, index) => (
            <option value={location.value} key={index}>
              {location.title}
            </option>
          ))}
        </select>
        <label htmlFor="">Project Type</label>
        <select name="project_type" className="filter-select">
          <option value="">Show all</option>
          {projectType.map((type, index) => (
            <option value={type.value} key={index}>
              {type.title}
            </option>
          ))}
        </select>
        <label htmlFor="">Property Type</label>
        <select name="property_type" className="filter-select">
          <option value="">Show all</option>
          {propertyType.map((type, index) => (
            <option value={type.value} key={index}>
              {type.title}
            </option>
          ))}
        </select>
        <label htmlFor="">Developer</label>
        <select name="developer" className="filter-select">
          <option value="">Show all</option>
          {developer.map((dev, index) => (
            <option value={dev.value} key={index}>
              {dev.title}
            </option>
          ))}
        </select>
        <label htmlFor="">View</label>
        <select name="view" className="filter-select">
          <option value="">Show all</option>
          {view.map((view, index) => (
            <option value={view.value} key={index}>
              {view.title}
            </option>
          ))}
        </select>
        <label htmlFor="">Area</label>
        <div className="flex flex-row gap-3">
          <select name="area_start" id="" className="filter-select flex-1">
            <option value="">Min</option>
            {area.map((area, index) => (
              <option value={area.value} key={index}>
                {area.title}
              </option>
            ))}
          </select>
          <select name="area_end" id="" className="filter-select  flex-1">
            <option value="">Max</option>
            {area.map((area, index) => (
              <option value={area.value} key={index}>
                {area.title}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="">Price</label>
        <div className="flex flex-row gap-3">
          <select name="price_start" id="" className="filter-select flex-1">
            <option value="">Min</option>
            {price.map((price, index) => (
              <option value={price.value} key={index}>
                {price.title}
              </option>
            ))}
          </select>
          <select name="price_end" id="" className="filter-select  flex-1">
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
