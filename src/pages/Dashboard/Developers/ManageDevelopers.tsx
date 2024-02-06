import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NotFound from "../../../components/NotFound";
import { Link } from "react-router-dom";

interface Developer {
  title: string;
  images: string;
  _id: string;
}

export default function ManageDevelopers({ swal }) {
  const url = "http://localhost:3000/api/v1/developers";
  const {
    isLoading,
    error,
    data: Developers,
    refetch,
  } = useQuery({
    queryKey: ["ManageDevelopers"],
    queryFn: () => axios.get(url),
  });
  if (isLoading) return "Loading...";
  if (error) return <NotFound />;

  function deleteDev(dev: { title: string; _id: string }) {
    swal
      .fire({
        title: "Are you sure?",
        text: `Do you want to delete ${dev.title}`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async (res: { isConfirmed: boolean }) => {
        if (res.isConfirmed) {
          await axios.delete(`${url}/${dev._id}`);
          refetch();
        }
      });
  }
  return (
    <section className="w-full px-4 pt-5 max-w-[700px]">
      <table className="basic">
        <thead>
          <tr>
            <td>image</td>
            <td>title</td>
            <td>15</td>
          </tr>
        </thead>
        <tbody>
          {Developers?.data.data.map((dev: Developer) => {
            const image = dev.images?.split(",");
            return (
              <tr key={dev._id}>
                <td>
                  <div className="w-[60px] h-[50px]">
                    <img src={image[0]} alt="title" className="w-full h-full" />
                  </div>
                </td>
                <td>{dev.title}</td>
                <td>
                  <Link to="" className="bg-slate-500">
                    Edit
                  </Link>
                  <button
                    className="btn-primary bg-red-700"
                    onClick={() => deleteDev(dev)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
