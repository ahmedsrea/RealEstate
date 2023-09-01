import axios from "axios";
import { useState } from "react";

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
      <form className="w-full" onSubmit={(e) => submit(e)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => handle(e)}
            value={data.title}
            className="border border-gray-400 w-full"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={10}
            onChange={(e) => handle(e)}
            value={data.description}
            className="border border-gray-400 w-full"
          ></textarea>
        </div>
        <div>
          <label htmlFor="markdown">Markdown</label>
          <textarea
            name="markdown"
            id="markdown"
            rows={10}
            onChange={(e) => handle(e)}
            value={data.markdown}
            className="border border-gray-400 w-full"
          ></textarea>
        </div>
        <input
          type="file"
          name="images"
          id="images"
          onChange={handleImages}
          accept="images/*"
        />

        <button
          type="submit"
          className="bg-[#FB6B01] text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
