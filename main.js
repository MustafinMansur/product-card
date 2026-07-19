// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const blueColorHash = '#0000FF'

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

 // Открыть Google

const openGoogleButton = document.querySelector('#open-google');
const googleURL = 'https://google.com';

openGoogleButton.addEventListener('click', openGoogle)
  window.open('google.com')

function openGoogle(){
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open(googleURL)
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}