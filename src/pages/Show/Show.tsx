import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FirstSectoin from "./FirstSectoin";
import ForSaleSection from "./ForSaleSection";

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
      />
      <ForSaleSection />
    </div>
  );
};

export default Show;
