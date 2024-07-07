import { useQuery } from "@tanstack/react-query";
import NotFound from "../../../components/NotFound";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";

interface Developer {
  title: string;
  images: string;
  _id: string;
  data: Developer[];
}

export default function ManageDevelopers({ swal }) {
  const fetchDevs = async (): Promise<Developer> => {
    const response = await axios.get("/developers");
    return response.data;
  };

  const {
    isLoading,
    error,
    data: Developers,
    refetch,
  } = useQuery({
    queryKey: ["ManageDevelopers"],
    queryFn: () => fetchDevs(),
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
          await axios.delete(`/developers/${dev._id}`);
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
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(Developers?.data) &&
            Developers?.data.length > 0 &&
            Developers?.data.map((dev: Developer) => {
              const image = dev.images?.split(",");
              return (
                <tr key={dev._id}>
                  <td>
                    <div className="w-[60px] h-[50px]">
                      <img
                        src={image[0]}
                        alt="title"
                        className="w-full h-full"
                      />
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
      {Developers?.data &&
        Developers.data.length < 1 &&
        "There is no data to show"}
    </section>
  );
}
