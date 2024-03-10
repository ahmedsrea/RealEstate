const User = require("../models/users");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.handleLogout = catchAsync(async (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies.jwt) {
    return next(new AppError("You are not sign in", 204));
  }
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!User) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return next(new AppError("There no refresh token", 204));
  }

  foundUser.refreshToken = foundUser.refreshToken.filter(
    (rt) => rt !== refreshToken
  );
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204);
});
