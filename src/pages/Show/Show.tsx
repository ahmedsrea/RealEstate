import { useParams } from "react-router-dom";
import FirstSectoin from "./FirstSection/FirstSectoin";
import ForSaleSection from "./ForSaleSection";
import Order from "./Order";
import Details from "./Details";
import Amenities from "./Amenities";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NotFound from "../../components/NotFound";
import OtherProjects from "./OtherProjects";

const Show = () => {
  const { slug } = useParams();
  const url = `http://localhost:3000/${slug}`;

  const { isLoading, error, data } = useQuery({
    queryKey: ["show"],
    queryFn: () => axios.get(url),
    networkMode: "offlineFirst",
  });

  if (isLoading) return "Loading....";
  if (error) return <NotFound />;

  const {
    title,
    status,
    del_date,
    dev_by,
    unite_type,
    unite_size,
    bedrooms,
    bathrooms,
    size,
    images,
    price,
    proj_name,
    unite_space,
    furnishing,
    features,
    pay,
    location,
  } = data?.data;

  return (
    <div>
      <FirstSectoin
        title={title}
        status={status}
        del_date={del_date}
        dev_by={dev_by}
        unite_type={unite_type}
        unite_size={unite_size}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        size={size}
        images={images}
        price={price}
        proj_name={proj_name}
        unite_space={unite_space}
        furnishing={furnishing}
      />
      <ForSaleSection />
      <Order title={title} />
      <Details
        title={title}
        location={location}
        status={status}
        del_date={del_date}
        dev_by={dev_by}
        unite_type={unite_type}
        unite_size={unite_size}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        size={size}
        images={images}
        price={price}
        proj_name={proj_name}
        unite_space={unite_space}
        furnishing={furnishing}
        features={features}
        pay={pay}
      />
      <Amenities />
      <OtherProjects />
    </div>
  );
};

export default Show;
