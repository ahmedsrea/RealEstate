const DevsModule = require("../models/devs");

exports.getAllDevs = async (req, res) => {
  try {
    const devs = await DevsModule.find();

    res.status(200).json({
      status: "success",
      data: devs,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getDev = async (req, res) => {
  try {
    const slug = req.params.slug;
    const dev = await DevsModule.findOne({ slug });

    res.status(200).json({
      status: "success",
      data: dev,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
