class Transport {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }

  sell() {
    console.log(`В продажу поступил транспорт: ${this.name}. Модель: ${this.model}. Цвет: ${this.color}`);
  }
}


class Truck extends Transport {
  constructor(name, model, color, loadCapacity) {
    super(name, model, color);
    this.loadCapacity = loadCapacity;
  }

  load() {
    console.log(`${this.name} может перевезти ${this.loadCapacity} т груза`);
  }

  sell() {
    super.sell();
    console.log(`Грузоподъёмность: ${this.loadCapacity} т`);
  }
}

const car = new Transport("Honda", "StepWgn", "black");
car.sell();

const truck = new Truck("Kamaz", "5490", "white", 20);
truck.sell();
truck.load();