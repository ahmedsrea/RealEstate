import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../lib/axios";

const ShowBlogs = () => {
  const [blog, setBlog] = useState<any[]>([]);

  useEffect(() => {
    getBlogs()
      .then((data) => setBlog(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>
        <Link to={"/"} className="text-[#019DFC] hover:text-black">
          Home
        </Link>{" "}
        <span className="mr-2 ml-2">/</span> Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blog?.map((data) => (
          <div key={data._id}>
            <Link to={`/blog/${data.slug}`}>
              <img src={data.images} alt="" />
            </Link>
            <Link to={`/blog/${data.slug}`}>
              <h1>{data.title}</h1>
            </Link>
            <div>Published At {data.createdAt}</div>
            <div>{data.sanitizedHtml.slice(0, 100)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBlogs;
