const hamburger = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".nav__close");
const navMenu = document.querySelector(".nav");

const openClose = () => {
  navMenu.classList.toggle("isactive");
};

hamburger.addEventListener("click", openClose);
closeMenu.addEventListener("click", openClose);
