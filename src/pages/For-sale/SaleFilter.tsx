import { FaBath, FaBed } from "react-icons/fa6";
import Select from "../../components/inputs/Select";
import { location, propertyType } from "../../data/constants";
import ForSaleCheckbox from "../../components/inputs/ForSaleCheckbox";
// @ts-ignore
import Range from "../../components/inputs/Range";

const SaleFilter = () => {
  return (
    <div className="w-[350px] lg:flex flex-col hidden border border-[#DDDDDD] rounded-lg p-9 gap-4">
      <Select
        label="Location"
        htmlFor="location"
        name="location"
        id="location"
        smallRound
        data={location}
        onChange={() => {}}
      />
      <Select
        label="Property Type"
        htmlFor="property_type"
        name="property_type"
        id="property_type"
        smallRound
        data={propertyType}
        onChange={() => {}}
      />
      <div>
        <p className="flex flex-row items-center gap-1 mb-5">
          <FaBed size={17} />
          Bedrooms
        </p>
        <div className="items-center w-full text-sm font-medium text-gray-900 rounded-[4px] sm:flex">
          <ForSaleCheckbox value="Any" checked />
          <ForSaleCheckbox value="1" />
          <ForSaleCheckbox value="2" />
          <ForSaleCheckbox value="3" />
          <ForSaleCheckbox value="4" />
          <ForSaleCheckbox value="5" />
        </div>
      </div>
      <div className="mb-2">
        <p className="flex flex-row items-center gap-1 mb-5 mt-2">
          <FaBath size={15} />
          Bathrooms
        </p>
        <ul className="items-center w-full text-sm font-medium text-gray-900 rounded-[4px] sm:flex">
          <ForSaleCheckbox value="Any" checked />
          <ForSaleCheckbox value="1" />
          <ForSaleCheckbox value="2" />
          <ForSaleCheckbox value="3" />
          <ForSaleCheckbox value="4" />
          <ForSaleCheckbox value="5" />
        </ul>
      </div>
      <Range />
      <button className="border-[2px] border-[#FB6B01] hover:border-white hover:text-[#FB6B01] py-[6px] px-6 rounded-[4px] transition duration-300 mt-1">
        Reset All Filters
      </button>
      <button className="bg-[#FB6B01] text-white hover:bg-white hover:text-[#FB6B01] py-[6px] px-6 rounded-[4px] transition duration-300">
        Search
      </button>
    </div>
  );
};

export default SaleFilter;
