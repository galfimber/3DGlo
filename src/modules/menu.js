"use strict";

const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeMenu = document.querySelector(".close-btn");
  const menuItems = document.querySelector("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);
  closeMenu.addEventListener("click", handleMenu);
  Array.from(menuItems.children).forEach((menuItem) => {
    menuItem.addEventListener("click", handleMenu);
  });
};

export default menu;
