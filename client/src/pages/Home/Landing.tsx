import SearchForm from "./SearchForm";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const Landing: React.FC = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
  `;

  return (
    <div
      className="md:max-h-[570px] h-[90vh] w-full flex flex-col justify-center items-center text-center relative"
      style={{
        background: 'no-repeat center url("../assests/top-bg.png")',
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 top-0 z-0 w-full h-full flex justify-center items-center backdrop-brightness-75"></div>
      <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
        <div className="z-10">
          <h2 className="md:text-4xl text-3xl mb-4 text-white font-bold">
            Real Estate Egypt
          </h2>
          <p className="text-gray-100 md:text-lg text-base mb-2">
            Egypt's #1 Real Estate Destination
          </p>
        </div>
        <SearchForm />
      </Reveal>
    </div>
  );
};

export default Landing;
