import axios from "axios";
import UploadWidget from "../../../components/UploadWidget";
import { useState } from "react";
import { Textarea } from "../../../components/inputs/Textarea";
import FormInput from "../../../components/FormInput";
import { useForm } from "react-hook-form";

type Inputs = {
  title: string;
  blog_title: string;
  location: string;
  price: number;
  status: string;
  del_date: number;
  dev_by: string;
  description: string;
  markdown: string;
};

export default function AddBlog() {
  const url = "http://localhost:3000/api/v1/blogs";
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
    <div className="lg:w-[800px] w-auto flex flex-col items-center p-5">
      New Blog
      <form
        className="w-full flex flex-col gap-3"
        onSubmit={handleSubmit((data) => {
          axios
            .post(
              url,
              { ...data, images: urlString },
              { headers: { "Content-Type": "application/json" } }
            )
            .then((res) => console.log(res.data))
            .catch((error) => setErrorMessage(error.response.data.message));
        })}
      >
        <FormInput
          label="Blog Title"
          type="text"
          name="blog_title"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Title"
          type="text"
          name="title"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Location"
          type="text"
          name="location"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Price"
          type="number"
          name="price"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Status"
          type="text"
          name="status"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Delivery Date"
          type="number"
          name="del_date"
          register={register}
          errors={errors}
        />
        <FormInput
          label="Developed by"
          type="text"
          name="dev_by"
          register={register}
          errors={errors}
        />

        <div>
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            {...register("description", { required: "This is required" })}
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="markdown">Markdown</label>
          <Textarea
            id="markdown"
            {...register("markdown", { required: "This is required" })}
            rows={8}
          />
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
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none w-fit"
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

        {errorMessage && (
          <p className="bg-red-200 rounded-sm px-2 py-1 text-sm">
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          className="bg-[#FB6B01] text-white py-2 px-6  rounded-md w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
