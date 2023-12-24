const scroll = () => {
  const menuItems = document.querySelectorAll("ul>li>a");
  const nextSlide = document.getElementById("next-slide");

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      const elem = document.getElementById(menuItem.href.slice(23));
      elem.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  nextSlide.addEventListener("click", (e) => {
    e.preventDefault();
    const elem = document.getElementById(e.target.parentElement.href.slice(23));
    elem.scrollIntoView({
      behavior: "smooth",
    });
  });
};

export default scroll;
