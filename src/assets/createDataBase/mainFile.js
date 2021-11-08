import * as dataPosts from "./dataToImport/dataForPosts.js";
import * as dataProfiles from "./dataToImport/dataForProfiles.js";

// --------------------------------
// --------------------------------
// ------ RANDOM DATE ---------
// --------------------------------
const randomDate = () => {
  let dateToInject = new Date();
  // Set Year
  const randomNumber = getRandomInt(1, 100);
  if (randomNumber < 33) {
    dateToInject.setFullYear(2021);
  } else {
    dateToInject.setFullYear(2022);
  }
  // Set Month

  if (dateToInject.getFullYear() === 2021) {
    dateToInject.setMonth(getRandomInt(7, 12));
  } else {
    dateToInject.setMonth(getRandomInt(1, 12));
  }
  // Set Day
  let dateToSave = null;
  if (dateToInject.getMonth() === 1) {
    dateToSave = getRandomInt(1, 28);
  } else if (
    dateToInject.getMonth() === 3 ||
    dateToInject.getMonth() === 5 ||
    dateToInject.getMonth() === 8 ||
    dateToInject.getMonth() === 10
  ) {
    dateToSave = getRandomInt(1, 30);
  } else {
    dateToSave = getRandomInt(1, 31);
  }
  dateToInject.setDate(dateToSave);
  // Set Hours
  dateToInject.setHours(getRandomInt(0, 23));
  // Set Minutes
  dateToInject.setMinutes(getRandomInt(0, 59));
  // Set Seconds
  dateToInject.setSeconds(getRandomInt(0, 59));

  //Return date
  return dateToInject;
};

// --------------------------------
// --------------------------------
// ------ SHOW ME OBJECTS ---------
// --------------------------------
export const showMeObject = () => {
  console.log("list of profiles");
  console.log(createProfile());
  console.log("list of comments");
  console.log(fillItUpComments());
  console.log("list of posts");
  console.log(updatePosts());
};

// --------------------------------
// --------------------------------
// ---- FILL IT UP COMMENTS -------
// --------------------------------
export const fillItUpComments = async () => {
  // Init ----- List, Counter and Array ---------- VALID
  let listOfComments = [];
  let counter = 0;
  let counterOriginalText = 0;
  const listProfiles = await createProfile();
  while (listOfComments.length < listProfiles.length) {
    let newComment = {
      profile: {
        _id: listProfiles[counter]._id,
        alias: listProfiles[counter].alias,
        urlPicture: listProfiles[counter].urlPicture,
      },
      text: dataPosts.originalText[getRandomInt(0, 39)],
      createdAt: randomDate(),
    };
    if (
      !newComment.profile.alias ||
      !newComment.profile.urlPicture ||
      !newComment.text ||
      !newComment.createdAt
    ) {
      console.log({
        message: "------ its empty -----",
        counter: counter,
        counterOriginalText: counterOriginalText,
      });
    }
    // Push comment to list
    listOfComments.push(newComment);

    //  --- Iterate ------------
    counter++;
    counterOriginalText++;
    if (counterOriginalText >= 40) {
      counterOriginalText = 0;
    }
  }
  return listOfComments;
};

