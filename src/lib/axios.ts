import axios from "axios";

const url = "http://localhost:3000/get-compounds";
const blogUrl = "http://localhost:3000/blogs";

export function getCompounds() {
  return axios.get(url);
}

export function getBlogs() {
  return axios.get(blogUrl);
}
