// Imports
const models = require("../models");
const bcrypt = require("bcrypt");
const CryptoJS = require("crypto-js");
const fakeDataBase = require("./fakeDataBase");

// Exported functions
module.exports = {
  timestampTranslator: (value) => {
    return value.getTime() / 1000;
  },
  averageCounter: (onFireCounter, coldCounter) => {
    if (!onFireCounter && !coldCounter) {
      return null;
    } else if (!onFireCounter) {
      return 0;
    } else if (!coldCounter) {
      return 100;
    } else {
      return Math.round(onFireCounter / ((onFireCounter + coldCounter) / 100));
    }
  },

  // Set index popularity : 5pts for every like/unlike and 10pts for a comment
  popularityCounter: async (onFireCounter, coldCounter, id, isFeedPost) => {
    let popularityCounterResponse = 0;
    let postComment = null;
    let listComments = null;

    // If id is valid and if it is a feedPost
    if (id && isFeedPost) {
      // Find post comments lists
      try {
        listComments = await models.PostComment.findAll({
          attributes: ["id"],
          where: { FeedPostId: id },
        });
      } catch (err) {
        return { error: err };
      }
      // --- Then Calculate popularity ---
      // For every cold vote add 5 points
      if (coldCounter) {
        popularityCounterResponse += coldCounter * 5;
      }
      // For every onFire vote add 10 points
      if (onFireCounter) {
        popularityCounterResponse += onFireCounter * 10;
      }
      // For every comment add 15 points
      if (listComments.length) {
        popularityCounterResponse += listComments.length * 15;
      }
      // Return value of popularity
      return popularityCounterResponse;
    } else if (id && !isFeedPost) {
      // If id is valid and if it is a post comment
      // --- Then Calculate popularity ---
      // For every cold vote add 5 points
      if (coldCounter) {
        popularityCounterResponse += coldCounter * 5;
      }
      // For every onFire vote add 10 points
      if (onFireCounter) {
        popularityCounterResponse += onFireCounter * 10;
      }

      // Return value of popularity
      return popularityCounterResponse;
    } else {
      console.log({ error: "Invalid params" });
    }
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
      // Crypt email
      let emailEncrypted = null;
      try {
        emailEncrypted = CryptoJS.AES.encrypt(
          user.email,
          process.env.CRYPTO_JS_KEY
        ).toString();
      } catch (err) {
        console.log({ error: "Cannot crypt email" });
      }

      // Crypt password and create user
      await bcrypt.hash(user.password, 5, async (error, bcryptedPassword) => {
        try {
          newUser = await models.User.create({
            email: emailEncrypted,
            alias: user.alias,
            password: bcryptedPassword,
            service: user.service,
            urlPicture: user.urlPicture,
            isModerator: user.isModerator,
          });
        } catch (err) {
          console.log("Cannot create add users ");
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
          console.log("Cannot update user ");
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
        const userUrlPicture = feedPostObject.posterProfile.urlPicture;
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
          console.log({ error: "unable to create feed post" });
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
          console.log("Cannot update user ");
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
                  console.log({ error: "unable to create comment" });
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
                    console.log("Cannot update user ");
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
      console.log({ error: "global error: " });
    }
  },
};