// --------------------------------
// --------------------------------
// -------- UPDATE POSTS ----------
// --------------------------------
export const updatePosts = async () => {
  // Init ----- List and Counters ---------- VALID
  let listOfPost = [];
  let counter = 0;
  let counterForPostsContent = 0;
  const arrayOfOrderRandom = getArrayOfUniqueRandomInt(130, 0, 0, 130);
  const arrayOfSecondOrderRandom = getArrayOfUniqueRandomInt(130, 0, 0, 130);
  const arrayOfRandomNumberForPosts = getArrayOfUniqueRandomInt(
    dataPosts.textAndUrlContent.length,
    0,
    0,
    dataPosts.textAndUrlContent.length
  );

  // Init ----- Create Profile list to Use ---------- VALID
  const profilesList = await createProfile();
  // Init ----- Create Comment list to Use ---------- VALID
  const commentList = fillItUpComments();

  // Update ----- Loop for updating
  while (listOfPost.length != dataPosts.textAndUrlContent.length) {
    let newPost = {
      createdAt: randomDate(),
      content: {
        text:
          dataPosts.textAndUrlContent[
            arrayOfRandomNumberForPosts[counterForPostsContent]
          ].text,
        urlPicture:
          dataPosts.textAndUrlContent[
            arrayOfRandomNumberForPosts[counterForPostsContent]
          ].urlPicture,
        originalPosterProfile: {
          alias: profilesList[arrayOfSecondOrderRandom[counter]].alias,
          urlPicture:
            profilesList[arrayOfSecondOrderRandom[counter]].urlPicture,
          _id: profilesList[arrayOfSecondOrderRandom[counter]]._id,
          text: dataPosts.originalText[getRandomInt(0, 40)],
        },
      },
      posterProfile: {
        alias: profilesList[arrayOfOrderRandom[counter]].alias,
        urlPicture: profilesList[arrayOfOrderRandom[counter]].urlPicture,
        service: profilesList[arrayOfOrderRandom[counter]].service,
        _id: profilesList[arrayOfOrderRandom[counter]]._id,
      },
      commentsList: [],
    };

    if (
      !newPost.content.text ||
      newPost.content.text == "" ||
      newPost.content.text == " "
    ) {
      newPost.content.text = dataPosts.originalText[getRandomInt(0, 40)];
    }

    // Update ----- commentsList ---------- VALID
    let numberOfComments = getRandomInt(1, 15); // Random number of comments by post
    let startAtNumber = getRandomInt(0, 130); // Random start in an array of number
    let numberIterate = 0; // Iterate number for finishing the loop

    while (numberIterate != numberOfComments) {
      newPost.commentsList.push((await commentList)[startAtNumber]);
      startAtNumber++;
      if (startAtNumber == 130) {
        startAtNumber = 0;
      }
      numberIterate++;
    }

    // control if something is empty
    if (
      !newPost.content.text ||
      !newPost.content.urlPicture ||
      !newPost.content.originalPosterProfile.alias ||
      !newPost.content.originalPosterProfile.urlPicture ||
      !newPost.content.originalPosterProfile._id ||
      !newPost.content.originalPosterProfile.text ||
      !newPost.posterProfile.alias ||
      !newPost.posterProfile.urlPicture ||
      !newPost.posterProfile.service ||
      !newPost.posterProfile._id ||
      !newPost.commentsList
    ) {
      console.log("Empty entry for post list");
    }

    // Push new post to array
    listOfPost.push(newPost);
    //  --- Iterate ------------
    counterForPostsContent++;
    counter++;
    if (counter == profilesList.length) {
      counter = 0;
    }
  }
  console.log("---------------------------------------");
  console.log("---------------------------------------");
  console.log("---------------------------------------");
  console.log("---------------------------------------");
  console.log("---------------------------------------");
  console.log("---------------------------------------");
  console.log("--------------- POSTS LIST ---------------");
  console.log("This is the posts list object generated.");
  console.log(
    "If you want, you can copy and paste it, for injecting to database."
  );
  console.log(listOfPost);
  console.log("--------------- PROFILES LIST ---------------");
  console.log("This is the profiles list object generated.");
  console.log(profilesList);
  console.log("--------------- COMMENTS LIST ---------------");
  console.log("This is the comments list object generated.");
  console.log(commentList);
  return listOfPost;
};

// --------------------------------
// --------------------------------
// -- GET RANDOM NUMBER BETWEEN ---
// --------------------------------
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// --------------------------------
// --------------------------------
// -- GET AN ARRAY OF UNIQUE RANDOM NUMBER BETWEEN ---
// --------------------------------
export const getArrayOfUniqueRandomInt = (
  howMuchIterate,
  addBeforeNumber,
  min,
  max
) => {
  let counter = 0;
  let arrayOfRandomNumbers = [];
  while (counter !== howMuchIterate) {
    const randomNumber = getRandomInt(min, max);
    if (!searchNumber(arrayOfRandomNumbers, randomNumber)) {
      arrayOfRandomNumbers.push(addBeforeNumber + randomNumber);
      counter++;
    }
  }
  return arrayOfRandomNumbers;
};

// --------------------------------
// --------------------------------
// - SEARCH A NUMBER IN AN ARRAY --
// --------------------------------
export const searchNumber = (array, number) => {
  const found = array.find((num) => num === number);
  if (found >= 0) {
    return true;
  } else {
    return false;
  }
};

// --------------------------------
// --------------------------------
// -- ID ARRAY OF ONFIRE OR COLD --
// --------------------------------
export const arrayOfOnFireAndCold = (profilesList) => {
  let counterFirst = 0;
  const arrayOfOnFireAndCold = [];

  while (counterFirst !== 40) {
    const arrayOfRandomNumbers = [];
    const numberOfIdOnFire = getRandomInt(0, 30);
    const numberOfIdCold = getRandomInt(0, 10);
    let temporaryArray = [[], []];
    let counterSecond = 0;

    // array of onFire
    while (counterSecond !== numberOfIdOnFire) {
      const randomNumber = getRandomInt(0, 40);
      if (!searchNumber(arrayOfRandomNumbers, randomNumber)) {
        arrayOfRandomNumbers.push(randomNumber);
        temporaryArray[0].push(profilesList[randomNumber]._id);
        counterSecond++;
      }
    }
    // array of cold
    counterSecond = 0;
    while (counterSecond !== numberOfIdCold) {
      const randomNumber = getRandomInt(0, 40);
      if (!searchNumber(arrayOfRandomNumbers, randomNumber)) {
        arrayOfRandomNumbers.push(randomNumber);
        temporaryArray[1].push(profilesList[randomNumber]._id);
        counterSecond++;
      }
    }
    arrayOfOnFireAndCold.push(temporaryArray);
    counterFirst++;
  }
  return arrayOfOnFireAndCold;
};

