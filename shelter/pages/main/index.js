//hamburger-menu
const hamburger = document.querySelector(".hamburger");
const hamburgerWrap = document.querySelector(".hamburger-wrap");
const navigation = document.querySelector(".navigation");
const html = document.querySelector("html");
const links = document.querySelectorAll(".navigation__list-item");

//slider
const sliderItems = document.querySelectorAll(".cards-items__item-element");
const parentCards = document.querySelector(".cards-items");
const btnLeft = document.querySelector(".btn-aside__left");
const btnRight = document.querySelector(".btn-aside__right");

//popup
const popupImg = document.querySelector(".popup__img");
const popupTitle = document.querySelector(".section-titles_popup");
const popupPet = document.querySelector(".popup__pet");
const popupAboutPet = document.querySelector(".popup__about-pet");
const popupPetAge = document.querySelector(".popup__pet-age");
const popupClose = document.querySelector(".popup__close");
const cardPet = document.querySelectorAll(".cards-items__item-element");
const modalWindow = document.querySelector(".popup");
const popupImgStyle = document.querySelector(".popup__img-pet");
const popupContent = document.querySelector(".popup__content");

//-----------HAMBURGER-----------------

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

//---------SLIDER---------------
const currentSlide = Array.from(sliderItems).slice(0, 3);
let cards = [];
// function slideImg() {
//   for (let i = 0; i < currentSlide.length; i++) {
//     if (parentCards.children[i].classList.contains("katrine")) {
//       cards.push(
//         (currentSlide.sort(function () {
//           return Math.random() - 0.5;
//         }).length = 5)
//       );
//     }
//   }
//   return cards;
// }

// function slideImg() {
//   for (let i = 0; i < currentSlide.length; i++) {
//     cards.push(
//       (currentSlide.sort(function () {
//         return Math.random() - 0.5;
//       }).length = 3)
//     );
//   }
//   return cards;
// }

// btnLeft.addEventListener("click", slideImg);
// btnRight.addEventListener("click", slideImg);

//---------POPUP---------------

// const popupImg = document.querySelector(".popup__img");
// const popupTitle = document.querySelector(".section-titles_popup");
// const popupPet = document.querySelector(".popup__pet");
// const popupAboutPet = document.querySelector(".popup__about-pet");
// const popupPetAge = document.querySelector(".popup__pet-age");
// const popupClose = document.querySelector(".popup__close");
// const cardPet = document.querySelectorAll(".cards-items__item-element");
// const modalWindow = document.querySelector(".popup");
// const popupImgStyle = document.querySelector(".popup__img-pet");
// const popupContent = document.querySelector(".popup__content");
const popupWrap = document.querySelector(".popup-wrap");

//open popup
cardPet.forEach((element) => {
  element.addEventListener("click", (event) => {
    // event.stopPropagation();
    if (element.classList.contains("sophia")) {
      popupImg.innerHTML =
        "<img src='../../assets/images/sophia.png' width = '100%'>";
      popupTitle.innerHTML = "Sophia";
      popupPet.innerHTML = "Dog - Shih tzu";
      popupAboutPet.innerHTML =
        "Sophia here and I'm looking for my forever home to live out the best years of my life.I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.";
    } else if (element.classList.contains("woody")) {
      popupImg.innerHTML =
        "<img src='../../assets/images/woody.png' width = '100%'>";
      popupTitle.innerHTML = "Woody";
      popupPet.innerHTML = "Dog - Golden Retriever";
      popupAboutPet.innerHTML =
        "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.";
    } else if (element.classList.contains("scarlett")) {
      popupImg.innerHTML =
        "<img src='../../assets/images/scarlett.png' width = '100%'>";
      popupTitle.innerHTML = "Scarlett";
      popupPet.innerHTML = "Dog - Jack Russell Terrier";
      popupAboutPet.innerHTML =
        "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.";
    } else if (element.classList.contains("katrine")) {
      popupImg.innerHTML =
        "<img src='../../assets/images/pets-katrine.png' width = '100%'>";
      popupTitle.innerHTML = "Katrine";
      popupPet.innerHTML = "Cat - British Shorthair";
      popupAboutPet.innerHTML =
        "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.";
    } else if (element.classList.contains("timmy")) {
      popupImg.innerHTML =
        "<img src='../../assets/images/timmy.png' width = '100%'>";
      popupTitle.innerHTML = "Timmy";
      popupPet.innerHTML = "Cat - British Shorthair";
      popupAboutPet.innerHTML =
        "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.";
    } else if (element.classList.contains("freddie")) {
      popupImg.innerHTML =
        "<img src='../../assets/images/freddie.png' width = '100%'>";
      popupTitle.innerHTML = "Freddie";
      popupPet.innerHTML = "Cat - British Shorthair";
      popupAboutPet.innerHTML =
        "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.";
    } else if (element.classList.contains("charly")) {
      popupImg.innerHTML =
        "<img src='../../assets/images/charly.png' width = '100%'>";
      popupTitle.innerHTML = "Charly";
      popupPet.innerHTML = "Dog - Jack Russell Terrier";
      popupAboutPet.innerHTML =
        "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.";
    } else if (element.classList.contains("jennifer")) {
      popupImg.innerHTML =
        "<img src='../../assets/images/jennifer.png' width = '100%'>";
      popupTitle.innerHTML = "Jennifer";
      popupPet.innerHTML = "Dog - Labrador";
      popupAboutPet.innerHTML =
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.";
    }
    popupImgStyle.classList.add("img-pet__active");
    popupWrap.classList.toggle("popup-wrap__active");
    html.classList.toggle("body__active");
    modalWindow.classList.toggle("popup__active");
  });
});

//close popup with body click

popupClose.addEventListener("click", function (event) {
  html.classList.remove("body__active");
  popupWrap.classList.remove("popup-wrap__active");
  modalWindow.classList.remove("popup__active");
});

modalWindow.addEventListener("click", function (event) {
  html.classList.remove("body__active");
  popupWrap.classList.remove("popup-wrap__active");
  modalWindow.classList.remove("popup__active");
});

// document.addEventListener("click", (event) => {
//   if (event.target !== popupClose && event.target !== popupContent) {
//     html.classList.remove("body__active");
//     popupWrap.classList.remove("popup-wrap__active");
//     modalWindow.classList.remove("popup__active");
//   }
// });

// popupWrap.addEventListener("click", function (event) {
//   console.log(1);
//   html.classList.remove("body__active");
//   popupWrap.classList.remove("popup-wrap__active");
//   modalWindow.classList.remove("popup__active");
// });

// popupContent.addEventListener("click", function (e) {

// });

// document.addEventListener("click", (event) => {
//   if (event.target !== cardPet) {
//     html.classList.remove("body__active");
//     modalWindow.classList.remove("popup__active");
//   }
// });
