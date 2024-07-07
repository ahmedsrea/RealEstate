import { propertyType } from "../../data/constants";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const PropertyType = () => {
  const [activeButton, setActiveButton] = useState("");
  function handleClick(value: any) {
    // const target = e.target as HTMLElement;
    //   if (target.classList.contains("border-transparent")) {
    //     if (
    //       target.style.borderColor === "transparent" ||
    //       !target.style.borderColor
    //     ) {
    //       target.style.borderColor = "#fb6b01";
    //       target.style.color = "#fb6b01";
    //       target.style.color = "#fb6b01";
    //     } else {
    //       target.style.borderColor = "transparent";
    //       target.style.color = "#2d3436";
    //     }
    //   }
    setActiveButton(value === activeButton ? "" : value);
  }

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
    <section className="w-full my-[140px] px-5">
      <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
        <h1 className="text-center mb-[100px] text-3xl font-bold relative">
          Properties for sale
          <span className="under-line"></span>
        </h1>
      </Reveal>
      <div className="xl:max-w-[1110px] lg:max-w-[930px] md:max-w-[690px] sm:max-w-[510px] mx-auto w-full">
        <div className="w-full flex flex-row sm:flex-wrap justify-between overflow-y-auto gap-2">
          {propertyType.map(({ title, value }) => (
            <button
              className={`
              text-lg
              font-light
              px-4
              pb-3
              whitespace-nowrap 
              uppercase 
              border-b-2 
              ${
                value === activeButton
                  ? "border-[#fb6b01] text-[#fb6b01] hover:text-[#2d3436]"
                  : "border-transparent text-[#2d3436] hover:text-[#fb6b01]"
              }
              `}
              onClick={() => handleClick(value)}
              key={value}
            >
              {title}
            </button>
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
};

export default PropertyType;
