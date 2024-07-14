import { useQuery } from "@tanstack/react-query";
import NotFound from "../../../components/NotFound";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";

interface Blogs {
  title: string;
  images: string;
  _id: string;
  data: Blogs[];
}

export default function ManageBlogs({ swal }) {
  const fetchBlogs = async (): Promise<Blogs> => {
    const response = await axios.get("/blogs");
    return response.data;
  };

  const {
    isLoading,
    error,
    data: Blogs,
    refetch,
  } = useQuery({
    queryKey: ["ManageBlogs"],
    queryFn: () => fetchBlogs(),
  });
  if (isLoading) return "Loading....";
  if (error) return <NotFound />;

  function deleteBlog(blog: { title: string; _id: string }) {
    swal
      .fire({
        title: "Are you sure?",
        text: `Do you want to delete ${blog.title}`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async (res: { isConfirmed: boolean }) => {
        if (res.isConfirmed) {
          await axios.delete(`/blogs/${blog._id}`);
          refetch();
        }
      });
  }

  return (
    <section className="w-full px-4 pt-5 max-w-[800px]">
      <table className="basic">
        <thead>
          <tr>
            <td>image</td>
            <td>title</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(Blogs?.data) &&
            Blogs?.data.length > 0 &&
            Blogs?.data?.map((blog: Blogs) => {
              const image = blog.images?.split(",");
              return (
                <tr key={blog._id}>
                  <td>
                    <div className="w-[60px] h-[50px]">
                      <img
                        src={image[0]}
                        alt="title"
                        className="w-full h-full"
                      />
                    </div>
                  </td>
                  <td>{blog.title.substring(0, 50)}</td>
                  <td>
                    <Link to="" className="bg-slate-500">
                      Edit
                    </Link>
                    <button
                      className="btn-primary bg-red-700"
                      onClick={() => deleteBlog(blog)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {Blogs?.data && Blogs?.data.length < 1 && (
        <div>There is no data to show</div>
      )}
    </section>
  );
}
