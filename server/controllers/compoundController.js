const CompoundsModel = require("../models/compounds");
const catchAsync = require("../utils/catchAsync");

exports.getAllCompounds = catchAsync(async (req, res, next) => {
  console.log(req.query);

  // BUILD QUERY
  // 1A) Filtering
  const queryObj = { ...req.query };

  // 1B) Advanced filtering
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  console.log(JSON.parse(queryStr));

  let query = CompoundsModel.find(JSON.parse(queryStr));

  // EXECUTE QUERY
  const compounds = await query;

  res.status(200).json({
    status: "success",
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
  let path = "";
  if (req.files) {
    req.files.forEach(function (files) {
      path = path + files.path + ",";
    });
    path = path.substring(0, path.lastIndexOf(","));
  }

  let obj = {
    title: req.body.title,
    status: req.body.status,
    delivery_date: req.body.delivery_date,
    dev_by: req.body.dev_by,
    price: req.body.price,
    proj_type: req.body.proj_type,
    proj_name: req.body.proj_name,
    unite_type: req.body.unite_type,
    unite_space: req.body.unite_space,
    neighborhood: req.body.neighborhood,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    furnishing: req.body.furnishing,
    features: req.body.features,
    pay: req.body.pay,
    desc: req.body.desc,
    amenities: req.body.amenities,
    images: path,
  };

  const newCompound = await CompoundsModel.create(obj);

  res.status(200).json({
    status: "success",
    data: newCompound,
  });
});
