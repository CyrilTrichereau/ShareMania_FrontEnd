// Imports
const models = require("../models");
const jwtUtils = require("../utils/jwt.utils");

// Constants
const CONTENT_TEXT_LIMIT = 12;
const ITEMS_LIMIT = 50;

// Routes
module.exports = {
  createFeedPost: (req, res) => {
    // Getting auth header
    const headerAuth = req.headers["authorization"];
    const userId = jwtUtils.getUserId(headerAuth);

    // Params
    const userAlias = req.body.posterProfile.alias;
    const userUrlPicture = req.body.posterProfile.urlPicture;
    const userService = req.body.posterProfile.service;
    const user_Id = req.body.posterProfile._id;
    const contentText = req.body.content.text;
    const contentUrlPicture = req.body.content.urlPicture;
    const originalUserAlias = req.body.content.originalPosterProfile.alias;
    const originalUserUrlPicture =
      req.body.content.originalPosterProfile.urlPicture;
    const originalUserText = req.body.content.originalPosterProfile.text;
    const onFireId = req.body.onFire_id;
    const coldId = req.body.cold_id;

    if (
      userAlias == null ||
      userUrlPicture == null ||
      userService == null ||
      user_Id == null ||
      contentText == null ||
      userUrlPicture == null
    ) {
      return res.status(400).json({ error: "missing parameters" });
    }

    if (contentText.length <= CONTENT_TEXT_LIMIT) {
      return res.status(400).json({ error: "invalid parameters" });
    }

    models.User.findOne({
      where: { id: userId },
    })
      .then((userFound) => {
        if (userFound) {
          models.FeedPost.create({
            userAlias: userAlias,
            userUrlPicture: userUrlPicture,
            userService: userService,
            UserId: userId,
            contentText: contentText,
            contentUrlPicture: contentUrlPicture,
            originalUserAlias: originalUserAlias,
            originalUserUrlPicture: originalUserUrlPicture,
            originalUserText: originalUserText,
          })
            .then((newPost) => {
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
        return res.status(500).json({ error: "unable to verify user" });
      });
  },

  // ------------------------
  // ------------------------
  // ------------------------
  listFeedPost: (req, res) => {
    const fields = req.query.fields;
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    const order = req.query.order;

    if (limit > ITEMS_LIMIT) {
      limit = ITEMS_LIMIT;
    }

    models.FeedPost.findAll({
      order: [order != null ? order.split(":") : ["createdAt", "ASC"]],
      attributes: fields !== "*" && fields != null ? fields.split(",") : null,
      limit: !isNaN(limit) ? limit : null,
      offset: !isNaN(offset) ? offset : null,
      include: [
        {
          model: models.User,
          attributes: ["alias"],
        },
      ],
    })
      .then((messages) => {
        if (messages) {
          res.status(200).json(messages);
        } else {
          res.status(404).json({ error: "no messages found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: "invalid fields" });
      });
  },
};


