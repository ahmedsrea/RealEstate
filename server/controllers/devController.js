const DevsModule = require("../models/devs");
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
