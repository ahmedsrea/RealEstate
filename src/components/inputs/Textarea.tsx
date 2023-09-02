interface TextareaProps {
  id: string;
  name: string;
  value: string;
  htmlFor?: string;
  label?: string;
  rows?: number;
  onChange: (e: any) => void;
}
const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  value,
  htmlFor,
  label,
  rows = 4,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-base font-medium text-gray-900"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default Textarea;
