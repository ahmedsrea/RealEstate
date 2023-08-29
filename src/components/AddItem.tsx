import axios from "axios";
import { useState } from "react";
import Input from "./inputs/Input";
import CheckBox from "./inputs/CheckBox";

const AddItem = () => {
  const url = "http://localhost:3000/item-request";
  const [data, setData] = useState({
    title: "",
    status: "",
    delivery_date: "",
    dev_by: "",
    price: "",
    proj_type: "",
    proj_name: "",
    unite_type: "",
    unite_space: "",
    neighborhood: "",
    bedrooms: "",
    bathrooms: "",
    furnishing: "",
    features: "",
    pay: "",
  });
  const [images, setImages] = useState([]);

  function handle(e: any) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleImages(e: any) {
    console.log(e.target.files);
    setImages(e.target.files);
  }

  function submit(e: any) {
    e.preventDefault();
    axios
      .post(
        url,
        {
          title: data.title,
          status: data.status,
          delivery_date: data.delivery_date,
          dev_by: data.dev_by,
          price: data.price,
          proj_type: data.proj_type,
          proj_name: data.proj_name,
          unite_type: data.unite_type,
          unite_space: data.unite_space,
          neighborhood: data.neighborhood,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          furnishing: data.furnishing,
          features: data.features,
          pay: data.pay,
          images: images,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full mt-12 bg-gray-400 p-5">
      <div className="xl:max-w-[1110px] lg:max-w-[930px] md:max-w-[690px] sm:max-w-[510px] max-w-full mx-auto">
        <form
          className="flex flex-col gap-4 items-start text-black"
          onSubmit={(e) => submit(e)}
        >
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-lg text-black bg-none">Initial Information</h2>
            <Input
              label="Title:"
              htmlFor="title"
              type="text"
              name="title"
              id="title"
              onChange={(e) => handle(e)}
              value={data.title}
            />
            <Input
              label="Status:"
              htmlFor="status"
              type="text"
              name="status"
              id="status"
              onChange={(e) => handle(e)}
              value={data.status}
            />
            <Input
              label="Delivery Date:"
              htmlFor="delivery_date"
              type="text"
              name="delivery_date"
              id="delivery_date"
              onChange={(e) => handle(e)}
              value={data.delivery_date}
            />
            <Input
              label="Price:"
              htmlFor="price"
              type="text"
              name="price"
              id="price"
              onChange={(e) => handle(e)}
              value={data.price}
            />
            Project Type:
            <select name="proj_type" id="proj_type">
              <option value="">Select</option>
              <option value="compound">Compound</option>
              <option value="property">Property</option>
            </select>
            <Input
              label="Developed By:"
              htmlFor="dev_by"
              type="text"
              name="dev_by"
              id="dev_by"
              onChange={(e) => handle(e)}
              value={data.dev_by}
            />
          </div>
          <Input
            type="file"
            name="images"
            id="images"
            onChange={handleImages}
            accept="images/*"
            multiple
          />
          {/* Amenities */}
          <div className="">
            <p>Amenities</p>
            <div className="flex flex-row gap-4">
              <CheckBox
                value="security"
                name="security"
                id="security"
                htmlFor="security"
                label="Security"
              />
              <CheckBox
                value="playground"
                name="playground"
                id="playground"
                htmlFor="playground"
                label="Playground"
              />
              <CheckBox
                value="swimming_pools"
                name="swimming_pools"
                id="swimming_pools"
                htmlFor="swimming_pools"
                label="Swimming Pools"
              />
              <CheckBox
                value="commercial_area"
                name="commercial_area"
                id="commercial_area"
                htmlFor="commercial_area"
                label="Commercial Area"
              />
              <CheckBox
                value="mosque"
                name="mosque"
                id="mosque"
                htmlFor="mosque"
                label="Mosque"
              />
              <CheckBox
                value="social_club"
                name="social_club"
                id="social_club"
                htmlFor="social_club"
                label="Social Club"
              />
              <CheckBox
                value="health_club_and_Spa"
                name="health_club_and_Spa"
                id="health_club_and_Spa"
                htmlFor="health_club_and_Spa"
                label="Health Club and Spa"
              />
              <CheckBox
                value="2_bathrooms"
                name="2_bathrooms"
                id="2_bathrooms"
                htmlFor="2_bathrooms"
                label="2 Bathrooms"
              />
            </div>
          </div>
          <textarea
            name="desc"
            id="desc"
            cols={50}
            rows={5}
            style={{ resize: "none" }}
          ></textarea>
          <Input
            label="Project Name:"
            htmlFor="proj_name"
            type="text"
            name="proj_name"
            id="proj_name"
            onChange={(e) => handle(e)}
            value={data.proj_name}
          />
          <Input
            label="Unite Type:"
            htmlFor="unite_type"
            type="text"
            name="unite_type"
            id="unite_type"
            onChange={(e) => handle(e)}
            value={data.unite_type}
          />
          <Input
            label="Unite Space"
            htmlFor="unite_space"
            type="text"
            name="unite_space"
            id="unite_space"
            onChange={(e) => handle(e)}
            value={data.unite_space}
          />
          <Input
            label="Neighborhood:"
            htmlFor="neighborhood"
            type="text"
            name="neighborhood"
            id="neighborhood"
            onChange={(e) => handle(e)}
            value={data.neighborhood}
          />
          <Input
            label="Bedrooms:"
            htmlFor="bedrooms"
            type="text"
            name="bedrooms"
            id="bedrooms"
            onChange={(e) => handle(e)}
            value={data.bedrooms}
          />
          <Input
            label="Bathrooms"
            htmlFor="bathrooms"
            type="text"
            name="bathrooms"
            id="bathrooms"
            onChange={(e) => handle(e)}
            value={data.bathrooms}
          />
          <Input
            label="Furnishing:"
            htmlFor="furnishing"
            type="text"
            name="furnishing"
            id="furnishing"
            onChange={(e) => handle(e)}
            value={data.furnishing}
          />
          <Input
            label="Features:"
            htmlFor="features"
            type="text"
            name="features"
            id="features"
            onChange={(e) => handle(e)}
            value={data.features}
          />
          <Input
            label="Methods of Pay"
            htmlFor="pay"
            type="text"
            name="pay"
            id="pay"
            onChange={(e) => handle(e)}
            value={data.pay}
          />
          <button className="bg-[#FB6B01] text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
