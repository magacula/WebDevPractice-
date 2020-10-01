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

//////// AJAX (Asynchronous Javascript & XML Practice //////////////
/* 
Set of web technologies to send/receive data between client & server asynchronously
  - AJAX allows us to send requests asynchronously to server w/o refreshing our webpage
*/

// Here, we use a XMLHttpRequest() to get JSON from Cat Photo API

// Create an EventHandler using the onclick property to process click events
document.getElementById("getPhoto").onclick = () => {
  // Create an instance of XMLHttpRequest Object to send a request to a server
  const req = new XMLHttpRequest();
  /* Use open method to initialize a request
    -arg 1: the type of request we want to make (GET request is getting/retrieving data from the API)
    -arg 2: the URL of the API we are requesting data from
    -arg 3: a boolean value set to true, makes it a asynchronous request
  */
  req.open("GET", "https://www.freecodecamp.org/json/cats.json", true);
  // Send method sends the request to a server
  req.send();
  // onclick event listener parses the returned data and applies the
  // JSON.stringify method to convert JSON into string format
  req.onload = () => {
    const json = JSON.parse(req.responseText); // parses returned JSON data and saves into variable json
    console.log(json);

    // We access the first element of the json array and save the key value of imageLink
    let getSrc = JSON.stringify(json[0].imageLink);
    // Then we access the value of the altText key value
    let getAlt = JSON.stringify(json[0].altText);

    let html = "";
    html += "<img src=" + getSrc + " alt=" + getAlt + "></img>";
    console.log(html);
    document.getElementById("outputPhoto").innerHTML = html; // renders our image by inserting it in string format into the HTML DOM
  };
};

/////////////// JS ES6+ /////////////////////

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

//////////// Fetch API (making asynchronous requests) (REQUEST/RESPONSE/Ajax) /////////////

/* 
  Fetch allows us to access data (fetch resources) from an API
  Fetch is function built into JavaScript that allows you to query any URL/API to get back data.

  The most important part is that fetch is asynchronous
  so it will run in the background and let you know when it finishes using promises

  Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
*/

// fetch() function takes in parameter of the path of a resource we want to fetch
// In this case, the url of the API we want to fetch data from
// we'll use a fake API to get back data. (fetches users)
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // need to pass in an HTTP method. Here we use a POST Request (sending data to server)
  // We also need to set the headers (Tells fetch function we're passing JSON)
  // setting the content type to application/json
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: "11",
    id: "101",
    title: "test title",
    body: "test body",
  }),
})
  .then((res) => {
    // console.log(res.json());
    return res.json(); // fetch returns a response object (a promise)
  })
  //   .then((res) => {
  //     if (res.ok) {
  //       console.log("SUCESS");
  //     } else {
  //       console.log("FAILED");
  //     }
  //   })
  .then((data) => console.log(data)) // returning another promise, but of the data we want
  .catch((error) => console.log("ERROR")); //catching errors when response is returned

//200 status code: the response has SUCCESSFULLY returned data from api
//404 status code: the response has FAILED to return

//////Another Example using fetch API///////

// Add Event listener to handle event on click -> gets data from API
document.getElementById("getData").addEventListener("click", getPosts);

// function that fetches posts from jsonplaceholder API
function getPosts() {
  // fetch call makes a GET request to URI: shttps://jsonplaceholder.typicode.com/posts
  // the method returns a promise
  fetch("https://jsonplaceholder.typicode.com/posts")
    // if request is successful, the then method is executed converting to JSON format
    .then((res) => res.json())
    // this then returns another promise and gets the data we want
    .then((data) => {
      let output = "<h2>POSTS</h2>";

      // Uses a forEach loop to iterate through JSON to display individual posts
      data.forEach((post) => {
        // retrieve title & body values using ${}
        // use template strings to add multiple lines of HTML to DOM
        output += `
        <div></div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
      });
      console.log(output);
      document.getElementById("output").innerHTML = output;
    });
}

// Requesting data from a JSON file, by sending a GET request to users.json
fetch("users.json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    // console.log(res.json());
    return res.json(); // fetch returns a response object (a promise)
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
