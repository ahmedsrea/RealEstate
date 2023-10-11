import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AboutDev from "./AboutDev";
import DevProjects from "./DevProjects";

const DevPage = () => {
  const { slug } = useParams();
  const url = `http://localhost:3000/get-dev/${slug}`;

  const { isLoading, error, data } = useQuery({
    queryKey: ["devPage"],
    queryFn: () => axios.get(url),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading....";
  if (error) return <NotFound />;

  const { images, title } = data?.data;
  document.title = `${title}`;
  return (
    <div className="">
      <div className="xl:max-w-[1400px] w-full mx-auto mb-6 mt-1 px-[15px]">
        <div className="px-[15px]">
          <Link to={"/"} className="text-[#019DFC] hover:text-black">
            Home
          </Link>{" "}
          <span className="mr-1 ml-1">/</span>{" "}
          <Link to={"/developers"} className="text-[#019DFC] hover:text-black">
            Developers
          </Link>
          <span className="mr-2 ml-2">/</span> {title}
        </div>
      </div>

      <AboutDev images={images} title={title} />

      <div className="flex lg:flex-row flex-col gap-8 xl:max-w-[1400px] w-full mx-auto px-[15px] mt-5 mb-6">
        <div className="w-full">
          <h1 className="text-xl font-bold mb-10">{title}</h1>
          <DevProjects title={title} />
        </div>
        <div className="text-xl font-bold">Blog Posts About {title}</div>
      </div>

      <div className="flex justify-center text-center w-full bg-[#F6F7F9] h-[190px] mb-4">
        <h1 className="text-2xl font-semibold leading-[190px]">
          About {title}
        </h1>
      </div>
    </div>
  );
};

export default DevPage;
