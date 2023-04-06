const hamburger = document.querySelector(".hamburger");
const hamburgerWrap = document.querySelector(".hamburger-wrap");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");

if (hamburger) {
  hamburger.addEventListener("click", function (e) {
    hamburger.classList.toggle("hamburger__active");
    hamburgerWrap.classList.toggle("hamburger-wrap__active");
    navigation.classList.toggle("navigation__active");
  });
}
