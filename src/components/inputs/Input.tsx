interface InputProps {
  id: string;
  type: string;
  name: string;
  required?: boolean;
  onChange: (e: any) => void;
  value?: string;
  accept?: string;
  multiple?: boolean;
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
}) => {
  return (
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
  );
};

export default Input;
