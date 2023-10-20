const router = require("express").Router();
const compoundController = require("../controllers/compoundController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/assests/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .get(compoundController.getAllCompounds)
  .post(upload.array("images[]"), compoundController.createCompound);

router.route("/:slug").get(compoundController.getCompound);

module.exports = router;
