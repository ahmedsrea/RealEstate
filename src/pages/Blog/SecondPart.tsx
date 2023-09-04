interface Props {
  markdown: string;
  createdAt: Date;
}
const SecondPart: React.FC<Props> = ({ markdown, createdAt }) => {
  return (
    <div className="bg-[#F6F7F9] w-full h-[300px] p-6">
      <div className="mb-2">
        Published at {new Date(createdAt).toLocaleDateString()}
      </div>
      <div className="text-[#6a6a6a]">{markdown}</div>
    </div>
  );
};

export default SecondPart;
