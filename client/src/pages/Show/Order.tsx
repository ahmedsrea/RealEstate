import { Input } from "../../components/inputs/Input";

type order = {
  title: string;
};

const Order = ({ title }: order) => {
  return (
    <div className="w-full bg-[#74B9FF]">
      <div className="xl:max-w-[1110px] lg:max-w-[930px] md:max-w-[690px] sm:max-w-[510px] mx-auto px-5 w-full flex flex-col pt-8 pb-5">
        <h1 className="font-bold text-2xl text-center mb-2">{title}</h1>
        <form
          action=""
          className="w-full flex md:flex-row flex-col items-center justify-center gap-2"
        >
          <div className="flex sm:flex-row flex-col flex-wrap sm:flex-nowrap items-center justify-center gap-2">
            <Input
              type="string"
              id="fullname"
              name="fullname"
              placeholder="Fullname"
            />
            <Input
              type="string"
              id="number"
              name="number"
              placeholder="Phone Number"
            />
          </div>
          <button className="bg-[#FB6B01] hover:bg-white hover:text-[#FB6B01] py-2 px-6 rounded-md transition duration-300 mb-4 sm:mb-0">
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
