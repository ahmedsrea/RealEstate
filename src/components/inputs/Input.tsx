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
    <div className="flex flex-col">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        onChange={onChange}
        value={value}
        accept={accept}
        multiple={multiple}
      />
    </div>
  );
};

export default Input;
