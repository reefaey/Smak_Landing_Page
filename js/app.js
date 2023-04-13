const bars = document.querySelector(".links i");
const navBar = document.querySelector(".links ul");
const downButton = document.querySelector("header .button");
const upBtn = document.querySelector("footer .button-spc");

bars.addEventListener("click", () => {
  navBar.classList.toggle("nav-active");
});

window.addEventListener("click", (e) => {
  if (!e.path.includes(navBar) && !e.path.includes(bars)) {
    navBar.classList.remove("nav-active");
  }
});

downButton.addEventListener("click", () => {
  scroll(0, 1000);
});

upBtn.addEventListener("click", () => {
  scrollTo(0, 0);
});
