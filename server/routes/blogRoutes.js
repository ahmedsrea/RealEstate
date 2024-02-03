const router = require("express").Router();
const blogController = require("../controllers/blogController");

router
  .route("/")
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

router.route("/:slug").get(blogController.getBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
