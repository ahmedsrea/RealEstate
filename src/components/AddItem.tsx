import axios from "axios";
import { useState } from "react";
import Input from "./inputs/Input";
import CheckBox from "./inputs/CheckBox";
import Textarea from "./inputs/Textarea";
import Select from "./inputs/Select";
import UploadWidget from "./UploadWidget";

const propType = [
  { title: "Property", value: "property" },
  { title: "Compound", value: "compound" },
];

const AddItem = () => {
  const url = "http://localhost:3000/api/v1/compounds";
  const [urlString, setUrlString] = useState("");
  const [error, updateError] = useState();
  const [data, setData] = useState({
    title: "",
    status: "",
    delivery_date: "",
    dev_by: "",
    price: "",
    location: "",
    proj_type: "",
    proj_name: "",
    unite_type: "",
    unite_space: "",
    unite_size: "",
    neighborhood: "",
    bedrooms: "",
    bathrooms: "",
    furnishing: "",
    features: "",
    pay: "",
    desc: "",
  });
  const [amenities, setAmenities] = useState({
    security: false,
    playground: false,
    swimming_pools: false,
    commercial_area: false,
    mosque: false,
    social_club: false,
    health_club_and_Spa: false,
    bathrooms: false,
  });

  function handle(e: any) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleCheckBox(e: any) {
    const newData = { amenities };
    newData[e.target.value] = e.target.checked;
    setAmenities(newData);
  }

  function handleonUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    const newUrl = result?.info?.secure_url;
    setUrlString((prevUrlString) =>
      prevUrlString ? `${prevUrlString},${newUrl}` : newUrl
    );
  }

  const axiosData = JSON.stringify({
    title: data.title,
    status: data.status,
    delivery_date: data.delivery_date,
    dev_by: data.dev_by,
    price: data.price,
    location: data.location,
    proj_type: data.proj_type,
    proj_name: data.proj_name,
    unite_type: data.unite_type,
    unite_space: data.unite_space,
    unite_size: data.unite_size,
    neighborhood: data.neighborhood,
    bedrooms: data.bedrooms,
    bathrooms: data.bathrooms,
    furnishing: data.furnishing,
    features: data.features,
    pay: data.pay,
    desc: data.desc,
    images: urlString,
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    axios
      .post(url, axiosData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-full mt-12 p-5">
      <div className="xl:max-w-[1110px] lg:max-w-[930px] md:max-w-[690px] sm:max-w-[510px] max-w-full mx-auto">
        <form
          className="flex flex-col gap-4 items-start text-black"
          onSubmit={(e) => submit(e)}
        >
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-black bg-none font-semibold text-xl">
              Initial Information
            </h2>
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
            <Select
              label="Project Type:"
              htmlFor="proj_type"
              data={propType}
              name="proj_type"
              id="proj_type"
              onChange={(e) => handle(e)}
            />
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
          <label htmlFor="Images">Images</label>
          <UploadWidget onUpload={handleonUpload}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button
                  onClick={handleOnClick}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
                >
                  Upload an Image
                </button>
              );
            }}
          </UploadWidget>
          {error && <p>{error}</p>}
          {urlString && (
            <div>
              {urlString.split(",").map((url) => (
                <div>
                  <div>
                    <img
                      src={url}
                      alt="Uploaded image"
                      className="w-[180px] h-[150px]"
                    />
                  </div>
                  {url}
                </div>
              ))}
            </div>
          )}
          {/* Amenities */}
          <div className="">
            <p>Amenities</p>
            <div className="flex flex-row flex-wrap gap-4">
              <CheckBox
                value={amenities.security || ""}
                checked={amenities.security}
                name="security"
                id="security"
                htmlFor="security"
                label="Security"
                onChange={(e) => handleCheckBox(e)}
              />
              <CheckBox
                value={amenities.playground}
                checked={amenities.playground}
                name="playground"
                id="playground"
                htmlFor="playground"
                label="Playground"
                onChange={(e) => handleCheckBox(e)}
              />
              <CheckBox
                value={amenities.swimming_pools}
                checked={amenities.swimming_pools}
                name="swimming_pools"
                id="swimming_pools"
                htmlFor="swimming_pools"
                label="Swimming Pools"
                onChange={(e) => handleCheckBox(e)}
              />
              <CheckBox
                value={amenities.commercial_area}
                checked={amenities.commercial_area}
                name="commercial_area"
                id="commercial_area"
                htmlFor="commercial_area"
                label="Commercial Area"
                onChange={(e) => handleCheckBox(e)}
              />
              <CheckBox
                value={amenities.mosque}
                checked={amenities.mosque}
                name="mosque"
                id="mosque"
                htmlFor="mosque"
                label="Mosque"
                onChange={(e) => handleCheckBox(e)}
              />
              <CheckBox
                value={amenities.social_club}
                checked={amenities.social_club}
                name="social_club"
                id="social_club"
                htmlFor="social_club"
                label="Social Club"
                onChange={(e) => handleCheckBox(e)}
              />
              <CheckBox
                value={amenities.health_club_and_Spa}
                checked={amenities.health_club_and_Spa}
                name="health_club_and_Spa"
                id="health_club_and_Spa"
                htmlFor="health_club_and_Spa"
                label="Health Club and Spa"
                onChange={(e) => handleCheckBox(e)}
              />
              <CheckBox
                value={amenities.bathrooms}
                checked={amenities.bathrooms}
                name="bathrooms"
                id="bathrooms"
                htmlFor="bathrooms"
                label="Bathrooms"
                onChange={(e) => handleCheckBox(e)}
              />
            </div>
          </div>

          <div className="w-full">
            <Textarea
              id="desc"
              name="desc"
              value={data.desc}
              label="Description"
              htmlFor="desc"
              onChange={(e) => handle(e)}
            />
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
              label="Unite size"
              htmlFor="unite_size"
              type="text"
              name="unite_size"
              id="unite_size"
              onChange={(e) => handle(e)}
              value={data.unite_size}
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
          </div>

          <button className="bg-[#FB6B01] text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
