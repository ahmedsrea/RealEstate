import { Link, useParams } from "react-router-dom";
import AboutBlog from "./AboutBlog";
import { useQuery } from "@tanstack/react-query";
import NotFound from "../../components/NotFound";
import axios from "../../api/axios";

const Blog = () => {
  const { slug } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["Blog"],
    queryFn: () => axios.get(`/blogs/${slug}`),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading....";
  if (error) return <NotFound />;

  const {
    title,
    blog_title,
    location,
    price,
    images,
    status,
    dev_by,
    del_date,
    markdown,
    createdAt,
    sanitizedHtml,
  } = data?.data?.data || {};

  if (isLoading) return "Loadding...";
  if (error) return "An error has occured" + error;

  return (
    <div className="mt-9 xl:max-w-[1280px] w-full mx-auto">
      <h1 className="text-[24px] font-bold mb-4 px-[15px]">{blog_title}</h1>
      <div className="ml-8">
        <Link to={"/"} className="text-[#019DFC] hover:text-[#0266a4]">
          Home
        </Link>
        <span className="mr-2 ml-2">/</span>
        <Link to={"/"} className="text-[#019DFC] hover:text-[#0266a4]">
          Blog
        </Link>
        <span className="mr-2 ml-2">/</span>
        <Link
          to={`/blog/${location}`}
          className="text-[#019DFC] hover:text-[#0266a4]"
        >
          {location}
        </Link>
        <span className="mr-2 ml-2">/</span>
        {blog_title}
      </div>
      <div className="flex lg:flex-row flex-col">
        <AboutBlog
          images={images}
          title={title}
          price={price}
          status={status}
          dev_by={dev_by}
          del_date={del_date}
          markdown={markdown}
          createdAt={createdAt}
          sanitizedHtml={sanitizedHtml}
        />
      </div>
    </div>
  );
};

export default Blog;
