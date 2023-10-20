const router = require("express").Router();
const blogController = require("../controllers/blogController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/assests/images/blog");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .get(blogController.getAllBlogs)
  .post(upload.array("images[]"), blogController.createBlog);

router.route("/:slug").get(blogController.getBlog);

module.exports = router;
