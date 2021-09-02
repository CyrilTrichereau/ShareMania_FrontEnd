// Imports
const models = require("../models");

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
  popularityCounter: async (onFireCounter, coldCounter, feedPostId) => {
    let popularityCounterResponse = 0;
    let listComments = [];
    if (!onFireCounter && !coldCounter) {
    } else if (!onFireCounter) {
      popularityCounterResponse += coldCounter * 5;
    } else if (!coldCounter) {
      popularityCounterResponse += onFireCounter * 5;
    } else {
      popularityCounterResponse += (onFireCounter + coldCounter) * 5;
    }
    if (feedPostId) {
      try {
        listComments = await models.PostComment.findAll({
          where: { FeedPostId: feedPostId },
        });
      } catch (err) {
        return { error: err };
      }
    }

    if (listComments) {
      popularityCounterResponse += listComments.length * 10;
    }
    return popularityCounterResponse;
  },
};
