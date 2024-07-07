import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import { useState } from "react";
import UploadWidget from "../../../components/UploadWidget";
import axios from "../../../api/axios";

type Inputs = {
  title: string;
  slug: string;
  images: string;
};

export default function NewDeveloper() {
  const [errorMessage, setErrorMessage] = useState("");
  const [error, updateError] = useState<Error | undefined>(undefined);
  const [urlString, setUrlString] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function handleonUpload(error: Error | undefined, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    const newUrl = result?.info.secure_url;
    setUrlString((prevUrlString) =>
      prevUrlString ? `${prevUrlString},${newUrl}` : newUrl
    );
  }
  return (
    <section className="max-w-[800px] p-5">
      <form
        onSubmit={handleSubmit((data) => {
          axios
            .post(
              "/developers",
              { ...data, images: urlString },
              { headers: { "Content-Type": "application/json" } }
            )
            .catch((error) => {
              setErrorMessage(error.response.data.message);
            });
        })}
        className="flex flex-col gap-4 items-start"
      >
        <FormInput
          label="Title"
          type="text"
          name="title"
          register={register}
          errors={errors}
        />
        <div className="flex flex-col">
          <label htmlFor="image">Image</label>
          <UploadWidget onUpload={handleonUpload}>
            {({ open }) => {
              function handleOnClick(e: React.MouseEvent) {
                e.preventDefault();
                open();
              }
              return (
                <button
                  onClick={handleOnClick}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none w-fit"
                >
                  Upload an Image
                </button>
              );
            }}
          </UploadWidget>
          {error && <p>{error}</p>}
          {urlString && (
            <div className="flex flex-wrap">
              {urlString.split(",").map((url) => (
                <div className="">
                  <img
                    src={url}
                    alt="Uploaded image"
                    className="w-[140px] h-[110px]"
                  />
                </div>
              ))}
            </div>
          )}
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
    </section>
  );
}
