
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
    new P("domain: ", 'click here')
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
alert("lastModified: " + document.lastModified + '<br>');
alert("URL: " + (document.url = 'Lab2'));
alert("domain: " + document.domain);

/*### String objects page 128, 129: ###
7. Save the the text from the makeMeAnArray-paragraph into an array.*/
var makeMeAnArray = "We have burgers, subs, pizza, and drinks";
var myArray = makeMeAnArray.split(' ');
//8. Use all the string methods and propertys allong with the array
console.log('length: ' + makeMeAnArray.length);
console.log('toUpperCase(): ' + makeMeAnArray.toUpperCase());
console.log('toLocaleLowerCase(): ' + makeMeAnArray.toLocaleLowerCase());
console.log('charAt(12): ' + makeMeAnArray.charAt(12));
console.log('indexOf("zz"): ' + makeMeAnArray.indexOf('zz'));
console.log('lastIndexOf("a"): ' + makeMeAnArray.lastIndexOf('a'));
console.log('substring(8, 15): ' + makeMeAnArray.substring(8, 15));
console.log('split(" "): ' +  makeMeAnArray.split(' '));
console.log('trim(): ' + makeMeAnArray.trim());
console.log('replace("s", "king"): ' + makeMeAnArray.replace('s', 'king'));

/*### String objects page 132: ###
9. check if the 4th element in the array is a number*/
if (isNaN(makeMeAnArray[4]))
    console.log("4th element in the array is not a number");
else
    console.log("4th element in the array is a number");

/*### Math page 134: ###
10. Round one of the numbers in the paragraph up/down*/
var originalNumber = '102.23456';
console.log(originalNumber);
console.log(Math.ceil(originalNumber));
console.log(Math.floor(originalNumber));

//11. replace the 3rd word with PI then roud it to the nearest integer
myArray[2] = Math.PI;
myArray[2] = Math.round(myArray[2]);
console.log(myArray);

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
    var minnutes = ((today.getFullYear() - birthDate.getFullYear()) * oneYesr)/ 1000;
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
