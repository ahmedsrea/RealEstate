const router = require("express").Router();
const blogController = require("../controllers/blogController");

router
  .route("/")
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

router.route("/:slug").get(blogController.getBlog);

module.exports = router;
