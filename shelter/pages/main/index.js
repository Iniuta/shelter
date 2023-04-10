let cardsInfo = [
  { name: "sophia", src: "../../assets/images/sophia.png" },
  { name: "timmy", src: "../../assets/images/timmy.png" },
  { name: "charly", src: "../../assets/images/charly.png" },
  { name: "katrine", src: "../../assets/images/pets-katrine.png" },
  { name: "jennifer", src: "../../assets/images/jennifer.png" },
  { name: "woody", src: "../../assets/images/woody.png" },
  { name: "scarlett", src: "../../assets/images/scarlett.png" },
  { name: "freddie", src: "../../assets/images/freddie.png" },
];

let currentCards = [];
let leftCards = [];
let rightCards = [];
const innitialCards = cardsInfo;

//hamburger-menu
const hamburger = document.querySelector(".hamburger");
const hamburgerWrap = document.querySelector(".hamburger-wrap");
const navigation = document.querySelector(".navigation");
const html = document.querySelector("html");
const links = document.querySelectorAll(".navigation__list-item");

//slider
// const sliderItems = document.querySelectorAll(".cards-items__item-element");
// const parentCards = document.querySelector(".cards-items");
// const btnLeft = document.querySelector(".btn-aside__left");
// const btnRight = document.querySelector(".btn-aside__right");

//popup
const popupImg = document.querySelector(".popup__img");
const popupTitle = document.querySelector(".popup__title");
const popupPet = document.querySelector(".popup__pet");
const popupAboutPet = document.querySelector(".popup__about-pet");
const popupPetAge = document.querySelector(".popup__pet-age");
const popupClose = document.querySelector(".popup__close");
const cardPet = document.querySelectorAll(".cards-items__item-element");
const modalWindow = document.querySelector(".popup");
const popupImgStyle = document.querySelector(".popup__img-pet");
const popupContent = document.querySelector(".popup__content");

// carousel
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const carousel = document.querySelector(".carousel");
const setCardsLeft = document.querySelector(".left");
const setCardsRight = document.querySelector(".right");

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

//---------POPUP---------------

const popupWrap = document.querySelector(".popup-wrap");

//open popup

function addPopup(element) {
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
}

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

//---------SLIDER---------------

// const btnLeft = document.querySelector("#btn-left");
// const btnRight = document.querySelector("#btn-right");
// const carousel = document.querySelector("#carousel");
// const setCardsLeft = document.querySelector("#left");
// const setCardsRight = document.querySelector("#right");
const cards = document.querySelector(".cards-items__item-element");
const cardsImage = document.querySelector(".img");
const cardsName = document.querySelector(".cards-items__pets-name");
const cardsContainer = document.querySelector(".cards-items__cards-set");

let currentMarginLeft = 0;
let currentOffSetLeft = 0;
let currentSize = getCardsSizeBasedOnScreen();
const slideLeft = () => {
  btnLeft.removeEventListener("click", slideLeft);
  btnRight.removeEventListener("click", slideRight);
  // carousel.classList.add("slide-left");
  let firstVisibleElement = getVisibleElements()[0];
  carousel.style.transition = "0s";
  currentOffSetLeft -= getCardsOffsetBasedOnScreen();
  carousel.style.left = currentOffSetLeft + "px";
  if (leftCards.length === 0) {
    let newCards = [...generateCards(rightCards)];
    newCards.forEach((c) => {
      cardsContainer.insertBefore(generateCard(c), firstVisibleElement);
    });
    rightCards = [...currentCards].reverse();
    currentCards = [...newCards];
  } else {
    leftCards.forEach((c) => {
      cardsContainer.insertBefore(generateCard(c), firstVisibleElement);
    });
    rightCards = [...currentCards];
    currentCards = [...leftCards];
    leftCards = [];
  }
  currentMarginLeft += getCardsOffsetBasedOnScreen();
  setTimeout(() => {
    carousel.style.transition = "1s";
    carousel.style.marginLeft = currentMarginLeft + "px";
  }, 100);
  setTimeout(() => {
    btnLeft.addEventListener("click", slideLeft);
    btnRight.addEventListener("click", slideRight);
  }, 1000);
};

const slideRight = () => {
  btnLeft.removeEventListener("click", slideLeft);
  btnRight.removeEventListener("click", slideRight);
  if (rightCards.length === 0) {
    // let visibleElements = getVisibleElements();
    let newCards = [...generateCards(leftCards)];
    newCards.forEach((c) => {
      getVisibleElements()[getCardsSizeBasedOnScreen() - 1].after(
        generateCard(c)
      );
    });
    if (leftCards.length == 0) {
      leftCards = [...currentCards];
    } else {
      leftCards = [...currentCards].reverse();
    }

    currentCards = [...newCards];
  } else {
    rightCards.forEach((c) => {
      getVisibleElements()[getCardsSizeBasedOnScreen() - 1].after(
        generateCard(c)
      );
    });
    leftCards = [...currentCards];
    currentCards = [...rightCards];
    rightCards = [];
  }
  currentMarginLeft -= getCardsOffsetBasedOnScreen();
  carousel.style.marginLeft = currentMarginLeft + "px";
  setTimeout(() => {
    btnLeft.addEventListener("click", slideLeft);
    btnRight.addEventListener("click", slideRight);
  }, 1000);
};

