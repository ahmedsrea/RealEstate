import { useState } from "react";

const Range = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000000);
  return (
    <div>
      <h1 className="mb-5">Price (EGP)</h1>
      <div className="flex flex-row justify-between mb-6">
        <p>{minValue}</p>
        <p>{maxValue}</p>
      </div>
      <div className="slider h-[5px] rounded-md bg-[#ddd] relative">
        <div className="h-[5px] absolute left-[25%] right-[25%] rounded-md bg-[#17a2B8]"></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          min="0"
          max="10000000"
          defaultValue={0}
          onChange={(e) => setMinValue(e.target.value)}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="10000000"
          defaultValue={10000000}
          onChange={(e) => setMaxValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Range;
