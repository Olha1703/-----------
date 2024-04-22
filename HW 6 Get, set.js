// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
  constructor(name, numTel) {
    this.name = name;
    this.numTel = numTel;
  }

  set abon(NewAbon) {
    this.name = name;
    this.numTel = tel;
  }

  get abon() {
    return this.name + " " + this.numTel;
  }
}

const abon1 = new Abonent("Anna", +380504382307);
console.log(abon1);

// abon1.name = "Ivan";
// console.log(abon1.name);

// abon1.numTel = +380501234567;
// console.log(abon1.numTel);

const abon2 = new Abonent("Marina", +380506918902);
console.log(abon2);

const abon3 = new Abonent("Elena", +380664589340);
console.log(abon3);
