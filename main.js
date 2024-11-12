// defined a new variable and assigned it the value 10
let myNumber = 10;
// use the console.log method to "log" out the number in the console
console.log("My number is", myNumber);
// a function is code block that repeats an action when called
function SayHello(name) {
  return "Hello " + name;
}

// DOM

// target a single HTML element
const textElement = document.getElementById("text-element");
const textButton = document.getElementById("text-button");
const myImage = document.getElementById("my-img");
const points = document.getElementById("points");

const paragraphs = document.querySelector(".my-class");

const arrowTest = document.getElementById("arrow-test");
const arrowButton = document.getElementById("arrow-button");
const anotherArrowButton = document.getElementById("another-arrow-button");

let counter = 0;

// use the targeted element to manipulate the HTML-document
textButton.addEventListener("click", () => {
  textElement.textContent += "Hei";
  myImage.src = "/images/nice.png";
});

textElement.addEventListener("click", () => {
  textElement.textContent = "Hei";
});

function CreateText() {
  let text = "Some cool text";
  paragraphs.textContent = text;
  return text;
}

function Increment() {
  counter++;
  points.textContent = counter;
}

function Decrement() {
  counter--;
  if (counter <= 0) {
    counter = 0;
  }
  points.textContent = counter;
}

const incrementArrow = () => {
  counter++;
  arrowTest.textContent = counter;
};

arrowButton.addEventListener("click", incrementArrow);

anotherArrowButton.addEventListener("click", () => {
  counter--;
  if (counter <= 0) {
    counter = 0;
  }
  arrowTest.textContent = counter;
});
