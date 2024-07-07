import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";

type RangeProps = {
  minVal: number;
  maxVal: number;
  setMinVal: Dispatch<SetStateAction<number>>;
  setMaxVal: Dispatch<SetStateAction<number>>;
  register: any;
};

const Range = ({
  minVal,
  maxVal,
  setMinVal,
  setMaxVal,
  register,
}: RangeProps) => {
  useEffect(() => {
    const rangeInput = document.querySelectorAll(".range-input input"),
      progress = document.querySelector(".slider .progress");
    const priceGap = 700000;

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      const minValue = parseInt(rangeInput[0].value),
        maxValue = parseInt(rangeInput[1].value);

      if (maxValue - minValue < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxValue - priceGap;
          setMinVal(maxValue - priceGap);
        } else {
          rangeInput[1].value = minValue + priceGap;
          setMaxVal(minValue + priceGap);
        }
      } else {
        setMinVal(minValue);
        setMaxVal(maxValue);
        progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
      }
    };

    rangeInput.forEach((input) => {
      input.addEventListener("input", handleInput);
    });

    return () => {
      rangeInput.forEach((input) => {
        input.removeEventListener("input", handleInput);
      });
    };
  }, [setMinVal, setMaxVal]);

  const f = new Intl.NumberFormat("en-EG");
  return (
    <div>
      <h1 className="mb-5">Price (EGP)</h1>
      <div className="price flex flex-row justify-between mb-3">
        <p>{f.format(minVal)}</p>
        <p>{f.format(maxVal)}+</p>
      </div>
      <div className="slider h-[5px] rounded-md bg-[#ddd] relative">
        <div
          className={`progress h-[5px] absolute left-[0%] right-[0%] rounded-md bg-[#FBC095] `}
        ></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max="10000000"
          defaultValue={0}
          {...register("min_price")}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="10000000"
          defaultValue={10000000}
          {...register("max_price")}
        />
      </div>
    </div>
  );
};

export default Range;