// --------------------------------
// --------------------------------
// ----------- createProfile ----------
// --------------------------------
export const createProfile = async () => {
  // Function for adding a 0 to numbers 0-9
  const minTwoDigits = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  // Function for create date for each profile
  const makeProfilesList = (gender, aliasList) => {
    let counter = 0;
    let arrayOfProfiles = [];

    aliasList.forEach((alias) => {
      let profile = {};
      // Update ----- Alias and url ---------- VALID
      profile._id = counter + 1;
      profile.alias = alias + getRandomInt(1, 65);
      profile.email = profile.alias + "@ShareMania.fr";
      profile.service = dataProfiles.profileService[counter];
      profile.password = "Azerty123+";
      profile.createdAt = randomDate();

      // For Male url picture
      if (gender === "male") {
        profile.urlPicture =
          "http://localhost:8080/mediaStatic/maleProfile" +
          minTwoDigits(counter + 1) +
          ".jpg";
        // For female url picture
      } else if (gender === "female") {
        profile.urlPicture =
          "http://localhost:8080/mediaStatic/femaleProfile" +
          minTwoDigits(counter + 1) +
          ".jpg";
        // Else send an error
      } else {
        console.log("Problem with gender");
      }

      // Set moderator
      if (profile.service === "Ressources Humaines") {
        profile.isModerator = true;
      } else {
        profile.isModerator = false;
      }
      // Push profile to array
      arrayOfProfiles.push(profile);

      //  Iterate counter
      counter++;
    });
    return arrayOfProfiles;
  };

  let arrayOfProfilesMixt = [];
  // For Male url picture
  const maleProfileList = makeProfilesList("male", dataProfiles.namesMale);
  maleProfileList.forEach((profile) => {
    arrayOfProfilesMixt.push(profile);
  });
  // For female url picture
  const femaleProfileList = makeProfilesList(
    "female",
    dataProfiles.namesFemale
  );
  femaleProfileList.forEach((profile) => {
    arrayOfProfilesMixt.push(profile);
  });
  // Set id number
  let counter = 1;
  arrayOfProfilesMixt.forEach((profile) => {
    profile._id = counter;
    counter++;
  });

  return arrayOfProfilesMixt;
};

// --------------------------------
// --------------------------------
// -- GET THOUSAND OF POSTS --
// --------------------------------
export const getThousandPosts = async () => {
  // init array for store all posts before filtered
  let arrayOfPosts = [];
  let arrayOfPostsFiltered = [];
  let response = null;
  let responseConverted = null;
  const arrayOfKeyWords = [
    "anniversaire",
    "rigolo",
    "bébé",
    "france",
    "vendredi",
    "weekend",
    "magie",
    "humour",
    "bonjour",
    "oups",
    "fail",
    "miss it",
    "je t'aime",
    "fiesta",
    "party",
    "sport",
    "fun sport",
    "marvel",
    "star wars",
    "football",
    "fun",
    "simpson",
    "memes",
    "smart",
    "débile",
    "boulet",
    "non",
    "oui",
    "genial",
    "bien joué",
    "pourquoi",
    "attention",
    "lol cat",
    "lol dog",
    "lol animal",
  ];

  // get the fifty first giphy trending
  try {
    response = null;
    responseConverted = null;
    response = await fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=Ysa02CTSrAfmSpJoUWeEgEWflZVItJEJ&limit=50&offset=0&rating=r"
    );
    responseConverted = await response.json();

    // if fetching is not empty, add to array of posts
    if (responseConverted) {
      responseConverted.data.forEach((post) => {
        arrayOfPosts.push(post);
      });
    }
  } catch (error) {
    console.log(error);
  }

  // get the fifty second giphy trending
  try {
    response = null;
    responseConverted = null;
    response = await fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=Ysa02CTSrAfmSpJoUWeEgEWflZVItJEJ&limit=50&offset=50&rating=r"
    );
    responseConverted = await response.json();

    // if fetching is not empty, add to array of posts
    if (responseConverted) {
      responseConverted.data.forEach((post) => {
        arrayOfPosts.push(post);
      });
    }
  } catch (error) {
    console.log(error);
  }

  // get fourty giphy with each keywords
  arrayOfKeyWords.forEach(async (keyWord) => {
    try {
      response = null;
      responseConverted = null;
      const urlBuilded =
        "https://api.giphy.com/v1/gifs/search?api_key=Ysa02CTSrAfmSpJoUWeEgEWflZVItJEJ&q=" +
        keyWord +
        "&limit=40&offset=0&rating=r&lang=f";
      response = await fetch(urlBuilded);
      responseConverted = await response.json();

      // if fetching is not empty, add to array of posts
      if (responseConverted) {
        responseConverted.data.forEach((post) => {
          arrayOfPosts.push(post);
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
  console.log({ arrayOfPosts: arrayOfPosts });

  // Now filter posts to keep only information needed
  setTimeout(() => {
    arrayOfPosts.forEach((post) => {
      let postToPush = {
        text: post.title,
        urlPicture: post.images.original.webp,
      };
      if (!postToPush.text) {
        console.log("no text original");
      } else {
        arrayOfPostsFiltered.push(postToPush);
      }
    });

    console.log({ arrayOfPostsFiltered: arrayOfPostsFiltered });
  }, 1000);
};
