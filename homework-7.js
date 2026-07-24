function weatherForecast( city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}

weatherForecast("Москва", 23)
weatherForecast("Казань", 26)
weatherForecast("Уфа", 31)


const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(300000000);
checkSpeed(100000000);
checkSpeed(299792458);


const productName = 'Мороженное Золотой Стандарт';
const productPrice = 70;

function byProduct(budget) {
  if (budget > productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    let difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

byProduct(100);
byProduct(60);


function introduce() {
    console.log("Приветствую вас!");
    console.log("Как ваши дела?");
    console.log("Желаю хорошего дня!");
}

introduce();


let greeting = "Приветствую Вас!";
let userAge = 38;
let city = "Уфа";

console.log(greeting);
console.log("Сколько вам лет? " + userAge);
console.log("Откуда вы? " + city);