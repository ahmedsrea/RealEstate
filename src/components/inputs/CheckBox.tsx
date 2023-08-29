interface InputProps {
  name: string;
  id: string;
  htmlFor: string;
  label: string;
  value: string;
}

const CheckBox: React.FC<InputProps> = ({
  name,
  id,
  htmlFor,
  label,
  value,
}) => {
  return (
    <div className="flex flex-row gap-1">
      <input type="checkbox" name={name} id={id} value={value} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};

export default CheckBox;
