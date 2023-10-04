import { useState } from "react";

type data = {
  value: string;
  checked?: boolean;
};

const ForSaleCheckbox = ({ value, checked }: data) => {
  const [active, setActive] = useState(false);

  function handle() {
    setActive(true);
  }
  return (
    <div className={``}>
      <label
        onClick={handle}
        className={`border border-[#fb6b01] px-[10px] py-1 ${
          active ? "bg-[#6CB2EB]" : "bg-white"
        }`}
      >
        <input
          type="radio"
          name="radio"
          value={value}
          defaultChecked={checked}
          className={`appearance-none focus:ring-[#6CB2EB] focus:ring-8`}
        />
        {value}+
      </label>
    </div>
  );
};

export default ForSaleCheckbox;
