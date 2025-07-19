/* Open and close navigation */

const menu = document.querySelector("header nav");
const openMenu = document.querySelector("#open-menu");

var menuOpened = false;

openMenu.addEventListener("click", () => {
  if (menuOpened) {
    menuOpened = false;
    menu.classList.remove("active");
    openMenu.src = "assets/icons/menu.svg";
  } else {
    menuOpened = true;
    menu.classList.add("active");
    openMenu.src = "assets/icons/close.svg";
  }
});

/* Hides navigation transition on resize */

const navigationList = document.querySelector("header");

var resizeTimer;
window.onresize = () => {
  navigationList.classList.add("no-transition");

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(
    () => navigationList.classList.remove("no-transition"),
    100
  );
};

/* Expand navigation on desktop */

const header = document.querySelector("header");
const expandNav = document.getElementById("expand-nav");
expandNav.addEventListener("click", () => {
  header.classList.toggle("expanded");
});
