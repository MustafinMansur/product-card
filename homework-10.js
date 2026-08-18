//задание:3

import { productCards } from "./product-card.js";
console.log(productCards)

//задание:4

const cardNamesAndDescrip = productCards.reduce((acc, card) => {
  acc[card.title] = card.description;
  return acc;
}, {});
console.log(cardNamesAndDescrip);

//задание:5

// Функция 1
const getCardsCount = () => {
  const answer = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(answer);

  if (isNaN(count) || count > 5 || count < 1 || !Number.isInteger(count)) {
    alert("Введено некорректное значение");
    return NaN;
  }

  return count;
}

// Функция 2

const renderCards = (cardsArray, count) => {
  const productList = document.getElementById("product-list");
  const productCardTemplate = document.getElementById("product-card-template");

  const cardsToShow = cardsArray.slice(0, count);

  cardsToShow.forEach(card => {
     const cardClone = productCardTemplate.content.cloneNode(true)
  const img = cardClone.querySelector("img");
  img.setAttribute("src", card.img);
  img.setAttribute("alt", card.title);
  cardClone.querySelector(".product-card__skin-type").textContent = card.skinType
  cardClone.querySelector(".product-card__title").textContent = card.title
  cardClone.querySelector(".product-card__text").textContent = card.description
  cardClone.querySelector(".product-card__price-value").textContent = card.price
  const compositionList = cardClone.querySelector(".product-card__composition-list");
  card.composition.forEach(ingredient => {
    const li = document.createElement("li");
    li.className = "product-card__composition-item";
    li.textContent = ingredient;
    compositionList.appendChild(li);
  });
  productList.appendChild(cardClone);
});
}

const count = getCardsCount();
console.log("Введённое количество:", count);
renderCards(productCards, count);