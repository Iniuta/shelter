const hamburger = document.querySelector(".hamburger");
const hamburgerWrap = document.querySelector(".hamburger-wrap");
const navigation = document.querySelector(".navigation");
const html = document.querySelector("html");
const links = document.querySelectorAll(".navigation__list-item");
console.log(Array.from(links));

//HAMBURGER

//add|remove menu

if (hamburger) {
  hamburger.addEventListener("click", function (e) {
    html.classList.toggle("body__active");
    hamburger.classList.toggle("hamburger__active");
    hamburgerWrap.classList.toggle("hamburger-wrap__active");
    navigation.classList.toggle("navigation__active");
  });
}

//remove menu with click on links

links.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.classList.contains("navigation__list-item")) {
      html.classList.remove("body__active");
      hamburger.classList.remove("hamburger__active");
      hamburgerWrap.classList.remove("hamburger-wrap__active");
      navigation.classList.remove("navigation__active");
    }
  });
});

//remove menu with click on document

if (hamburgerWrap) {
  hamburgerWrap.addEventListener("click", function (e) {
    html.classList.remove("body__active");
    hamburger.classList.remove("hamburger__active");
    hamburgerWrap.classList.remove("hamburger-wrap__active");
    navigation.classList.remove("navigation__active");
  });
}
