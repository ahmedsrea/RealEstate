const BlogsModel = require("../models/blogs");
const catchAsync = require("../utils/catchAsync");

exports.getAllBlogs = catchAsync(async (req, res, next) => {
  const total = await BlogsModel.countDocuments();
  const page = req.query.page * 1 || 1;
  const perPage = req.query.per_page * 1 || 15;
  const totalPages = Math.ceil(total / perPage);
  const blogs = await BlogsModel.find()
    .skip((page - 1) * perPage)
    .limit(perPage);

  res.status(200).json({
    status: "success",
    page,
    per_page: perPage,
    total,
    total_pages: totalPages,
    data: blogs,
  });
});

exports.getBlog = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;
  const blog = await BlogsModel.findOne({ slug });

  res.status(200).json({
    status: "success",
    data: blog,
  });
});

exports.createBlog = catchAsync(async (req, res, next) => {
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
});
