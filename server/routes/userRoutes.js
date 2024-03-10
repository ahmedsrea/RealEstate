const router = require("express").Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const logoutController = require("../controllers/logoutController");
const refreshTokenController = require("../controllers/refreshTokenController");

router.post("/signup", authController.signUp);
router.post("/login", authController.handlelogin);
router.get("/logout", logoutController.handleLogout);
router.get("/refresh", refreshTokenController.handleRefreshToken);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

module.exports = router;
