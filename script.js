///////////DOM Manipulation (Dynamic HTML)////////////////
/** document is the document object that represents our webpage
 * This is an example how we change the inner HTML of an element
 *
 * getElementById(id) is a method we used to get the id of an element
 * getElementsByClassName(classnName) a method to find element by class name
 * innerHTML is a property, used to get or change the content of HTML elements
 */
document.getElementById("header-title").innerHTML = "Click me";

// Changing the value of an attribute for an HTML element:
// element.setAttribute(attribute, value)

/////////////////////////// EVENTS //////////////////////////
// Adding Event Handlers
document.getElementById("header2").onclick = function () {
  //changing the contents of the header upon click event
  document.getElementById("header2").innerHTML = "Clicked!";
};

// We can store HTML elements into variables, returned as objects
var myElement = document.getElementById("header3");
document.getElementById("header3").innerHTML =
  "The old content in this div block was:" + myElement.innerHTML;

// We can also get elements by tag name (gets a paragraph tag)
//Ex) document.getElementbyTagName("p");

// Example of calling a function from the event handler:
/* 
<h1 onclick="changeText(this)">Click on this text!</h1>

<script>
function changeText(id) {
  id.innerHTML = "Hello World!";
}
</script> 
*/

/////// JS ES6+ ////////////

// Arrow functions
// shortcut "nfn" creates a named function in ES7 syntax
const x = (x, y) => {
  return x * y; //go style to always include return keyword and curly braces w/ semicolon
};
console.log(x(5, 2));

// Classes are a type of function. Rhe properties of a class are assigned inside a constructor() method
// Class declaration with constructor
class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
}

p = new Person("Makoi", "Gacula");
console.log(p);

// ES6+ allows function parameters to have default values
// aruments are what we pass into the function
// parameters are what we specify in func declaration
const add = (x, y = 5) => {
  return x + 5; // y is 5 if it is not passed or undefined
};
console.log(add(3)); //only x is passed into add function (its value is 3)

// Converting JSON data into JS Object and modifying html contents with data
// text holds an person object (an array with 3 people objects)
var text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);

// Here, i use a built-in forEach loop to iterate through the array and print out the
// employee object's first and last name (name-value pairs)
obj.employees.forEach((element, index, array) => {
  var first = obj.employees[index].firstName;
  var last = obj.employees[index].lastName;
  console.log(first + " " + last); // prints out first & last names

  // console.log(element.firstName); // John, Anna, Peter
  // console.log(index); // 0, 1, 2
  //  console.log(array); // same myArray object 3 times
});

document.getElementById("demo").innerHTML =
  obj.employees[0].firstName + " " + obj.employees[0].lastName;
