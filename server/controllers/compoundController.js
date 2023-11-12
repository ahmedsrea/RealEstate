const CompoundsModel = require("../models/compounds");
const catchAsync = require("../utils/catchAsync");

exports.getAllCompounds = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  for (const key in queryObj) {
    if (queryObj.hasOwnProperty(key) && queryObj[key] === "") {
      delete queryObj[key];
    }
  }

  const excludedFields = [
    "min_area",
    "max_area",
    "min_price",
    "max_price",
    "page",
  ];
  excludedFields.forEach((el) => delete queryObj[el]);

  let query = CompoundsModel.find(queryObj);

  if (req.query.min_price && req.query.min_price) {
    query = query
      .where("price")
      .gte(req.query.min_price)
      .lte(req.query.max_price);
  }

  if (req.query.min_area && req.query.max_area) {
    query = query
      .where("unite_size")
      .gte(req.query.min_area)
      .lte(req.query.max_area);
  }

  const total = await CompoundsModel.countDocuments(queryObj);
  const page = req.query.page * 1 || 1;
  const perPage = req.query.per_page * 1 || 10;
  const totalPages = Math.ceil(total / perPage);

  query = query.skip((page - 1) * perPage).limit(perPage);

  const compounds = await query;

  res.status(200).json({
    status: "success",
    page,
    per_page: perPage,
    total,
    total_pages: totalPages,
    data: compounds,
  });
});

exports.getCompound = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;
  const compound = await CompoundsModel.findOne({ slug });

  res.status(200).json({
    status: "success",
    data: compound,
  });
});

exports.createCompound = catchAsync(async (req, res, next) => {
  const newCompound = await CompoundsModel.create(req.body);

  res.status(201).json({
    status: "success",
    data: newCompound,
  });
});

exports.getAllProperty = catchAsync(async (req, res, next) => {
  let query = CompoundsModel.find({ proj_type: "property" });

  const queryObj = { ...req.query };
  for (const key in queryObj) {
    if (queryObj.hasOwnProperty(key) && queryObj[key] === "") {
      delete queryObj[key];
    }
  }

  const excludedFields = [
    "min_area",
    "max_area",
    "min_price",
    "max_price",
    "page",
    "per_page",
  ];
  excludedFields.forEach((el) => delete queryObj[el]);

  query = CompoundsModel.find(queryObj);

  if (req.query.min_price && req.query.min_price) {
    query = query
      .where("price")
      .gte(req.query.min_price)
      .lte(req.query.max_price);
  }

  if (req.query.min_area && req.query.max_area) {
    query = query
      .where("unite_size")
      .gte(req.query.min_area)
      .lte(req.query.max_area);
  }

  const total = await CompoundsModel.countDocuments(queryObj);
  const page = req.query.page * 1 || 1;
  const perPage = req.query.per_page * 1 || 50;
  const totalPages = Math.ceil(total / perPage);

  query = query.skip((page - 1) * perPage).limit(perPage);

  const compounds = await query;

  res.status(200).json({
    status: "success",
    page,
    per_page: perPage,
    total,
    total_pages: totalPages,
    data: compounds,
  });
});
