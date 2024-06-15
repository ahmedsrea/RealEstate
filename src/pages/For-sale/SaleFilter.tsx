import { FaBath, FaBed } from "react-icons/fa6";
import { location, propertyType } from "../../data/constants";
import Range from "../../components/inputs/Range";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Filter {
  location: string;
  property_type: string;
  bedrooms: number;
  bathrooms: number;
  min_price: number;
  max_price: number;
}

interface FilterProps {
  onFilterUpdate: (filter: Filter) => void;
}

const SaleFilter = ({ onFilterUpdate }: FilterProps) => {
  const { register, handleSubmit } = useForm<Filter>();
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(10000000);

  return (
    <form onSubmit={handleSubmit((data) => onFilterUpdate(data))}>
      <div className="w-[350px] lg:flex flex-col hidden border border-[#DDDDDD] rounded-lg p-9 gap-4">
        <div>
          <label
            htmlFor="location"
            className="block mb-2 text-base font-normal text-gray-900"
          >
            Location
          </label>
          <select
            id="location"
            {...register("location")}
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-[4px] bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            {location.map((location, index) => (
              <option value={location.value} key={index}>
                {location.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="property_type"
            className="block mb-2 text-base font-normal text-gray-900"
          >
            Property Type
          </label>
          <select
            {...register("property_type")}
            id="property_type"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-[4px] bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            {propertyType.map((type, index) => (
              <option value={type.value} key={index}>
                {type.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="flex flex-row items-center gap-1 mb-5">
            <FaBed size={17} />
            Bedrooms
          </p>
          <div className="items-center w-full text-sm font-medium text-gray-900 rounded-[4px] sm:flex">
            {[...Array(6)].map((_, index) => {
              return (
                <label
                  key={index}
                  className={`border border-[#fb6b01] px-[5px] gap-1 py-1.5 relative flex
            `}
                >
                  <input
                    {...register("bedrooms")}
                    type="radio"
                    value={index === 0 ? "" : index}
                  />
                  {index === 0 ? "Any" : index}+
                </label>
              );
            })}
          </div>
        </div>
        <div className="mb-2">
          <p className="flex flex-row items-center gap-1 mb-5 mt-2">
            <FaBath size={15} />
            Bathrooms
          </p>
          <div className="items-center w-full text-sm font-medium text-gray-900 rounded-[4px] sm:flex">
            {[...Array(6)].map((_, index) => (
              <label
                key={index}
                className={`border border-[#fb6b01] px-[5px] gap-1 py-1.5 relative flex
            `}
              >
                <input
                  {...register("bathrooms")}
                  type="radio"
                  name="Bathrooms"
                  value={index === 0 ? "" : index}
                />
                {index === 0 ? "Any" : index}+
              </label>
            ))}
          </div>
        </div>
        <Range
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={setMinVal}
          setMaxVal={setMaxVal}
          register={register}
        />
        <button className="border-[2px] border-[#FB6B01] hover:border-white hover:text-[#FB6B01] py-[6px] px-6 rounded-[4px] transition duration-300 mt-1">
          Reset All Filters
        </button>
        <button
          type="submit"
          className="bg-[#FB6B01] text-white hover:bg-white hover:text-[#FB6B01] py-[6px] px-6 rounded-[4px] transition duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SaleFilter;
