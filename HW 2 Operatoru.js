// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let value = 1;
// value > 0 ? console.log(true) : console.log(false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

// let value = "test";

// if (value === "test") {
//   console.log(true);
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let value = 13;

// if (value > 10) {
//   console.log(value - 5);
// } else if (value <= 10) {
//   console.log(value + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt("Введіть номер місяця");

// if (month == 1) {
//   console.log("Січень");
// } else if (month == 2) {
//   console.log("Лютий");
// } else if (month == 3) {
//   console.log("Березень");
// } else if (month == 4) {
//   console.log("Квітень");
// } else if (month == 5) {
//   console.log("Травень");
// } else if (month == 6) {
//   console.log("Червень");
// } else if (month == 7) {
//   console.log("Липень");
// } else if (month == 8) {
//   console.log("Серпень");
// } else if (month == 9) {
//   console.log("Вересень");
// } else if (month == 10) {
//   console.log("Жовтень");
// } else if (month == 11) {
//   console.log("Листопад");
// } else if (month == 12) {
//   console.log("Грудень");
// } else {
//   console.log("Введіть іншу цифру");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const num = prompt("Введіть тризначне число");

// // let num;
// let arr = String(num).split("");
// // console.log(arr);
// let sum = 0;
// for (let digit of arr) {
//   sum += Number(digit);
// }

// alert(`Сума числа ${num} дорівнює ${sum}`);
