/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
*/
var hamburgerDiv = document.getElementById('burgersPlace');

function Product(name, size, dayOfTheWeek, price) {
    this.name = name;
    this.size = size;
    this.dayOfTheWeek = dayOfTheWeek;
    this.price = price;
}

var listOfProducts = [
    new Product("Pepper burger", 90, "Monday", 19.90),
    new Product("Jum burger", 120, "Tuesday", 25.90),
    new Product("Cheese burger", 90, "Wednesday", 19.90),
    new Product("Simple burger", 90, "Thursday ", 19.90),
    new Product("Maximum burger", 120, "Friday", 25.90),
    new Product("Sallad burger", 120, "Saturday ", 25.90),
    new Product("Onion burger", 120, "Sunday", 25.90)
];
for (var i = 0; i < listOfProducts.length; i++) {
    addProductToElement(listOfProducts[i]);
}

function addProductToElement(element) {
    var article = document.createElement('article');
    var fieldset = document.createElement('fieldset');
    var legend = document.createElement('legend');
    var h3 = document.createElement('h3');
    var span = document.createElement('span');
    var div = document.createElement('div');
    legend.innerHTML = element.dayOfTheWeek;
    h3.innerHTML = element.name;
    span.innerHTML = "No image loaded";
    div.innerHTML = element.price;
    div.setAttribute('class', 'price');
    div.setAttribute('id', element.dayOfTheWeek);
    createElement(article, fieldset, legend, h3, span, div);
}

function createElement(article, fieldset, legend, h3, span, div) {
    fieldset.appendChild(legend);
    fieldset.appendChild(h3);
    fieldset.appendChild(span);
    fieldset.appendChild(div);
    article.appendChild(fieldset);
    hamburgerDiv.appendChild(article);
}

/*
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
*/
//3. add 7 drinks to the page using Product.
//4. add 7 pizzas to the page using Product.
//5. add 7 subs to the page using Product.
//6. GO to file FixIt.html

//DRINKS
//Subs