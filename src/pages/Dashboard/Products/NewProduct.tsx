import { useState } from "react";
import { CheckBox } from "../../../components/inputs/CheckBox";
import UploadWidget from "../../../components/UploadWidget";
import { Textarea } from "../../../components/inputs/Textarea";
import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import axios from "axios";
import { Navigate } from "react-router-dom";

const propType = [
  { title: "Property", value: "property" },
  { title: "Compound", value: "compound" },
];

type Inputs = {
  title: string;
  status: string;
  delivery_date: number;
  dev_by: string;
  price: number;
  location: string;
  proj_type: string;
  proj_name: string;
  unite_type: string;
  unite_space: number;
  unite_size: number;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  furnishing: string;
  features: string;
  pay: string;
  desc: string;
  images: string;
  security: boolean;
  playground: boolean;
  swimming_pools: boolean;
  commercial_area: boolean;
  mosque: boolean;
  social_club: boolean;
  health_club_and_Spa: boolean;
};

export default function NewProduct() {
  const url = "http://localhost:3000/api/v1/compounds";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, updateError] = useState<Error | undefined>(undefined);
  const [urlString, setUrlString] = useState("");
  function handleonUpload(error: Error | undefined, result, widget) {
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

  return (
    <section className="max-w-[800px] mt-12 p-5">
      <div className="w-full mx-auto">
        <form
          className="flex flex-col gap-4 items-start text-black"
          onSubmit={handleSubmit((data) => {
            axios
              .post(
                url,
                { ...data, images: urlString },
                {
                  headers: { "Content-Type": "application/json" },
                }
              )
              .then((res) => {
                console.log(res);
                if (res.status === 201) {
                  return <Navigate to={"/products"} replace={true} />;
                }
              })
              .catch((error) => setErrorMessage(error.response.data.message));
          })}
        >
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-black bg-none font-semibold text-xl">
              Initial Information
            </h2>
            <FormInput
              label="Title"
              type="text"
              name="title"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Location:"
              type="text"
              name="location"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Status:"
              type="text"
              name="status"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Delivery Date:"
              type="number"
              name="delivery_date"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Price:"
              type="number"
              name="price"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Developed By:"
              type="text"
              name="dev_by"
              register={register}
              errors={errors}
            />
            <div>
              <label htmlFor="proj_type">Project Type:</label>
              <select
                className={`w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500`}
              >
                <option {...register("proj_type")}>Select</option>
                {propType?.map(({ value, title }) => (
                  <option value={value} key={value}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <label htmlFor="Images">Images</label>
          <UploadWidget onUpload={handleonUpload}>
            {({ open }) => {
              function handleOnClick(e: React.MouseEvent) {
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
              <div className="border border-gray-200 rounded">
                <label htmlFor="security" className="checkbox-label">
                  Security
                  <CheckBox {...register("security")} id="security" />
                </label>
              </div>

              <div className="border border-gray-200 rounded">
                <label htmlFor="playground" className="checkbox-label">
                  Playground
                  <CheckBox {...register("playground")} id="playground" />
                </label>
              </div>

              <div className="border border-gray-200 rounded">
                <label htmlFor="swimming_pools" className="checkbox-label">
                  Swimming Pools
                  <CheckBox
                    {...register("swimming_pools")}
                    id="swimming_pools"
                  />
                </label>
              </div>

              <div className="border border-gray-200 rounded">
                <label htmlFor="commercial_area" className="checkbox-label">
                  Commercial Area
                  <CheckBox
                    {...register("commercial_area")}
                    id="commercial_area"
                  />
                </label>
              </div>

              <div className="border border-gray-200 rounded">
                <label htmlFor="mosque" className="checkbox-label">
                  Mosque
                  <CheckBox {...register("mosque")} id="mosque" />
                </label>
              </div>

              <div className="border border-gray-200 rounded">
                <label htmlFor="social_club" className="checkbox-label">
                  Social Club
                  <CheckBox {...register("social_club")} id="social_club" />
                </label>
              </div>

              <div className="border border-gray-200 rounded">
                <label htmlFor="health_club_and_Spa" className="checkbox-label">
                  Health Club and Spa
                  <CheckBox
                    {...register("health_club_and_Spa")}
                    id="health_club_and_Spa"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div>
              <label htmlFor="desc">Description</label>
              <Textarea
                {...register("desc", { required: "This is required" })}
                id="desc"
              />
            </div>
            <FormInput
              label="Project Name:"
              type="text"
              name="proj_name"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Unite Type:"
              type="text"
              name="unite_type"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Unite Space:"
              type="number"
              name="unite_space"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Unite size:"
              type="text"
              name="unite_size"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Neighborhood:"
              type="text"
              name="neighborhood"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Bedrooms:"
              type="number"
              name="bedrooms"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Bathrooms:"
              type="number"
              name="bathrooms"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Furnishing:"
              type="text"
              name="furnishing"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Features:"
              type="text"
              name="features"
              register={register}
              errors={errors}
            />
            <FormInput
              label="Methods of Pay:"
              type="text"
              name="pay"
              register={register}
              errors={errors}
            />
          </div>

          {errorMessage && (
            <p className="bg-red-200 rounded-sm px-2 py-1 text-sm">
              {errorMessage}
            </p>
          )}
          <button className="bg-[#FB6B01] text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
