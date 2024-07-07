import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

type Data = {
  title: string;
  images: string;
  slug: string;
  markdown: string;
  _id: string;
};

const LatestUpdates = () => {
  const url = "http://localhost:3000/api/v1/blogs";

  const { isLoading, error, data } = useQuery({
    queryKey: ["latestupdates"],
    queryFn: () => fetch(url).then((res) => res.json()),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occured " + error;

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
  `;

  return (
    <div className="w-full my-[100px] px-5">
      <Reveal keyframes={customAnimation} duration={1000} triggerOnce>
        <h1 className="text-center mb-[100px] text-3xl font-bold relative">
          Latest Real Estate Updates
          <span className="under-line"></span>
        </h1>
      </Reveal>
      <div className="xl:max-w-[1110px] lg:max-w-[930px] md:max-w-[690px] sm:max-w-[510px] sm:h-auto h-[200px] overflow-y-auto mx-auto w-full sm:grid lg:grid-cols-2 grid-cols-1 flex flex-row gap-8 sm:p-0 p-5">
        {data?.data.map(({ title, images, slug, markdown, _id }: Data) => (
          <Link
            to={`blog/${slug}`}
            className="w-full sm:h-[200px] h-auto flex flex-row gap-4 p-2 border border-[#DDDDDD]"
            key={_id}
          >
            <div className="w-[200px] h-full">
              <img src={images} alt="" className="w-full h-full bg-cover" />
            </div>
            <div>
              <h1 className="font-bold text-[#019DFB] mb-7">{title}</h1>
              <p className="text-[#6A6A6A] font-light sm:block hidden">
                {markdown.slice(0, 50)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdates;
