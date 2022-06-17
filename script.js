const productName = prompt('Название товара','');
const productQuantity = prompt('Количество товара','');
const productCategory = prompt('Категория товара','');
const productPrice = prompt('Цена товара','');
console.log(typeof productName);
console.log(typeof +productQuantity);
console.log(typeof productCategory);
console.log(typeof +productPrice);
console.log(`На складе ${productQuantity} единиц товара ${productName} на сумму ${productPrice*productQuantity} деревянных`);