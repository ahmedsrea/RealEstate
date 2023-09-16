import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FirstSectoin from "./FirstSection/FirstSectoin";
import ForSaleSection from "./ForSaleSection";
import Order from "./Order";
import Details from "./Details";
import Amenities from "./Amenities";

const Show = () => {
  const { slug } = useParams();
  const [data, setData] = useState<any>({});
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
  } = data;

  async function useFetch() {
    let url = `http://localhost:3000/${slug}`;
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    useFetch();
  }, [data]);

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
    </div>
  );
};

export default Show;
