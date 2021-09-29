export const elapsedTime = (time) => {
  // calculate time elapsed in minutes
  let calcTime = Math.round((Date.now() / 1000 - time) / 60);
  let timeValue = "min";
  let introductionSentence = "Il y a ";
  // if inferior at 60 min
  if (calcTime <= 1) {
    return "A l'instant";
  } else if (calcTime <= 60) {
    return introductionSentence + calcTime.toString() + " " + timeValue;
  } else {
    // if inferior at 24 hours
    calcTime = Math.round(calcTime / 60);
    if (calcTime <= 24) {
      if (calcTime === 1) {
        timeValue = "heure";
      } else {
        timeValue = "heures";
      }
      return introductionSentence + calcTime.toString() + " " + timeValue;
    } else {
      // if inferior at 30 days
      calcTime = Math.round(calcTime / 24);
      if (calcTime <= 30) {
        if (calcTime === 1) {
          timeValue = "jour";
        } else {
          timeValue = "jours";
        }
        return introductionSentence + calcTime.toString() + " " + timeValue;
      } else {
        // if inferior at 12 months
        calcTime = Math.round(calcTime / 30);
        if (calcTime <= 12) {
          timeValue = "mois";

          return introductionSentence + calcTime.toString() + " " + timeValue;
        } else {
          // else in years
          calcTime = Math.round(calcTime / 12);
          if (calcTime === 1) {
            timeValue = "an";
          } else {
            timeValue = "ans";
          }
          return introductionSentence + calcTime.toString() + " " + timeValue;
        }
      }
    }
  }
};

export const controlAuth = async () => {
  if (localStorage.getItem("token")) {
    let response = null;
    try {
      response = await fetch("http://localhost:8080/api/users/auth/", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      response = await response.json();
    } catch (error) {
      console.log(error);
    }
    if (response.success !== "valid token") {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
