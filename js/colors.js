const myButton = document.querySelector("button");
const myBox = document.querySelector(".box");
const colors = ["red", "green", "blue", "yellow"];

myButton.addEventListener("click", changeColor);

function changeColor() {
    let ramdomIndex = Math.floor(Math.random() * colors.length);
    
    myBox.style.backgroundColor = colors[ramdomIndex];

}