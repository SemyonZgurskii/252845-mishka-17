var menuToggle = document.querySelector(".header__menu-toggle");
var mainNav = document.querySelector(".header__navigation");
var sideMenu = document.querySelector(".header__side-menu");

mainNav.classList.remove(".header-navigation--nojs");
sideMenu.classList.remove(".header__side-menu--nojs");

menuToggle.addEventListener('click', function() {
  if (menuToggle.classList.contains("header__menu-toggle--closed")) {
    menuToggle.classList.remove("header__menu-toggle--closed");
    menuToggle.classList.add("header__menu-toggle--opened");
  } else {
    menuToggle.classList.remove("header__menu-toggle--opened");
    menuToggle.classList.add("header__menu-toggle--closed");
  }
});
