import SearchForm from "./SearchForm";

const Landing: React.FC = () => {
  return (
    <div
      className="md:max-h-[570px] h-[90vh] w-full flex flex-col justify-center items-center text-center"
      style={{
        background: 'no-repeat center url("../assests/top-bg.png")',
        backgroundSize: "cover",
      }}
    >
      <div>
        <h2 className="md:text-4xl text-3xl mb-4 text-white font-bold">
          Real Estate Egypt
        </h2>
        <p className="text-gray-100 md:text-lg text-base mb-2">
          Egypt's #1 Real Estate Destination
        </p>
      </div>
      <SearchForm />
    </div>
  );
};

export default Landing;
