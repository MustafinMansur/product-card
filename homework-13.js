class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price} ₽, Температура: ${this.#temperature} °C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #prepare() {
    console.log(`Идет приготовление заказа: ${this.name}. Пожалуйста, ожидайте Ваш заказ.`);
  }

  serve() {
    this.#prepare();
    this.setTemperature(this.getTemperature() - 5);
    console.log(`Ваш заказ: ${this.name} готов! Приятного аппетита, Приезжайте еще!`);
  }

}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beans, milk) {
    super(name, size, price, temperature);
    this.beans = beans;
    this.milk = milk;
  }

  getInfo() {
    return `Кофе: ${this.name}, Размер: ${this.size}, Температура: ${this.getTemperature()} °C, Цена: ${this.price} ₽, Зёрна: ${this.beans}, Молоко: ${this.milk}`;
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, type, addition) {
    super(name, size, price, temperature);
    this.type = type;
    this.addition = addition;
  }

  getInfo() {
    return `Чай: ${this.name}, Размер: ${this.size}, Температура: ${this.getTemperature()} °C, Цена: ${this.price} ₽, Сорт: ${this.type}, Добавка: ${this.addition}`;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }

  getInfo() {
    return `Лимонад: ${this.name}, Размер: ${this.size}, Температура: ${this.getTemperature()} °C, Цена: ${this.price} ₽, Вкус: ${this.flavor}`;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе: "${this.name}" приветствует Вас, мы находимся по адресу: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Ваш заказ: ${drink.name} принят! Благодарим за покупку!`);
    drink.serve();
    console.log(`Заказ: ${drink.name} выдан клиенту.`);
  }
}

const cafe = new Cafe("Придорожное", "125 км");

const americano = new Coffee("Американо", "Средний", 250, 80, "Арабика", "Без молока");

const blackTea = new Tea("Черный чай", "Маленький", 150, 90, "Ассам", "Без сахара");

const lemonade = new Lemonade("Лимонад", "Большой", 150, 10, "Лимон");


console.log(cafe.getInfo());

console.log(americano.getInfo());

console.log(blackTea.getInfo());

console.log(lemonade.getInfo());

cafe.orderDrink(americano);

cafe.orderDrink(blackTea);

cafe.orderDrink(lemonade);
