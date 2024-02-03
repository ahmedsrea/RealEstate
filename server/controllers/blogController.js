const BlogsModel = require("../models/blogs");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

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
  const newBlog = await BlogsModel.create(req.body);

  res.status(201).json({ status: "success", data: newBlog });
});

exports.deleteBlog = catchAsync(async (req, res, next) => {
  const blog = await BlogsModel.findByIdAndDelete(req.params.id);

  if (!blog) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
