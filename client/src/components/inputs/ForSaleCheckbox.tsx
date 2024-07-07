type data = {
  value: string | number;
  checked?: boolean;
  name: string;
};

const ForSaleCheckbox = ({ value, name, checked }: data) => {
  return (
    <div>
      <label
        className={`border border-[#fb6b01] px-[5px] gap-1 py-1.5 relative flex
      `}
      >
        <input
          type="radio"
          name={name}
          value={value}
          className={``}
          checked={checked}
        />
        {value}+
      </label>
    </div>
  );
};

export default ForSaleCheckbox;
