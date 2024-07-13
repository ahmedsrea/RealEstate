import { useQuery } from "@tanstack/react-query";
import ShowCards from "../../components/ShowCards";
import axios from "../../api/axios";
import { useState } from "react";

type DevProjectsProp = {
  title: string;
};
const DevProjects = ({ title }: DevProjectsProp) => {
  const [projtype, setProjtype] = useState("compound");
  const { data } = useQuery({
    queryKey: ["devPageProjets", { projtype, title }],
    queryFn: () =>
      axios.get(`/compounds?dev_by=${title}&proj_type=${projtype}`),
    networkMode: "offlineFirst",
  });

  const onProjectChange = (project) => {
    setProjtype(project);
  };

  console.log(data?.data.data);

  return (
    <div className="xl:max-w-[1400px] w-full mx-auto border border-[#DDDDDD] rounded-md p-5">
      <ShowCards data={data?.data.data} onProjectChange={onProjectChange} />
    </div>
  );
};

export default DevProjects;
