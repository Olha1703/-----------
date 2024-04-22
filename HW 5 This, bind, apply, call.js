// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const infoStudent = function (name, specialty, srbal, misclasses) {
//   console.log(
//     `Студент ${this.name}, спеціальність ${this.specialty}, має середній бал ${this.srbal} і ${this.misclasses} пропущенних занять`
//   );
// };

// infoStudent();

// const student1 = {
//   name: "Olga",
//   specialty: "Economica",
//   srbal: 5,
//   misclasses: 0,
// };

// const student2 = {
//   name: "Marina",
//   specialty: "Ecology",
//   srbal: 3,
//   misclasses: 20,
// };

// const student3 = {
//   name: "Dan",
//   specialty: "History",
//   srbal: 3.5,
//   misclasses: 9,
// };

// infoStudent.bind(student1)();
// infoStudent.call(student2);
// infoStudent.apply(student3);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const info = {
//   showInfo() {
//     console.log(this.items);
//   },
// };

// const html = {
//   items: [
//     "HTML - це спеціальна мова розмітки, яка застосовується при створенні сайтів в інтернеті.",
//   ],
// };
// const css = {
//   items: [
//     "CSS - це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду. ",
//   ],
// };

// const buttonh = document.querySelector("#html");
// buttonh.addEventListener("click", info.showInfo.bind(html));

// const buttonc = document.querySelector("#css");
// buttonc.addEventListener("click", info.showInfo.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(product, price) {
//   return function (quantity) {
//     return `Загальна вартість ${product} складає ${price * quantity}`;
//   };
// }

// const prodprice = shop("Banana", 30);
// console.log(prodprice(5));
// console.log(prodprice(4));

// const prodprice = shop("Cherry", 58);
// console.log(prodprice(1));
// console.log(prodprice(3));

// const prodprice = shop("Orange", 58);
// console.log(prodprice(3));
// console.log(prodprice(4));
