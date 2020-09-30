//DOM Manipulation (Dynamic HTML)
/** document is the document object that represents our webpage
 * This is an example how we change the inner HTML of an element
 *
 * getElementById(id) is a method we used to get the id of an element
 * getElementsByClassName(classnName) a method to find element by class name
 * innerHTML is a property, used to get or change the content of HTML elements
 */
document.getElementById("header-title").innerHTML = "Hi!";

// Changing the value of an attribute for an HTML element:
// element.setAttribute(attribute, value)

// Adding Event Handlers
document.getElementById("header2").onclick = function () {
  //changing the contents of the header upon clicking
  document.getElementById("header2").innerHTML = "Clicked!";
};

// We can store HTML elements into variables, returned as objects
var myElement = document.getElementById("header3");
document.getElementById("header3").innerHTML =
  "The old content in this div block was:" + myElement.innerHTML;

//We can also get elements by tag name (gets a paragraph tag)
//Ex) document.getElementbyTagName("p");
