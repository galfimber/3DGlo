const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется";
  const errorName = "Не менее 2 символов в имени";
  const errorTel = "Не менее 11 символов в имени";

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    //console.log(val);
    //console.log(key);
    try {
      formData.forEach((val, key) => {
        if (key === "user_name" && val.length < 2) {
          //console.log("Не менее 2 символов");
          statusBlock.textContent = errorName;
          throw new Error("Не менее 2 символов");
        } else if (key === "user_phone" && val.length < 11) {
          //console.log("Не менее 11 символов");
          statusBlock.textContent = errorTel;
          throw new Error("Не менее 11 символов");
        }
        formBody[key] = val;
      });
    } catch (error) {
      //console.log(error.message);
      return false;
    }

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    console.log("submit");

    sendData(formBody)
      .then(async (data) => {
        statusBlock.textContent = successText;
        formElements.forEach((input) => {
          input.value = "";
        });
        await new Promise((resolve, reject) => setTimeout(resolve, 5000));

        statusBlock.textContent = "";
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
      });

    return true;
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!submitForm()) {
        throw new Error("Недостаточно символов в имени или номере телефона");
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
