// Imports
const models = require("../models");
const jwtUtils = require("../utils/jwt.utils");

// Constants
const CONTENT_TEXT_LIMIT = 4;
const ITEMS_LIMIT = 50;

// Routes
module.exports = {
  createPostComment: async (req, res) => {
    // Getting auth header
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    // Params
    const postUserId = req.body.post.posterId;
    const feedPostId = req.body.post.postId;
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

    let feedPostFound = null;
    let newPost = null;

    try {
      // Search feed post
      feedPostFound = await models.FeedPost.findOne({
        where: { id: feedPostId },
      });
    } catch (err) {
      return res.status(500).json({ error: "unable to find post" });
    }

    if (feedPostFound) {
      // If feed post is found, create a new comment

      try {
        newPost = await models.PostComment.create({
          postUserId: postUserId,
          FeedPostId: feedPostId,
          postTime: postTime,
          userId: user_Id,
          userAlias: userAlias,
          userUrlPicture: userUrlPicture,
          commentText: commentText,
        });
      } catch (err) {
        return res.status(500).json({ error: "unable to create comment" });
      }
      // if post is well created, send newPost Object or send an error
      if (newPost) {
        return res.status(201).json(newPost);
      } else {
        return res.status(500).json({ error: "cannot post message" });
      }
    } else {
      res.status(404).json({ error: "user not found" });
    }
  },

  // ------------------------
  // ------------------------
  // ------------------------
  listPostComment: async (req, res) => {
    const fields = req.query.fields;
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    const order = req.query.order;

    if (limit > ITEMS_LIMIT) {
      limit = ITEMS_LIMIT;
    }

    // Search for all comments, with get options (fields, order, limit and offset)

    let commentsList = null;

    try {
      // Search feed post
      commentsList = await models.PostComment.findAll({
        order: [order != null ? order.split(":") : ["createdAt", "ASC"]],
        attributes: fields !== "*" && fields != null ? fields.split(",") : null,
        limit: !isNaN(limit) ? limit : null,
        offset: !isNaN(offset) ? offset : null,
      });
    } catch (err) {
      return res.status(500).json({ error: "unable to get post comments" });
    }

    // if list of comment is not false
    if (commentsList) {
      // Prepare response




        // Return response
      res.status(200).json(commentsList);
    } else {
      res.status(404).json({ error: "no comments found" });
    }
  },
  deletePostComment: async (req, res) => {
    // control userID == user who created the post or isModerator == true
  },
};
