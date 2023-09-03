import axios from "axios";
import { useState } from "react";
import Input from "../../components/inputs/Input";
import Textarea from "../../components/inputs/Textarea";

const NewBlog = () => {
  const url = "http://localhost:3000/blogs";
  const [data, setData] = useState({
    title: "",
    description: "",
    markdown: "",
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
          description: data.description,
          markdown: data.markdown,
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
    <div className="xl:max-w-[1400px] w-full mx-auto flex flex-col items-center py-[14px] px-[15px]">
      New Blog
      <form className="flex flex-col w-full" onSubmit={(e) => submit(e)}>
        <Input
          label="Title"
          htmlFor="title"
          type="text"
          name="title"
          id="title"
          onChange={(e) => handle(e)}
          value={data.title}
        />
        <Textarea
          label="Description"
          htmlFor="description"
          name="description"
          id="description"
          rows={4}
          onChange={(e) => handle(e)}
          value={data.description}
        />
        <Textarea
          label="Markdown"
          htmlFor="markdown"
          name="markdown"
          id="markdown"
          rows={8}
          onChange={(e) => handle(e)}
          value={data.markdown}
        />
        <Input
          label="Images"
          htmlFor="images"
          type="file"
          name="images"
          id="images"
          onChange={handleImages}
          accept="images/*"
          multiple
        />
        <button
          type="submit"
          className="bg-[#FB6B01] text-white py-2 px-6  rounded-md w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
