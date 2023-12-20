const one = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSecond = document.getElementById("timer-seconds");

  let idInterval;

  const getTimeRemainig = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemainig();

    if (getTime.timeRemaining <= 0) {
      clearInterval(idInterval);
    } else {
      for (let key in getTime) {
        if (getTime[key] !== "timeRemaining") {
          if (getTime[key] < 10 && getTime[key] >= 0) {
            getTime[key] = "0" + getTime[key];
          }
        }
      }

      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSecond.textContent = getTime.seconds;
    }
  };
  updateClock();
  idInterval = setInterval(updateClock, 1000);
};

export default one;
