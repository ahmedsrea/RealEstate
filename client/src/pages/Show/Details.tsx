import { DataType } from "./FirstSection/FirstSectoin";

const Details = ({
  proj_name,
  location,
  dev_by,
  unite_type,
  unite_space,
  price,
  bedrooms,
  furnishing,
  bathrooms,
  features,
  pay,
}: DataType) => {
  const f = new Intl.NumberFormat();
  return (
    <div className="bg-[#F6F7F9] lg:py-14 py-9 px-4">
      <div className="lg:w-[750px] max-w-[900px] mx-auto text-start">
        <h1 className="text-center text-2xl font-bold">Details</h1>
        <div className="flex flex-row mb-4 gap-1">
          <p className="">
            <strong className="">Project Name:</strong>
            {proj_name}.
          </p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Location:</strong>
          <p className="">{location}.</p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Developer Name:</strong>
          <p className="">{dev_by}.</p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Unit Type:</strong>
          <p className="">{unite_type}.</p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Unit Space:</strong>
          <p className="">{unite_space}.</p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Unit Price:</strong>
          <p className="">{price ? f.format(price) : ""} EGP.</p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Number of Rooms:</strong>
          <p className="">{bedrooms} Bedroom.</p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Number of Baths:</strong>
          <p className="">{bathrooms} Bathroom.</p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Finishing Type:</strong>
          <p className="">{furnishing}.</p>
        </div>
        <div className="flex flex-row mb-4 gap-1">
          <strong className="">Features:</strong>
          <p className="">{features}.</p>
        </div>
        <div className="mb-4">
          <p className="">
            <strong className="mr-1">Payment Systems:</strong>
            {pay}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
