const router = require("express").Router();
const devController = require("../controllers/devController");

router.route("/").get(devController.getAllDevs);

router.route("/:slug").get(devController.getDev);

module.exports = router;
