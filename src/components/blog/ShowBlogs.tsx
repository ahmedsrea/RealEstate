import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowBlogs = () => {
  const url = "http://localhost:3000/blogs";
  const [blog, setBlog] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get(url)
      .then((data) => setBlog(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      ShowBlogs
      {blog.map((data) => (
        <Link to={`/blog/${data.slug}`}>
          <div>
            <h1>{data.title}</h1>
            <div>{data.sanitizedHtml}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShowBlogs;
