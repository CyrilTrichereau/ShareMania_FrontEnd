// Imports
const models = require("../models");
const bcrypt = require("bcrypt");
const fakeDataBase = require("./fakeDataBase");

// Exported functions
module.exports = {
  timestampTranslator: (value) => {
    return value.getTime() / 1000;
  },
  isDataBase: async () => {
    const listUsers = await models.User.findAll({
      attributes: ["id"],
    });
    const listFeedPosts = await models.FeedPost.findAll({
      attributes: ["id"],
    });
    const listPostComments = await models.PostComment.findAll({
      attributes: ["id"],
    });
    if (
      !listUsers.length &&
      !listFeedPosts.length &&
      !listPostComments.length
    ) {
      return false;
    } else {
      return true;
    }
  },
  injectFakeUsers: async () => {
    fakeDataBase.users.forEach(async (user) => {
      let newUser = null;
      // Crypt password and create user
      await bcrypt.hash(user.password, 5, async (error, bcryptedPassword) => {
        try {
          newUser = await models.User.create({
            email: user.email,
            alias: user.alias,
            password: bcryptedPassword,
            service: user.service,
            urlPicture: user.urlPicture,
            isModerator: user.isModerator,
          });
        } catch (err) {
          console.log("Cannot create add users " + err);
        }
        // if user is well create, send message or send an error
        if (!newUser) {
          console.log("User cannot be create");
          return;
        }
        try {
          // Change createAt
          newUser.changed("createdAt", true);
          newUser.set("createdAt", user.createdAt, { raw: true });
          await newUser.save({
            silent: true,
            fields: ["createdAt"],
          });
        } catch (err) {
          console.log("Cannot update user " + err);
        }
      });
    });
  },
  // ------------------------
  // ------------------------
  // ------------------------
  // ------------------------
  // ------------------------
  injectFakeFeedPostsAndComments: () => {
    try {
      fakeDataBase.feedPosts.forEach(async (feedPostObject) => {
        // Params
        const userId = feedPostObject.posterProfile._id;
        const userAlias = feedPostObject.posterProfile.alias;
        const userUrlPicture =
          feedPostObject.posterProfile.urlPicture;
        const userService = feedPostObject.posterProfile.service;
        const contentText = feedPostObject.content.text;
        const contentUrlPicture = feedPostObject.content.urlPicture;
        const originalUserAlias =
          feedPostObject.content.originalPosterProfile.alias;
        const originalUserUrlPicture =
          feedPostObject.content.originalPosterProfile.urlPicture;
        const originalUserText =
          feedPostObject.content.originalPosterProfile.text;

        let newPost = null;
        // create a new post with comments
        try {
          newPost = await models.FeedPost.create({
            userAlias: userAlias,
            userUrlPicture: userUrlPicture,
            userService: userService,
            UserId: userId,
            contentText: contentText,
            contentUrlPicture: contentUrlPicture,
            originalUserAlias: originalUserAlias,
            originalUserUrlPicture: originalUserUrlPicture,
            originalUserText: originalUserText,
          });
        } catch (err) {
          console.log({ error: "unable to create feed post", err: err });
        }
        try {
          // Change createAt and updatedAt
          newPost.changed("createdAt", true);
          newPost.set("createdAt", feedPostObject.createdAt, { raw: true });
          await newPost.save({
            silent: true,
            fields: ["createdAt"],
          });
        } catch (err) {
          console.log("Cannot update user " + err);
        }
        if (newPost) {
          // Inject post comments
          setTimeout(() => {
            try {
              feedPostObject.commentsList.forEach(async (comment) => {
                // Params
                const feedPostId = newPost.id;
                const postTime = feedPostObject.createdAt;
                const postUserId = feedPostObject.posterProfile._id;
                const user_Id = comment.profile._id;
                const userAlias = comment.profile.alias;
                const userUrlPicture = comment.profile.urlPicture;
                const commentText = comment.text;

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
                  console.log({ error: "missing parameters" });
                }

                let newComment = null;

                try {
                  newComment = await models.PostComment.create({
                    postUserId: postUserId,
                    FeedPostId: feedPostId,
                    postTime: postTime,
                    userId: user_Id,
                    userAlias: userAlias,
                    userUrlPicture: userUrlPicture,
                    commentText: commentText,
                  });
                } catch (err) {
                  console.log({ error: "unable to create comment", err: err });
                }
                // if post is well created
                if (newComment) {
                  try {
                    // Change createAt and updatedAt
                    newComment.changed("createdAt", true);
                    newComment.set("createdAt", comment.createdAt, {
                      raw: true,
                    });
                    await newComment.save({
                      silent: true,
                      fields: ["createdAt"],
                    });
                  } catch (err) {
                    console.log("Cannot update user " + err);
                  }
                } else {
                  console.log({ error: "cannot post message" });
                }
              });
            } catch (err) {
              console.log({ error: err });
            }
          }, 50);

          return;
        } else {
          console.log({ error: "cannot post message" });
        }
      });
    } catch (err) {
      console.log({ error: "global error: ", err: err });
    }
  },
};
