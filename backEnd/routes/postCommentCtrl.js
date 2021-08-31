// Imports
const models = require("../models");
const jwtUtils = require("../utils/jwt.utils");

// Constants
const CONTENT_TEXT_LIMIT = 4;
const ITEMS_LIMIT = 50;

// Routes
module.exports = {
  createPostComment: (req, res) => {
    // Getting auth header
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    // Params
    const postUserId = req.body.post.posterId;
    const feedPostId  = req.body.post.postId;
    const postTime = req.body.post.time;
    const user_Id = req.body.profile._id;
    const userAlias = req.body.profile.alias;
    const userUrlPicture = req.body.profile.urlPicture;
    const commentText = req.body.text;

    // If One information is missing
    if (
      !postUserId ||
      !feedPostId ||
      !postTime ||
      !user_Id ||
      !userAlias ||
      !userUrlPicture ||
      !commentText
    ) {
      return res.status(400).json({ error: "missing parameters" });
    }

    // If the content text is too small
    if (commentText.length <= CONTENT_TEXT_LIMIT) {
      return res.status(400).json({ error: "invalid parameters" });
    }

    // Search the user
    models.FeedPost.findOne({
      where: { id: feedPostId },
    })
      .then((feedPostFound) => {
        if (feedPostFound) {
          // If usier isfound, create a new post with comments
          models.PostComment.create({
            postUserId: postUserId,
            FeedPostId: feedPostId,
            postTime: postTime,
            userId: user_Id,
            userAlias: userAlias,
            userUrlPicture: userUrlPicture,
            commentText: commentText,
          })
            .then((newPost) => {
              // if post is well created, send newPost Object or send an error
              if (newPost) {
                return res.status(201).json(newPost);
              } else {
                return res.status(500).json({ error: "cannot post message" });
              }
            })
            .catch((err) => {
              return res
                .status(500)
                .json({ error: "unable to verify user" + err });
            });
        } else {
          res.status(404).json({ error: "user not found" });
        }
      })
      .catch((err) => {
        return res.status(500).json({ error: "unable to verify user" + err });
      });
  },

    // ------------------------
  // ------------------------
  // ------------------------
  listPostComment: (req, res) => {
    const fields = req.query.fields;
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    const order = req.query.order;

    if (limit > ITEMS_LIMIT) {
      limit = ITEMS_LIMIT;
    }

    // Search for all comments, with get options (fields, order, limit and offset)
    models.PostComment.findAll({
      order: [order != null ? order.split(":") : ["createdAt", "ASC"]],
      attributes: fields !== "*" && fields != null ? fields.split(",") : null,
      limit: !isNaN(limit) ? limit : null,
      offset: !isNaN(offset) ? offset : null,
    })
      .then((comments) => {
        if (comments) {
          res.status(200).json(comments);
        } else {
          res.status(404).json({ error: "no comments found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: "invalid fields =>   " + err });
      });
  },
  deletePostComment: (req, res) => {
    // control userID == user who created the post or isModerator == true
  },
};
