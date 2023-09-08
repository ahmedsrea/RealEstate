import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Blogs = () => {
  const url = "http://localhost:3000/blogs/blogs";
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mt-9 xl:max-w-[1400px] w-full mx-auto px-[15px]">
      <h1 className="text-[24px] font-bold mb-4">Egypt's Real Estate Blog</h1>

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
                  <ReactMarkdown
                    children={data.markdown.slice(0, 50) + "..."}
                  />
                  {/* <ReactMarkdown>Hello *Ahmed*</ReactMarkdown> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
