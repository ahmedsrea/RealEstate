import Filter from "./Filter";
import ShowItems from "./ShowItems";

const Compounds = () => {
  return (
    <div className="mt-[97px] xl:max-w-[1400px] w-full mx-auto px-[15px] flex flex-row gap-[30px] pb-5">
      <Filter />
      <ShowItems />
    </div>
  );
};

export default Compounds;
