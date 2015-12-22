/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
*/

var burgersPlace = document.getElementById('burgersPlace');
var subsPlace = document.getElementById('subsPlace');
var pizzaPlace = document.getElementById('pizzaPlace');
var drinksPlace = document.getElementById('drinksPlace');

var h1 = document.createElement('h1');
h1.textContent = "Menu";
h1.setAttribute('id', 'ad');
var body = document.getElementsByTagName('body');
body[0].insertBefore(h1, burgersPlace);

var listOfProducts = [
    new Product("Pepper burger", 90, "Monday", 19.90),
    new Product("Jum burger", 120, "Tuesday", 25.90),
    new Product("Cheese burger", 90, "Wednesday", 19.90),
    new Product("Simple burger", 90, "Thursday ", 19.90),
    new Product("Maximum burger", 120, "Friday", 25.90),
    new Product("Sallad burger", 120, "Saturday ", 25.90),
    new Product("Onion burger", 120, "Sunday", 25.90),

    new Product("Pepper drink", 90, "Monday", 29.90),
    new Product("Jum drink", 120, "Tuesday", 35.90),
    new Product("Cheese drink", 90, "Wednesday", 39.90),
    new Product("Simple drink", 90, "Thursday", 29.90),
    new Product("Maximum drink", 120, "Friday", 29.90),
    new Product("Sallad drink", 120, "Saturday", 25.90),
    new Product("Onion drink", 120, "Sunday", 29.90),

    new Product("Pepper pizza", 90, "Monday", 29.90),
    new Product("Jum pizza", 120, "Tuesday", 35.90),
    new Product("Cheese pizza", 90, "Wednesday", 39.90),
    new Product("Simple pizza", 90, "Thursday", 29.90),
    new Product("Maximum pizza", 120, "Friday", 29.90),
    new Product("Sallad pizza", 120, "Saturday", 25.90),
    new Product("Onion pizza", 120, "Sunday", 29.90),

    new Product("Pepper sub", 90, "Monday", 29.90),
    new Product("Jum sub", 120, "Tuesday", 35.90),
    new Product("Cheese sub", 90, "Wednesday", 39.90),
    new Product("Simple sub", 90, "Thursday", 29.90),
    new Product("Maximum sub", 120, "Friday", 29.90),
    new Product("Sallad sub", 120, "Saturday", 25.90),
    new Product("Onion sub", 120, "Sunday", 29.90)
];
for (var i = 0; i < listOfProducts.length; i++) {
    addProductToElement(listOfProducts[i]);
}

function addProductToElement(element) {
    var h2 = document.createElement('h2');
    var article = document.createElement('article');
    var fieldset = document.createElement('fieldset');
    var legend = document.createElement('legend');
    var h3 = document.createElement('h3');
    var span = document.createElement('span');
    var div = document.createElement('div');

    setAttributeOnProductElement(element, h1, h2, article, fieldset, legend, h3, span, div);
}

function setAttributeOnProductElement(element, h1, h2, article, fieldset, legend, h3, span, div) {
    h3.innerHTML = element.name;
    span.innerHTML = "No image loaded";
    div.innerHTML = element.price;
    div.setAttribute('class', 'price');
    switch (true) {
        case element.name.endsWith('burger'):
            legend.innerHTML = element.dayOfTheWeek + ' Burger';
            div.setAttribute('id', element.dayOfTheWeek + 'Burger');
            createHamburgerElement(article, fieldset, legend, h3, span, div);
            break;
        case element.name.endsWith('drink'):
            legend.innerHTML = element.dayOfTheWeek + ' Drink';
            div.setAttribute('id', element.dayOfTheWeek + 'Drink');
            createDrinkElement(article, fieldset, legend, h3, span, div);
            break;
        case element.name.endsWith('pizza'):
            legend.innerHTML = element.dayOfTheWeek + ' Pizza';
            div.setAttribute('id', element.dayOfTheWeek + 'Pizza');
            createPizzaElement(article, fieldset, legend, h3, span, div);
            break;
        default:
            legend.innerHTML = element.dayOfTheWeek + ' Sub';
            div.setAttribute('id', element.dayOfTheWeek + 'Sub');
            createSubElement(article, fieldset, legend, h3, span, div);
            break;
    }
}

function createHamburgerElement(article, fieldset, legend, h3, span, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    article.appendChild(fieldset);
    burgersPlace.appendChild(article);
}

/*
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
*/
function Product(name, size, dayOfTheWeek, price) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
}
//3. add 7 drinks to the page using Product.
function createDrinkElement(article, fieldset, legend, h3, span, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    article.appendChild(fieldset);
    drinksPlace.appendChild(article);
}
//4. add 7 pizzas to the page using Product.
function createPizzaElement(article, fieldset, legend, h3, span, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    article.appendChild(fieldset);
    pizzaPlace.appendChild(article);
}
//5. add 7 subs to the page using Product.
function createSubElement(article, fieldset, legend, h3, span, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    article.appendChild(fieldset);
    subsPlace.appendChild(article);
}
//6. GO to file FixIt.html

//DRINKS
//Subs