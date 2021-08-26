// Imports
const express = require("express");
const usersCtrl = require("./routes/usersCtrl");
const feedPostCtrl = require("./routes/feedPostCtrl");

// Routes
exports.router = (() => {
  const apiRouter = express.Router();

  // Users routes
  apiRouter.route("/users/register/").post(usersCtrl.register);
  apiRouter.route("/users/login/").post(usersCtrl.login);
  apiRouter.route("/users/myProfile/").get(usersCtrl.getUserProfile);
  apiRouter.route("/users/myProfile/").put(usersCtrl.updateUserProfile);

  // FeedPosts routes
  apiRouter.route("/feedPosts/new/").post(feedPostCtrl.createFeedPost);
  apiRouter.route("/feedPosts/").get(feedPostCtrl.listFeedPost);


  return apiRouter;
})();
