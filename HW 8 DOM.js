// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа та прочитати його значення.
//
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

// відповідь на завдання

// 1-ий варіант

// let elem = document.querySelector("[data-widget-name]");

// console.log(elem.getAttribute("data-widget-name"));

// alert(elem.getAttribute("data-widget-name"));

// 2-ий варіант

// const elem = document.querySelector("div");
// console.log(elem.getAttribute("data-widget-name"));

// Це для себе

// console.log(elem);
// console.log(elem.textContent);
