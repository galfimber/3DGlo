const timer = (deadline) => {
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

  const correctTime = (time) => {
    for (let key in time) {
      if (time[key] !== "timeRemaining") {
        if (time[key] < 10) {
          time[key] = "0" + time[key];
        }
      }
    }
  };

  const updateClock = () => {
    let getTime = getTimeRemainig();

    if (getTime.timeRemaining <= 0) {
      clearInterval(idInterval);
    } else {
      if (getTime.hours < 10 || getTime.minutes < 10 || getTime.seconds < 10) {
        correctTime(getTime);
      }

      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSecond.textContent = getTime.seconds;
    }
  };
  updateClock();
  idInterval = setInterval(updateClock, 1000);
};

export default timer;
