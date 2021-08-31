// Imports
const express = require("express");
const helmet = require("helmet");

// Import controllers
const usersCtrl = require("./routes/usersCtrl");
const feedPostCtrl = require("./routes/feedPostCtrl");
const postCommentCtrl = require("./routes/postCommentCtrl");
const feedPostOnFireCtrl = require("./routes/feedPostOnFireCtrl");
const postCommentOnFireCtrl = require("./routes/postCommentOnFireCtrl");

// Routes
exports.router = (() => {
  const apiRouter = express.Router();
  //Init helmet
  apiRouter.use(helmet());

  // Users routes
  apiRouter.route("/users/register/").post(usersCtrl.register);
  apiRouter.route("/users/login/").post(usersCtrl.login);
  apiRouter.route("/users/myProfile/").get(usersCtrl.getUserProfile);
  apiRouter.route("/users/myProfile/").put(usersCtrl.updateUserProfile);
  apiRouter.route("/users/myProfile/").delete(usersCtrl.deleteUserProfile);

  // FeedPosts routes
  apiRouter.route("/feedPosts/new/").post(feedPostCtrl.createFeedPost);
  apiRouter.route("/feedPosts/").get(feedPostCtrl.listFeedPost);
  apiRouter.route("/feedPosts/").delete(feedPostCtrl.deleteFeedPost);

  // PostComment routes
  apiRouter.route("/postComment/new/").post(postCommentCtrl.createPostComment);
  apiRouter.route("/postComment/").get(postCommentCtrl.listPostComment);
  apiRouter.route("/postComment/").delete(postCommentCtrl.deletePostComment);

  // Likes
  apiRouter
    .route("/postComment/:postCommentId/vote/like")
    .post(postCommentOnFireCtrl.onFirePostComment);
  apiRouter
    .route("/postComment/:postCommentId/vote/dislike")
    .post(postCommentOnFireCtrl.coldPostComment);
  apiRouter
    .route("/feedPost/:feedPostId/vote/like")
    .post(feedPostOnFireCtrl.onFireFeedPost);
  apiRouter
    .route("/feedPost/:feedPostId/vote/dislike")
    .post(feedPostOnFireCtrl.coldFeedPost);

  return apiRouter;
})();
