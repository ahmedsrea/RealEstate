import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../lib/axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ShowBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    getBlogs()
      .then((data) => setBlogs(data.data))
      .catch((err) => console.log(err));
  }, [blogs]);

  return (
    <div>
      <div className="ml-3">
        <Link to={"/"} className="text-[#019DFC] hover:text-black">
          Home
        </Link>{" "}
        <span className="mr-2 ml-2">/</span> Blog
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 pb-24">
        {blogs?.map((data) => (
          <div
            key={data._id}
            className="rounded-md overflow-hidden border border-[#DDDDDD] group"
          >
            <Link to={`/blog/${data.slug}`}>
              <img src={data.images} alt="" />
            </Link>
            <div className="p-4">
              <Link to={`/blog/${data.slug}`}>
                <h1 className="font-bold group-hover:text-[#019DFC]">
                  {data.title}
                </h1>
              </Link>
              <div className="font-thin text-[13px]">
                Published at {new Date(data.createdAt).toLocaleDateString()}
              </div>
              <div className=" text-[14px] my-3 text-[#2d3436]">
                <ReactMarkdown children={data.markdown.slice(0, 50) + "..."} />
                {/* <ReactMarkdown>Hello *Ahmed*</ReactMarkdown> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBlogs;
