
    export const onFirePercentage = (onFireArray, coldArray) => {
        return Math.round(
          onFireArray.length / ((onFireArray.length + coldArray.length) / 100)
        );
      };

      export const elapsedTime = (time) => {
        // calculate time elapsed in minutes
        let calcTime = Math.round((Date.now() / 1000 - time) / 60);
        let timeValue = "min";
        // if inferior at 60 min
        if (calcTime <= 60) {
          return calcTime.toString() + " " + timeValue;
        } else {
          // if inferior at 24 hours
          calcTime = Math.round(calcTime / 60);
          if (calcTime <= 24) {
            if (calcTime === 1) {
              timeValue = "heure";
            } else {
              timeValue = "heures";
            }
            return calcTime.toString() + " " + timeValue;
          } else {
            // if inferior at 30 days
            calcTime = Math.round(calcTime / 24);
            if (calcTime <= 30) {
              if (calcTime === 1) {
                timeValue = "jour";
              } else {
                timeValue = "jours";
              }
              return calcTime.toString() + " " + timeValue;
            } else {
              // if inferior at 12 months
              calcTime = Math.round(calcTime / 30);
              if (calcTime <= 12) {
                timeValue = "mois";
  
                return calcTime.toString() + " " + timeValue;
              } else {
                // else in years
                calcTime = Math.round(calcTime / 12);
                if (calcTime === 1) {
                  timeValue = "an";
                } else {
                  timeValue = "ans";
                }
                return calcTime.toString() + " " + timeValue;
              }
            }
          }
        }
      }