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

const initialCards = cardsInfo;
const container = document.querySelector(".cards-items");
const buttonCounter = document.querySelector("#button-counter");
const nextPage = document.querySelector("#next-page");
const lastPage = document.querySelector("#last-page");
const prevPage = document.querySelector("#prev-page");
const firstPage = document.querySelector("#first-page");

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
const popupTitle = document.querySelector(".popup__title");
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

function getPageBaseOnScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 993) {
    return 0;
  } else if (screenWidth >= 768) {
    return 1;
  } else {
    return 2;
  }
}

// Pagination

let paginationCards = [];

let pages6 = [];
let pages8 = [];
let pages3 = [];

generatePaginationCards();

function generatePaginationCards() {
  const pageSize6 = 6;
  const pageSize8 = 8;
  const pageSize3 = 3;

  const repeatCount = 6;

  let objects = [];
  for (let i = 0; i < repeatCount; i++) {
    objects = objects.concat(
      initialCards.map((card, index) => ({
        id: i * initialCards.length + index + 1,
        card,
      }))
    );
  }

  pages6 = [];
  pages8 = [];
  pages16 = [];

  const pageSizeObjects6 = objects.slice(
    0,
    pageSize6 * Math.ceil(objects.length / pageSize6)
  );
  const pageSizeObjects8 = objects.slice(
    0,
    pageSize8 * Math.ceil(objects.length / pageSize8)
  );
  const pageSizeObjects3 = objects.slice(
    0,
    pageSize3 * Math.ceil(objects.length / pageSize3)
  );

  const pageSizePages6 = paginate(pageSizeObjects6, pageSize6);
  const pageSizePages8 = paginate(pageSizeObjects8, pageSize8);
  const pageSizePages16 = paginate(pageSizeObjects3, pageSize3);

  for (let i = 0; i < pageSizePages6.length; i++) {
    const page = pageSizePages6[i];
    shuffle(page);
    pages6.push(page);
  }
  for (let i = 0; i < pageSizePages8.length; i++) {
    const page = pageSizePages8[i];
    shuffle(page);
    pages8.push(page);
  }
  for (let i = 0; i < pageSizePages16.length; i++) {
    const page = pageSizePages16[i];
    shuffle(page);
    pages3.push(page);
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function paginate(array, pageSize) {
    const pageCount = Math.ceil(array.length / pageSize);
    const pages = [];
    for (let i = 0; i < pageCount; i++) {
      const pageStart = i * pageSize;
      const pageEnd = pageStart + pageSize;
      const page = array.slice(pageStart, pageEnd);
      pages.push(page);
    }
    return pages;
  }
}

let pages = [pages8, pages6, pages3];

function initPage() {
  buttonCounter.innerHTML = "1";
  let page = pages[getPageBaseOnScreenSize()][buttonCounter.innerText - 1];
  // document.querySelectorAll(".cards-items__item-element").forEach((e, i) => {
  //   updateCard(e, page[i].card);
  // });
  page.forEach((c) => container.appendChild(generateCard(c.card)));
  prevPage.classList.add("main-button_disabled-left");
  firstPage.classList.add("main-button_disabled-left");
  nextPage.classList.remove("main-button_disabled-left");
  lastPage.classList.remove("main-button_disabled-left");
}

function updateCard(element, card) {
  element.classList.remove(element.classList[1]);
  element.classList.add(card.name);
  element.firstElementChild.src = card.src;
  element.firstElementChild.alt = card.name;
  element.firstElementChild.nextElementSibling.firstElementChild.innerText =
    card.name.charAt(0).toUpperCase() + card.name.slice(1);
  addPopup(element);
}

initPage();

let currentSize = getPageBaseOnScreenSize();

window.addEventListener("resize", () => {
  if (currentSize == getPageBaseOnScreenSize()) return;
  currentSize = getPageBaseOnScreenSize();
  container.innerHTML = "";
  initPage();
});

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

nextPage.addEventListener("click", () => getNextPage());
lastPage.addEventListener("click", () => getLastPage());
firstPage.addEventListener("click", () => getFirstPage());
prevPage.addEventListener("click", () => getPrevPage());

function getNextPage() {
  let currentPage = +buttonCounter.innerText;
  if (pages[getPageBaseOnScreenSize()].length <= currentPage) {
    return;
  }

  prevPage.classList.remove("main-button_disabled-left");
  firstPage.classList.remove("main-button_disabled-left");
  let page = pages[getPageBaseOnScreenSize()][currentPage];
  buttonCounter.innerHTML = currentPage + 1;
  document.querySelectorAll(".cards-items__item-element").forEach((e, i) => {
    updateCard(e, page[i].card);
  });

  if (pages[getPageBaseOnScreenSize()].length <= currentPage + 1) {
    nextPage.classList.add("main-button_disabled-left");
    lastPage.classList.add("main-button_disabled-left");
  }
}

function getLastPage() {
  nextPage.classList.add("main-button_disabled-left");
  lastPage.classList.add("main-button_disabled-left");
  prevPage.classList.remove("main-button_disabled-left");
  firstPage.classList.remove("main-button_disabled-left");
  let page =
    pages[getPageBaseOnScreenSize()][
      pages[getPageBaseOnScreenSize()].length - 1
    ];
  buttonCounter.innerHTML = pages[getPageBaseOnScreenSize()].length;
  document.querySelectorAll(".cards-items__item-element").forEach((e, i) => {
    updateCard(e, page[i].card);
  });
}

function getFirstPage() {
  prevPage.classList.add("main-button_disabled-left");
  firstPage.classList.add("main-button_disabled-left");
  nextPage.classList.remove("main-button_disabled-left");
  lastPage.classList.remove("main-button_disabled-left");
  let page = pages[getPageBaseOnScreenSize()][0];
  buttonCounter.innerHTML = 1;
  document.querySelectorAll(".cards-items__item-element").forEach((e, i) => {
    updateCard(e, page[i].card);
  });
}

function getPrevPage() {
  let currentPage = +buttonCounter.innerText;
  if (currentPage <= 1) {
    return;
  }

  lastPage.classList.remove("main-button_disabled-left");
  nextPage.classList.remove("main-button_disabled-left");
  let page = pages[getPageBaseOnScreenSize()][currentPage - 2];
  buttonCounter.innerHTML = currentPage - 1;
  document.querySelectorAll(".cards-items__item-element").forEach((e, i) => {
    updateCard(e, page[i].card);
  });

  if (currentPage <= 2) {
    prevPage.classList.add("main-button_disabled-left");
    firstPage.classList.add("main-button_disabled-left");
  }
}
