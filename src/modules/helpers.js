const animate = (func, popup, count) => {
  //console.log(count);

  const popupShow = () => {
    count += 0.1;
    const idIntterval = requestAnimationFrame(popupShow);
    if (count <= 1) {
      popup.style.opacity = count;
    } else {
      cancelAnimationFrame(idIntterval);
    }
  };

  const popupHide = () => {
    count -= 0.1;
    const idIntterval = requestAnimationFrame(popupHide);
    if (count >= 0) {
      popup.style.opacity = count;
    } else {
      cancelAnimationFrame(idIntterval);
      popup.style.opacity = 0;
      popup.style.display = "none";
    }
  };

  if (func === "popupShow") {
    popupShow();
  } else {
    popupHide();
  }
};

export { animate };
