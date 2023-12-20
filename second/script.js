"use strict";

const block = document.getElementById("date");
let dateNewYear = new Date("1 january 2024").getTime();
const week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const time2 = function () {
  let date = new Date();

  let time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  console.dir(time);

  let good = "";

  const timeRemaining = (dateNewYear - date.getTime()) / 1000;
  let days = Math.floor(timeRemaining / 60 / 60 / 24);

  if (date.getHours() < 6) {
    good = "ночь";
  } else if (date.getHours() < 11) {
    good = "утро";
  } else if (date.getHours() < 17) {
    good = "день";
  } else if (date.getHours() < 23) {
    good = "вечер";
  }

  block.innerHTML = `Добрый ${good}<br>
  Сегодня: ${week[date.getDay()]}<br>
  Текущее время: ${time}<br>
  До нового года осталось ${days} дней`;
};

time2();
