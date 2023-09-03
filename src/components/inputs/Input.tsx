interface InputProps {
  id: string;
  type: string;
  name: string;
  required?: boolean;
  onChange: (e: any) => void;
  value?: string;
  accept?: string;
  multiple?: boolean;
  htmlFor?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  required,
  onChange,
  value,
  accept,
  multiple,
  htmlFor,
  label,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-base font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        onChange={onChange}
        value={value}
        accept={accept}
        multiple={multiple}
        className={`${
          type === "file" ? "w-fit" : "w-full"
        } p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500`}
      />
    </div>
  );
};

export default Input;
