import { BsCheckLg } from "react-icons/bs";

const Amenities = () => {
  return (
    <div className="py-10 w-full">
      <h1 className="text-[28px] font-bold text-center">Amenities</h1>
      <div className="w-full px-[15px]">
        <ul className="list-disc">
          <li className="flex flex-row items-center">
            <BsCheckLg size={24} />
            Security
          </li>
          <li className="flex flex-row items-center">
            <BsCheckLg size={24} />
            Playgrounds
          </li>
          <li className="flex flex-row items-center">
            <BsCheckLg size={24} />
            Swimming pools
          </li>
          <li className="flex flex-row items-center">
            <BsCheckLg size={24} />
            Shopping center
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Amenities;
