// задание: 3

const aboutMe = {
  firstName: "Mansur",
  lastName: "Mustafin",
  age: 38,
  country: "Russia",
  city: "Ufa",
  status: "married",
  email: "fulyan77@gmail.com",
  workplace: "Mosque",
  position: "teacher",
}

console.log(aboutMe);

// задание: 4

const aboutCar = {
  brand: "Honda",
  model: "StepWgn",
  year: 2017,
  color: "black",
  transmission: "CVT",

}

aboutCar.owner = aboutMe
console.log(aboutCar);


// задание: 5

function addMaxSpeed(aboutCar){
  if (!("maxSpeed" in aboutCar)) {
    aboutCar.maxSpeed = 180;
  }
}

addMaxSpeed(aboutCar);
console.log(aboutCar.maxSpeed);

addMaxSpeed(aboutCar);
console.log(aboutCar.maxSpeed);

// стрелочная

const addMaxSpeedArrow = (aboutCar) => {
  if (!("maxSpeed" in aboutCar)) {
    aboutCar.maxSpeed = 180;
  }
};

addMaxSpeedArrow(aboutCar);
console.log(aboutCar.maxSpeed);

addMaxSpeedArrow(aboutCar);
console.log(aboutCar.maxSpeed);


// задание:6

function showProperty(obj, propertyName) {
  console.log(obj[propertyName]);
}

showProperty(aboutCar, "brand");

// стрелочная

const showPropertyArrow = (obj, propertyName) => {
  console.log(obj[propertyName]);
};

showPropertyArrow(aboutCar, "brand");


// задание:7

const products = ["Хлеб", "Молоко", "Картошка", "Рис", "Курица"];


// задание:8

const cars = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "white",
    transmission: "automatic",
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2019,
    color: "gray",
    transmission: "automatic",
  },
  {
    brand: "Lada",
    model: "Vesta",
    year: 2022,
    color: "red",
    transmission: "manual",
  },
  {
    brand: "Nissan",
    model: "Qashqai",
    year: 2018,
    color: "blue",
    transmission: "CVT",
  },
  {
    brand: "Mercedes-Benz",
    model: "E-Class",
    year: 2021,
    color: "black",
    transmission: "automatic",
  },
  {
    brand: "Kia",
    model: "Sportage",
    year: 2023,
    color: "silver",
    transmission: "automatic",
  },
  {
    brand: "Hyundai",
    model: "Tucson",
    year: 2021,
    color: "green",
    transmission: "automatic",
  }
];

cars.push({ 
    brand: "Ford", 
    model: "Focus", 
    year: 2019, 
    color: "yellow", 
    transmission: "manual" 
  });

  console.log(cars);

  // задание:9

const japanCars = [
  {
    brand: "Mazda",
    model: "CX-5",
    year: 2021,
    color: "red",
    transmission: "automatic",
  },
  {
    brand: "Subaru",
    model: "Forester",
    year: 2020,
    color: "green",
    transmission: "CVT",
  },
  {
    brand: "Lexus",
    model: "RX",
    year: 2022,
    color: "black",
    transmission: "automatic",
  },
];

const allCars = [...cars, ...japanCars];

console.log(allCars);

// задание:10 функция добавляет новое свойство-"Это механическая коробка передач"

const markManualCars = allCars.map((car) => {
  car.isManual = car.transmission === "manual" ? true : false;
  return car;
});

console.log(markManualCar);