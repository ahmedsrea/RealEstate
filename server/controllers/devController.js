const DevsModule = require("../models/devs");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllDevs = catchAsync(async (req, res, next) => {
  const total = await DevsModule.countDocuments();
  const page = req.query.page * 1 || 1;
  const perPage = req.query.per_page * 1 || 10;
  const totalPages = Math.ceil(total / perPage);

  const devs = await DevsModule.find()
    .skip((page - 1) * perPage)
    .limit(perPage);

  res.status(200).json({
    status: "success",
    page,
    per_page: perPage,
    total,
    total_pages: totalPages,
    data: devs,
  });
});

exports.getDev = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;
  const dev = await DevsModule.findOne({ slug });

  res.status(200).json({
    status: "success",
    data: dev,
  });
});

exports.createDev = catchAsync(async (req, res, next) => {
  const newDev = await DevsModule.create(req.body);

  res.status(201).json({
    status: "success",
    data: newDev,
  });
});

exports.deleteDev = catchAsync(async (req, res, next) => {
  const dev = await DevsModule.findByIdAndDelete(req.params.id);

  if (!dev) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
