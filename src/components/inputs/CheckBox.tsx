interface InputProps {
  name: string;
  id: string;
  htmlFor: string;
  label: string;
  value: boolean | string;
  onChange: (e: any) => void;
}

const CheckBox: React.FC<InputProps> = ({
  name,
  id,
  htmlFor,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center px-4 border border-gray-200 rounded">
      <input
        id={id}
        type="checkbox"
        value={value}
        name={name}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />

      <label
        htmlFor={htmlFor}
        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

{
  /* <div className="flex flex-row gap-1">
      <input type="checkbox" name={name} id={id} value={value} />
      <label htmlFor={htmlFor}>{label}</label>
    </div> */
}
export default CheckBox;
