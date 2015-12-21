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

/*Add pictures function to span:*/
var span = document.getElementsByTagName('span');
for (var i = 0; i < span.length; i++) {
    span[i] = addPictures(span[i]);
}

function addPictures(element) {
    var img = document.createElement('img');
    img.src = 'Images/Hamburger.png';
    element.innerHTML = null;
    element.appendChild(img);
}



/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/
switch (true) {
    case (date.getDay() === 0):
        var sunday = document.getElementById('sunday');
        todaysOffer(sunday);
        break;
    case (date.getDay() === 1):
        var monday = document.getElementById('monday');
        todaysOffer(monday);
        break;
    case (date.getDay() === 2):
        var tuesday = document.getElementById('tuseday');
        todaysOffer(tuesday);
        break;
    case (date.getDay() === 3):
        var wednesday = document.getElementById('wednesday');
        todaysOffer(wednesday);
        break;
    case (date.getDay() === 4):
        var thursday = document.getElementById('thursday');
        todaysOffer(thursday);
        break;
    case (date.getDay() === 5):
        var friday = document.getElementById('friday');
        todaysOffer(friday);
        break;
    case (date.getDay() === 6):
        var saturday = document.getElementById('saturday');
        todaysOffer(saturday);
        break;
    default:
}

function todaysOffer(element) {
    element.style.backgroundColor = 'red';
    element.innerHTML = (element.innerHTML * 0.80);
}

/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/