btnLeft.addEventListener("click", slideLeft);
btnRight.addEventListener("click", slideRight);

function getVisibleElements() {
  const container = document.querySelector(".our-friends-section");
  const elements = document.querySelectorAll(".cards-items__item-element");

  const leftBoundary = container.getBoundingClientRect().left;
  const rightBoundary = container.getBoundingClientRect().right;

  const visibleElementsBetweenBoundaries = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const rect = element.getBoundingClientRect();

    if (
      rect.left >=
        (leftBoundary + window.innerWidth > 1500
          ? window.innerWidth / 10
          : 0) &&
      rect.right <= rightBoundary &&
      rect.top >= 0 &&
      rect.bottom <= window.innerHeight
    ) {
      // The element is between the boundaries and visible
      visibleElementsBetweenBoundaries.push(element);
    }
  }
  return visibleElementsBetweenBoundaries;
}

function generateCards(currentCards = []) {
  return generateRandomCards(getCardsSizeBasedOnScreen(), currentCards);
}

function generateCardsOnLoadAndResize() {
  let newCards = generateCards(currentCards);
  newCards.forEach((c) => {
    cardsContainer.appendChild(generateCard(c));
  });
  currentCards = newCards;
}

function generateCard(cardInfo) {
  const box = document.createElement("div");
  box.classList.add("cards-items__item-element");
  box.classList.add(cardInfo.name);
  box.innerHTML = `
                    <img src="${
                      cardInfo.src
                    }" class="cards-items__animals" alt="${cardInfo.name}">
                  <div class="cards-items__background">
                    <p class="cards-items__pets-name">${
                      cardInfo.name.charAt(0).toUpperCase() +
                      cardInfo.name.slice(1)
                    }</p>
                    <div class="cards-items__btn-padding">
                      <button class="main-button main-button_lern-more">
                        Learn more
                      </button>
                    </div>
                  </div>
                  `;
  addPopup(box);
  return box;
}

generateCardsOnLoadAndResize();

// let currentSize = window.screen.width;
window.addEventListener("resize", () => {
  if (currentSize == getCardsSizeBasedOnScreen()) return;
  currentSize = getCardsSizeBasedOnScreen();
  currentMarginLeft = 0;
  currentOffSetLeft = 0;
  carousel.style.marginLeft = "0px";
  carousel.style.left = "0px";
  cardsContainer.innerHTML = "";
  carousel.style.transition = "0s";
  leftCards = [];
  rightCards = [];
  cardsInfo = innitialCards;
  generateCardsOnLoadAndResize();
  carousel.style.transition = "1s";
});

function generateRandomCards(cardsNumber, usedElement) {
  const newArray = [];
  cardsInfo = cardsInfo.concat(usedElement);
  while (newArray.length < cardsNumber) {
    const randomIndex = Math.floor(Math.random() * cardsInfo.length);
    const randomElement = cardsInfo[randomIndex];

    if (
      !newArray.some(
        (element) => JSON.stringify(element) === JSON.stringify(randomElement)
      )
    ) {
      newArray.push(randomElement);
    }
  }

  // Remove the 3 elements from the original array
  cardsInfo = cardsInfo.filter(
    (element) =>
      !newArray.some(
        (newElement) => JSON.stringify(newElement) === JSON.stringify(element)
      )
  );
  return newArray;
}

function getCardsSizeBasedOnScreen() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    return 3;
  } else if (screenWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

function getCardsOffsetBasedOnScreen() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    return 1080;
  } else if (screenWidth >= 768) {
    return 610;
  } else {
    return 310;
  }
}

// carousel.addEventListener("animationend", (animation) => {
//   if (animation.animationName === "to-left") {
//     cardsImage.innerHTML = "";
//     cardsName.innerHTML = "";
//     cardsImage.innerHTML = "<img src='../../assets/images/jennifer.png'>";
//     cardsName.innerHTML = "Jennifer";
//     carousel.classList.remove("slide-left");
//   } else if (animation.animationName === "to-right") {
//     carousel.classList.remove("slide-right");
//   }

//   btnLeft.addEventListener("click", slideLeft);
//   btnRight.addEventListener("click", slideRight);
// });
