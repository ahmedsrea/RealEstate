const DevsModule = require("../models/devs");
const catchAsync = require("../utils/catchAsync");

exports.getAllDevs = catchAsync(async (req, res, next) => {
  const devs = await DevsModule.find();

  res.status(200).json({
    status: "success",
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
