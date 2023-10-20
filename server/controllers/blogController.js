const BlogsModel = require("../models/blogs");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogsModel.find();

    res.status(200).json({
      status: "success",
      data: blogs,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const slug = req.params.slug;
    const blog = await BlogsModel.findOne({ slug });

    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    let path = "";
    if (req.files) {
      req.files.forEach(function (files) {
        path = path + files.path + ",";
      });
      path = path.substring(0, path.lastIndexOf(","));
    }
    let blog = {
      blog_title: req.body.blog_title,
      title: req.body.title,
      price: req.body.price,
      status: req.body.status,
      del_date: req.body.del_date,
      dev_by: req.body.dev_by,
      description: req.body.description,
      markdown: req.body.markdown,
      images: path,
    };
    await BlogsModel.create(blog);
    res.json({ status: "ok" });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
