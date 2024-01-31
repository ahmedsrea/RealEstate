import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NotFound from "../../../components/NotFound";
import { Link } from "react-router-dom";

export default function ManageProducts() {
  const url = `http://localhost:3000/api/v1/compounds`;
  const {
    isLoading,
    error,
    data: Products,
  } = useQuery({
    queryKey: ["ManageProducts"],
    queryFn: () => axios.get(url),
    networkMode: "offlineFirst",
  });
  if (isLoading) return "Loading....";
  if (error) return <NotFound />;
  return (
    <section className="w-full px-4 pt-5">
      <Link to="" className="bg-white text-black px-1 rounded-md">
        Add new Property
      </Link>
      <div className="mt-5 flex flex-col gap-3 max-w-[700px]">
        {Products?.data.data.map(({ title, images }) => {
          const image = images?.split(",");
          return (
            <div className="border border-gray-100 rounded-md flex  flex-row items-center overflow-hidden">
              <div className="w-[70px] h-[70px] mr-2">
                {image.map((img) => (
                  <img src={img} alt="" className="w-full h-full" />
                ))}
              </div>
              {title}
              <Link to="" className="bg-slate-500 px-2 py-1 rounded-md">
                Edit
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
