const router = require("express").Router();
const compoundController = require("../controllers/compoundController");

router.route("/get-property").get(compoundController.getAllProperty);

router
  .route("/")
  .get(compoundController.getAllCompounds)
  .post(compoundController.createCompound);

router.route("/:slug").get(compoundController.getCompound);
router.route("/:id").delete(compoundController.deleteCompound);

module.exports = router;
