
/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###
1. Link the script with FixIt.hmtl
2. Add som tags that doesn't change the visual part of the paragraph.  - kan strykas!!!

3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page
  */

function P(name, windowObject) {
    this.name = name;
    this.windowObject = windowObject;
}

var p;
var span;
var body = document.getElementsByTagName('body');

var listOfP = [
    new P("inner height: ", window.innerHeight),
    new P("inner widthr: ", window.innerWidth),
    new P("page X offset: ", window.pageXOffset),
    new P("page Y offset: ", window.pageYOffset),
    new P("screen X: ", window.screenX),
    new P("screen Y: ", window.screenY),
    new P("location: ", window.location),
    new P("document: ", window.document),
    new P("history: ", window.history),
    new P("history length: ", window.history.length),
    new P("screen: ", window.screen),
    new P("screen width: ", window.screen.width),
    new P("screen height: ", window.screen.height),
    new P("alert: ", 'click here'),
    new P("open: ", 'click here'),
    new P("print: ", 'click here'),

    new P("last Modified: ", 'click here'),
    new P("URL: ", 'click here'),
    new P("domain: ", 'click here'),

    new P("array: ", 'click here'),
    new P("isNaN: ", 'click here'),

    new P("Round numbers: ", 'click here'),
];

//4.Add a stylesheet that displays the changed words in fat font and in red.
for (var i = 0; i < listOfP.length; i++) {
    p = document.createElement('p');
    span = document.createElement('span');
    span.style.color = 'red';
    span.style.fontWeight = 'bold';

    if (listOfP[i].name === 'alert: ')
        p.setAttribute('id', 'alertThis');
    if (listOfP[i].name === 'open: ')
        p.setAttribute('id', 'openThis');
    if (listOfP[i].name === 'print: ')
        p.setAttribute('id', 'printThis');
    if (listOfP[i].name === 'last Modified: ')
        p.setAttribute('id', 'lastModified');
    if (listOfP[i].name === 'URL: ')
        p.setAttribute('id', 'url');
    if (listOfP[i].name === 'domain: ')
        p.setAttribute('id', 'domain');
    if (listOfP[i].name === 'array: ')
        p.setAttribute('id', 'array');
    if (listOfP[i].name === 'isNaN: ')
        p.setAttribute('id', 'isNaN');
    if (listOfP[i].name === 'Round numbers: ')
        p.setAttribute('id', 'roundNumbers');

    p.textContent = listOfP[i].name;
    span.textContent = listOfP[i].windowObject;
    body[0].appendChild(p);
    p.appendChild(span);
}

//5. PLay with the Methods 
var alertThis = document.getElementById('alertThis');
var openThis = document.getElementById('openThis');
var printThis = document.getElementById('printThis');

alertThis.addEventListener('click', function (e) {
    alert("Hello World");
    e.stopPropagation();
}, true);

openThis.addEventListener('click', function (e) {
    open("http://facebook.com");
    e.stopPropagation();
}, true);

printThis.addEventListener('click', function (e) {
    print(body);
    e.stopPropagation();
}, true);

/*### DOM page 126:###
6. Play with the DOM-properties*/
document.title = 'Menu';
var lastModified = document.getElementById('lastModified');
var url = document.getElementById('url');
var domain = document.getElementById('domain');

lastModified.addEventListener('click', function (e) {
    alert("lastModified: " + document.lastModified);
    e.stopPropagation();
});
url.addEventListener('click', function (e) {
    alert("URL: " + (document.url = 'Lab2'));
    e.stopPropagation();
});
domain.addEventListener('click', function (e) {
    alert("domain: " + document.domain);
    e.stopPropagation();
});

/*### String objects page 128, 129: ###
7. Save the the text from the makeMeAnArray-paragraph into an array.*/
var makeMeAnArray = "We have burgers, subs, pizza, and drinks";
var myArray = makeMeAnArray.split(' ');
var array = document.getElementById('array');
//8. Use all the string methods and propertys allong with the array
array.addEventListener('click', function (e) {
    alert('length: ' + makeMeAnArray.length);
    alert('toUpperCase(): ' + makeMeAnArray.toUpperCase());
    alert('toLocaleLowerCase(): ' + makeMeAnArray.toLocaleLowerCase());
    alert('charAt(12): ' + makeMeAnArray.charAt(12));
    alert('indexOf("zz"): ' + makeMeAnArray.indexOf('zz'));
    alert('lastIndexOf("a"): ' + makeMeAnArray.lastIndexOf('a'));
    alert('substring(8, 15): ' + makeMeAnArray.substring(8, 15));
    alert('split(" "): ' + makeMeAnArray.split(' '));
    alert('trim(): ' + makeMeAnArray.trim());
    alert('replace("s", "king"): ' + makeMeAnArray.replace('s', 'king'));
    e.stopPropagation();
});


/*### String objects page 132: ###
9. check if the 4th element in the array is a number*/
var chechIfIsNaN = document.getElementById('isNaN');
chechIfIsNaN.addEventListener('click', function (e) {
    if (isNaN(makeMeAnArray[4]))
        alert('4th element in the "We have burgers, subs, pizza, and drinks" is not a number');
    else
        alert('4th element in the "We have burgers, subs, pizza, and drinks" is a number');
    e.stopPropagation();
});

/*### Math page 134: ###
10. Round one of the numbers in the paragraph up/down*/
var originalNumber = '10.23456';
var numbers = document.getElementById('roundNumbers');
numbers.addEventListener('click', function(e){
    alert('Number:' +originalNumber);
    alert('Math.ceil: ' + Math.ceil(originalNumber));
    alert('Math.floor:' +Math.floor(originalNumber));

    //11. replace the 3rd word with PI then roud it to the nearest integer
    myArray[2] = Math.PI;
    myArray[2] = Math.round(myArray[2]);
    alert('Math.round:' + myArray);
    e.stopPropagation();
});

/*### Date object###
12. Calculate how many days it's until your birthday and present it.*/
var oneMinute = 60 * 1000;
var oneHour = oneMinute * 60;
var oneDay = oneHour * 24;
var today = new Date();
var oneYesr = oneDay * 365;

function getDaysUntilMyBirthday() {
    var birthday = new Date();
    birthday.setMonth(10);
    birthday.setDate(17);
    var days;
    if (today.getMonth() === 10 && today.getDate() === 17)
        days = (today.getFullYear() + 1);
    else
        days = Math.round(Math.abs((today.getTime() - birthday.getTime()) / (oneDay)));
    console.log("it is " + days + " days to my birthday");
}
getDaysUntilMyBirthday();

//13. Calculate how many minutes old you are and present it.
function getAge(dateString) {
    var birthDate = new Date(dateString);
    var minnutes = ((today.getFullYear() - birthDate.getFullYear()) * oneYesr) / 1000;
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        minnutes--;
    }
    return minnutes;
}
console.log('minnutes old: ' + getAge("1992/11/17"));
/*Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/
