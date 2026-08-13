//задание:3

import { productCards } from "./product-card.js";
console.log(productCards)

const productList = document.getElementById("product-list");
console.log(productList);

const productCardTemplate = document.getElementById("product-card-template");
console.log(productCardTemplate);

productCards.forEach(card => {
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

//задание:4

const cardNamesAndDescrip = productCards.reduce((acc, card) => {
  acc[card.title] = card.description;
  return acc;
}, {});
console.log(cardNamesAndDescrip);

//задание:5