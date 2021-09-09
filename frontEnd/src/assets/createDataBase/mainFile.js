import * as importProfilesList from "./listProfile.js";
import * as importPostsList from "./listPosts.js";
import * as importCommentsList from "./listComments.js";
import * as dataPosts from "./dataToImport/dataForPosts.js";
import * as dataProfiles from "./dataToImport/dataForProfiles.js";

// --------------------------------
// --------------------------------
// ------ RANDOM DATE ---------
// --------------------------------
const randomDate = () => {
  let dateToInject = new Date();
  // Set Year
  dateToInject.setFullYear(2021);
  // Set Month
  dateToInject.setMonth(getRandomInt(5, 9));
  // Set Day
  let dateToSave = null;
  if (dateToInject.getMonth() === 8) {
    dateToSave = getRandomInt(1, 13);
  } else if (dateToInject.getMonth() === 5) {
    dateToSave = getRandomInt(1, 30);
  } else {
    dateToSave = getRandomInt(1, 31);
  }
  dateToInject.setDate(dateToSave);
  // Set Hours
  let hoursToSave = null;
  if (dateToInject.getMonth() === 8 && dateToInject.getDay() === 13) {
    hoursToSave = getRandomInt(0, 11);
  } else {
    hoursToSave = getRandomInt(0, 23);
  }
  dateToInject.setHours(hoursToSave);
  // Set Minutes
  let minutesToSave = null;
  if (
    dateToInject.getMonth() === 8 &&
    dateToInject.getDay() === 13 &&
    dateToInject.getHours() === 11
  ) {
    minutesToSave = 3;
  } else {
    minutesToSave = getRandomInt(0, 59);
  }
  dateToInject.setMinutes(minutesToSave);
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
  console.log(fillItUpProfiles());
  console.log("list of comments");
  console.log(fillItUpComments());
  console.log("list of posts");
  console.log(updatePosts());
};

// --------------------------------
// --------------------------------
// ---- FILL IT UP PROFILES -------  VALID
// --------------------------------
export const fillItUpProfiles = () => {
  // Init ----- List, Counters and ID array ---------- VALID
  let list = importProfilesList.listProfile;
  let counter = 0;

  list.forEach((profile) => {
    // Update ----- Alias and url ---------- VALID
    profile._id = counter + 1;
    profile.alias = dataProfiles.profileAlias[counter];
    profile.urlPicture = dataProfiles.profilelUrl[counter];
    profile.email = dataProfiles.profileAlias[counter] + "@gmail.com";
    profile.service = dataProfiles.profileService[counter];
    profile.password = "Azerty123+";
    profile.createdAt = randomDate();

    if (profile.service === "Ressources Humaines") {
      profile.isModerator = true;
    } else {
      profile.isModerator = false;
    }
    //  --- Iterate ------------
    counter++;
  });
  console.log(list);
  return list;
};

// --------------------------------
// --------------------------------
// ---- FILL IT UP COMMENTS -------
// --------------------------------
export const fillItUpComments = () => {
  // Init ----- List, Counter and Array ---------- VALID
  let list = importCommentsList.listComments;
  let counter = 0;
  const listProfiles = fillItUpProfiles();
  const arrayOfNumber = getArrayOfUniqueRandomInt(40, 0, 0, 40);

  list.forEach((comment) => {
    // Update ----- Profile ---------- VALID
    comment.profile._id = listProfiles[counter]._id;
    comment.profile.alias = listProfiles[counter].alias;
    comment.profile.urlPicture = listProfiles[counter].urlPicture;

    // Update ----- createdAt, Text and id ---------- VALID
   comment.text = dataPosts.originalText[arrayOfNumber[counter]];
    comment.createdAt = randomDate();

    //  --- Iterate ------------
    counter++;
  });
  console.log(list);
  return list;
};

// --------------------------------
// --------------------------------
// -------- UPDATE POSTS ----------
// --------------------------------
export const updatePosts = () => {
  // Init ----- List and Counters ---------- VALID
  let list = importPostsList.listPosts;
  let counter = 0;
  const arrayOfOrderRandom = getArrayOfUniqueRandomInt(40, 0, 0, 40);
  const arrayOfSecondOrderRandom = getArrayOfUniqueRandomInt(40, 0, 0, 40);

  // Init ----- Create Profile list to Use ---------- VALID
  const profilesList = fillItUpProfiles();
  // Init ----- Create Comment list to Use ---------- VALID
  const commentList = fillItUpComments();

  // Update ----- Loop for updating
  list.forEach((post) => {
    // Update ----- update firsts infos ---------- VALID
    post.createdAt = randomDate();

    // Update ----- post content ---------- VALID
    post.content.text =
      dataPosts.textAndUrlContent[arrayOfOrderRandom[counter]].text;
    post.content.urlPicture =
      dataPosts.textAndUrlContent[arrayOfOrderRandom[counter]].urlPicture;

    // Update ----- posterProfile ---------- VALID
    post.posterProfile.alias = profilesList[arrayOfOrderRandom[counter]].alias;
    post.posterProfile.urlPicture =
      profilesList[arrayOfOrderRandom[counter]].urlPicture;
    post.posterProfile.service =
      profilesList[arrayOfOrderRandom[counter]].service;
    post.posterProfile._id = profilesList[arrayOfOrderRandom[counter]]._id;

    // Update ----- originalPosterProfile ---------- VALID

    post.content.originalPosterProfile.alias =
      profilesList[arrayOfSecondOrderRandom[counter]].alias;
    post.content.originalPosterProfile.urlPicture =
      profilesList[arrayOfSecondOrderRandom[counter]].urlPicture;
    post.content.originalPosterProfile._id =
      profilesList[arrayOfSecondOrderRandom[counter]]._id;
    post.content.originalPosterProfile.text =
      dataPosts.originalText[arrayOfOrderRandom[counter]];

    // Update ----- commentsList ---------- VALID
    post.commentsList = [];
    let numberOfComments = getRandomInt(1, 10); // Random number of comments by post
    let startAtNumber = getRandomInt(0, 40); // Random start in an array of number
    let numberIterate = 0; // Iterate number for finishing the loop

    while (numberIterate != numberOfComments) {
      post.commentsList.push(commentList[startAtNumber]);

      startAtNumber++;
      if (startAtNumber === 40) {
        startAtNumber = 0;
      }
      numberIterate++;
    }

    //  --- Iterate ------------
    counter++;
  });
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
  console.log(list);
  console.log("--------------- PROFILES LIST ---------------");
  console.log("This is the profiles list object generated.");
  console.log(profilesList);
  console.log("--------------- COMMENTS LIST ---------------");
  console.log("This is the comments list object generated.");
  console.log(commentList);
  return list;
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
