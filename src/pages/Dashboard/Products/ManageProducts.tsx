import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NotFound from "../../../components/NotFound";
import { Link } from "react-router-dom";

interface Product {
  title: string;
  images: string;
  _id: string;
  data: Product[];
}

export default function ManageProducts({ swal }: { swal: any }) {
  const url = `http://localhost:3000/api/v1/compounds`;
  const fetchProducts = async (): Promise<Product> => {
    const response = await axios.get(url);
    return response.data;
  };

  const {
    isLoading,
    error,
    data: Products,
    refetch,
  } = useQuery({
    queryKey: ["ManageProducts"],
    queryFn: () => fetchProducts(),
  });
  if (isLoading) return "Loading....";
  if (error) return <NotFound />;

  function deleteProduct(product: { title: string; _id: string }) {
    swal
      .fire({
        title: "Are you sure?",
        text: `Do you want to delete ${product.title}`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        confirmButtonColor: "#d55",
        reverseButtons: true,
      })
      .then(async (res: { isConfirmed: boolean }) => {
        if (res.isConfirmed) {
          await axios.delete(`${url}/${product._id}`);
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
          {Array.isArray(Products?.data) &&
            Products?.data.length > 1 &&
            Products.data?.map((product: Product) => {
              const image = product.images?.split(",");
              return (
                <tr key={product._id}>
                  <td>
                    <div className="w-[60px] h-[50px]">
                      <img
                        src={image[0]}
                        alt="title"
                        className="w-full h-full"
                      />
                    </div>
                  </td>
                  <td>{product.title}</td>
                  <td>
                    <Link to="" className="bg-slate-500">
                      Edit
                    </Link>
                    <button
                      className="btn-primary bg-red-700"
                      onClick={() => deleteProduct(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {Products?.data && Products.data.length < 1 && "There is no data to show"}
    </section>
  );
}
