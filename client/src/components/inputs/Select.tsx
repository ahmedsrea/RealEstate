interface SelectProps {
  label?: string;
  htmlFor?: string;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent) => void;
  data: Array<string>;
  smallRound?: boolean;
  register: any;
}

const Select: React.FC<SelectProps> = ({
  htmlFor,
  label,
  name,
  id,
  onChange,
  data,
  smallRound,
  register,
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-base font-normal text-gray-900"
      >
        {label}
      </label>
      <select
        name={name}
        id={id}
        {...register(name)}
        onChange={onChange}
        className={`w-full p-2 text-gray-900 border border-gray-300 ${
          smallRound ? "rounded-[4px]" : "rounded-lg"
        } bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500`}
      >
        <option value="">Select</option>
        {data?.map(({ value, title }) => (
          <option value={value} key={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
