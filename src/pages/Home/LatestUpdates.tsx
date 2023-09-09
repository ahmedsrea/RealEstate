import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestUpdates = () => {
  const url = "http://localhost:3000/blogs/blogs";
  const [data, setData] = useState([]);

  async function useFetch() {
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    useFetch();
  }, []);

  return (
    <div className="w-full my-[100px] px-5">
      <h1 className="text-center mb-[100px] text-3xl font-bold relative">
        Latest Real Estate Updates
        <span className="under-line"></span>
      </h1>
      <div className="xl:max-w-[1110px] lg:max-w-[930px] md:max-w-[690px] sm:max-w-[510px] sm:h-auto h-[200px] overflow-y-auto mx-auto w-full sm:grid lg:grid-cols-2 grid-cols-1 flex flex-row gap-8 sm:p-0 p-5">
        {data.map(({ title, images, slug, markdown }) => (
          <Link
            to={`blog/${slug}`}
            className="w-full sm:h-[200px] h-auto flex flex-row gap-4 p-2 border border-[#DDDDDD]"
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
