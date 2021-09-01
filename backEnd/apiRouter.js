// Imports
const express = require("express");

// Imports Middlewares
 const multer = require('./middleware/multer-config');
 const auth = require('./middleware/auth');

// Import controllers
const usersCtrl = require("./routes/usersCtrl");
const feedPostCtrl = require("./routes/feedPostCtrl");
const postCommentCtrl = require("./routes/postCommentCtrl");
const feedPostOnFireCtrl = require("./routes/feedPostOnFireCtrl");
const postCommentOnFireCtrl = require("./routes/postCommentOnFireCtrl");

// Routes
exports.router = (() => {
  const apiRouter = express.Router();

  // Users routes
  apiRouter.route("/users/register/").post(usersCtrl.register);
  apiRouter.route("/users/login/").post(usersCtrl.login);
  apiRouter.route("/users/myProfile/").get(auth, usersCtrl.getUserProfile);
  apiRouter.route("/users/myProfile/").put(auth, usersCtrl.updateUserProfile);
  apiRouter.route("/:userId/users/myProfile/").delete(auth, usersCtrl.deleteUserProfile);

  // FeedPosts routes
  apiRouter.route("/feedPosts/new/").post(auth, multer,feedPostCtrl.createFeedPost);
  apiRouter.route("/feedPosts/").get(auth, feedPostCtrl.listFeedPost);
  apiRouter.route("/:feedPostId/feedPosts/").delete(auth, feedPostCtrl.deleteFeedPost);

  // PostComment routes
  apiRouter.route("/postComment/new/").post(auth, postCommentCtrl.createPostComment);
  apiRouter.route("/postComment/").get(auth, postCommentCtrl.listPostComment);
  apiRouter.route("/:postCommentId/postComment/").delete(auth, postCommentCtrl.deletePostComment);

  // Likes
  apiRouter
    .route("/postComment/:postCommentId/vote/like")
    .post(auth, postCommentOnFireCtrl.onFirePostComment);
  apiRouter
    .route("/postComment/:postCommentId/vote/dislike")
    .post(auth, postCommentOnFireCtrl.coldPostComment);
  apiRouter
    .route("/feedPost/:feedPostId/vote/like")
    .post(auth, feedPostOnFireCtrl.onFireFeedPost);
  apiRouter
    .route("/feedPost/:feedPostId/vote/dislike")
    .post(auth, feedPostOnFireCtrl.coldFeedPost);

  return apiRouter;
})();
