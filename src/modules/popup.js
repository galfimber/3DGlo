const popup = () => {
  const popup = document.querySelector(".popup");
  const popupContent = document.querySelector(".popup-content");
  const popupBtn = document.querySelectorAll(".popup-btn");
  const popupClose = document.querySelector(".popup-close");

  let idIntterval;
  let count = -50;

  popupContent.style.top = `${count}%`;

  const popupShow = () => {
    count += 5;
    idIntterval = requestAnimationFrame(popupShow);
    if (count <= 10) {
      popupContent.style.top = `${count}%`;
    } else {
      cancelAnimationFrame(idIntterval);
    }
  };
  const popupHide = () => {
    count -= 5;
    idIntterval = requestAnimationFrame(popupHide);
    if (count >= -50) {
      popupContent.style.top = `${count}%`;
    } else {
      cancelAnimationFrame(idIntterval);
      popup.style.display = "none";
    }
  };

  popupBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      popup.style.display = "block";
      if (document.documentElement.clientHeight > 768) {
        popupShow();
      } else {
        popupContent.style.top = `10%`;
      }
    });
  });

  popupClose.addEventListener("click", () => {
    if (document.documentElement.clientHeight > 768) {
      popupHide();
    } else {
      popup.style.display = "none";
    }
  });
};

export default popup;
