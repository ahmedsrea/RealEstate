import ShowCards from "../../components/ShowCards";

type DevProjectsProp = {
  title: string;
};
const DevProjects = ({ title }: DevProjectsProp) => {
  return (
    <div className="xl:max-w-[1400px] w-full mx-auto border border-[#DDDDDD] rounded-md">
      <ShowCards />
    </div>
  );
};

export default DevProjects;
