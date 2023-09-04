import axios from "axios";
import { useState } from "react";
import Input from "../../components/inputs/Input";
import Textarea from "../../components/inputs/Textarea";

const NewBlog = () => {
  const url = "http://localhost:3000/blogs";
  const [data, setData] = useState({
    blog_title: "",
    title: "",
    location: "",
    price: "",
    status: "",
    del_date: "",
    dev_by: "",
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
          blog_title: data.blog_title,
          title: data.title,
          location: data.location,
          price: data.price,
          status: data.status,
          del_date: data.del_date,
          dev_by: data.dev_by,
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
          label="Blog Title"
          htmlFor="blog_title"
          type="text"
          name="blog_title"
          id="blog_title"
          onChange={(e) => handle(e)}
          value={data.blog_title}
        />
        <Input
          label="Title"
          htmlFor="title"
          type="text"
          name="title"
          id="title"
          onChange={(e) => handle(e)}
          value={data.title}
        />
        <Input
          label="Location"
          htmlFor="location"
          type="text"
          name="location"
          id="location"
          onChange={(e) => handle(e)}
          value={data.location}
        />
        <Input
          label="Price"
          htmlFor="price"
          type="text"
          name="price"
          id="price"
          onChange={(e) => handle(e)}
          value={data.price}
        />
        <Input
          label="Status"
          htmlFor="status"
          type="text"
          name="status"
          id="status"
          onChange={(e) => handle(e)}
          value={data.status}
        />
        <Input
          label="Delivery Date"
          htmlFor="del_date"
          type="text"
          name="del_date"
          id="del_date"
          onChange={(e) => handle(e)}
          value={data.del_date}
        />
        <Input
          label="Developed by"
          htmlFor="dev_by"
          type="text"
          name="dev_by"
          id="dev_by"
          onChange={(e) => handle(e)}
          value={data.dev_by}
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
