const router = require("express").Router();
const devController = require("../controllers/devController");

router.route("/").get(devController.getAllDevs).post(devController.createDev);

router.route("/:slug").get(devController.getDev);
router.route("/:id").delete(devController.deleteDev);

module.exports = router;
