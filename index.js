let button = document.getElementById("submit");

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

button.addEventListener("click", function () {
  let car_brand = prompt("Specify brand of the car");
  let car_year = prompt("Specify year of the car");
  if (!car_brand || !car_year) {
    alert("Please, specify brand and year of the car!");
    return;
  }
  if (isNaN(car_year)) {
    alert("The year is not number!");
    return;
  }
  const myCar = new Car(car_brand, car_year);
  document.getElementById("demo").innerHTML =
    "Your car brand is " +
    car_brand +
    " and your car is " +
    myCar.age() +
    " years old.";
});
