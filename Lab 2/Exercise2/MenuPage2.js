/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
*/

var burgers = document.getElementById('burgersPlace');
var subs = document.getElementById('subsPlace');
var pizza = document.getElementById('pizzaPlace');
var drinks = document.getElementById('drinksPlace');

var h1 = document.createElement('h1');
h1.textContent = "Menu";
h1.setAttribute('id', 'ad');

var body = document.getElementsByTagName('body');
var div = document.getElementsByTagName('div');
body[0].insertBefore(h1, burgers);

var productTypes = ['Burgers', 'Subs', 'Pizza', 'Drinks'];

for (var i = 0; i < productTypes.length; i++) {
    createProductHeadding(productTypes[i]);
}

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

function createProductHeadding(productType) {
    var h2 = document.createElement('h2');
    h2.textContent = 'Delicious ' + productType;
    if (productType === 'Burgers')
        div[0].appendChild(h2);
    if (productType === 'Subs')
        div[1].appendChild(h2);
    if (productType === 'Pizza')
        div[2].appendChild(h2);
    if (productType === 'Drinks')
        div[3].appendChild(h2);
}

function addProductToElement(element) {
    var article = document.createElement('article');
    var fieldset = document.createElement('fieldset');
    var legend = document.createElement('legend');
    var h3 = document.createElement('h3');
    var span = document.createElement('span');
    var image = document.createElement('img');
    var div = document.createElement('div');

    setAttributeOnProductElement(element, article, fieldset, legend, h3, span, image, div);
}

function setAttributeOnProductElement(element, article, fieldset, legend, h3, span, image, div) {
    article.style.display = 'inline-block';
    article.style.backgroundColor = 'transparent';
    fieldset.style.width = '230px';
    h3.innerHTML = element.name;
    div.innerHTML = element.price;
    div.setAttribute('class', 'price ' + element.dayOfTheWeek);
    switch (true) {
        case element.name.endsWith('burger'):
            legend.innerHTML = element.dayOfTheWeek + ' Burger';
            image.src = 'Images/Hamburger.png';
            createHamburgerElement(article, fieldset, legend, h3, span, image, div);
            break;
        case element.name.endsWith('drink'):
            legend.innerHTML = element.dayOfTheWeek + ' Drink';
            image.src = 'Images/Drink.png';
            createDrinkElement(article, fieldset, legend, h3, span, image, div);
            break;
        case element.name.endsWith('pizza'):
            legend.innerHTML = element.dayOfTheWeek + ' Pizza';
            image.src = 'Images/Pizza.png';
            createPizzaElement(article, fieldset, legend, h3, span, image, div);
            break;
        default:
            legend.innerHTML = element.dayOfTheWeek + ' Sub';
            image.src = 'Images/Subs.png';
            createSubElement(article, fieldset, legend, h3, span, image, div);
            break;
    }
}

function createHamburgerElement(article, fieldset, legend, h3, span, image, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    span.appendChild(image);
    article.appendChild(fieldset);
    burgers.appendChild(article);
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
function createDrinkElement(article, fieldset, legend, h3, span, image, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    span.appendChild(image);
    article.appendChild(fieldset);
    drinks.appendChild(article);
}
//4. add 7 pizzas to the page using Product.
function createPizzaElement(article, fieldset, legend, h3, span, image, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    span.appendChild(image);
    article.appendChild(fieldset);
    pizza.appendChild(article);
}
//5. add 7 subs to the page using Product.
function createSubElement(article, fieldset, legend, h3, span, image, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    span.appendChild(image);
    article.appendChild(fieldset);
    subs.appendChild(article);
}
//6. GO to file FixIt.html

//DRINKS
//Subs

//happy hour logic:
var date = new Date();
var price = document.getElementsByClassName('price');

function happyHour() {
    if (date.getHours() === 21) {
        for (var i = 0; i < price.length; i++) {
            price[i].innerHTML = GetPrice(price[i].innerHTML);
        }
    }
}
//Method calls:
happyHour();

//Adjust price function: (add .toFixed(2) for 2 decimals)
function GetPrice(price) {
    return (price * 0.75).toFixed(2);
}

//todays offer function.
switch (true) {
    case (date.getDay() === 0):
        var sunday = document.getElementsByClassName('Sunday');
        todaysOffer(sunday);
        break;
    case (date.getDay() === 1):
        var monday = document.getElementsByClassName('Monday');
        todaysOffer(monday);
        break;
    case (date.getDay() === 2):
        var tuesday = document.getElementsByClassName('Tuseday');
        todaysOffer(tuesday);
        break;
    case (date.getDay() === 3):
        var wednesday = document.getElementsByClassName('Wednesday');
        todaysOffer(wednesday);
        break;
    case (date.getDay() === 4):
        var thursday = document.getElementsByClassName('Thursday');
        todaysOffer(thursday);
        break;
    case (date.getDay() === 5):
        var friday = document.getElementsByClassName('Friday');
        todaysOffer(friday);
        break;
    case (date.getDay() === 6):
        var saturday = document.getElementsByClassName('Saturday');
        todaysOffer(saturday);
        break;
    default:
}

function todaysOffer(element) {
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = 'red';
        element[i].innerHTML = (element[i].innerHTML * 0.80);
    }
}
