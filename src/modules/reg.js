"use strict";

const reg = () => {
  const calc = document.querySelectorAll(".calc-item");
  const forms = document.querySelectorAll("form");

  calc.forEach((item) => {
    item.addEventListener("input", () => {
      if (item.tagName !== "SELECT") {
        item.value = item.value.replace(/\D+/g, "");
      }
    });
  });

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.type === "email") {
          input.value = input.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g, "");
        }
        if (input.type === "tel") {
            input.value = input.value.replace(/[^0-9\(\)\-]/g, "");
          }
        if (input.type === "text" || input.placeholder === "Ваше сообщение") {
          input.value = input.value.replace(/[^а-яА-я\-\ ]/g, "");
        }
      });
    });
  });
};

export default reg;
