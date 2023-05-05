const myButton = document.querySelector("button");
const image = document.querySelector("img");
const images = ["pic1.jpeg","pic2.jpeg","pic3.jpeg","pic4.jpg"];

myButton.addEventListener("click", changeImage);

function changeImage() {
    let ramdomIndex = Math.floor(Math.random() * images.length);

    image.src = "images/" + images[ramdomIndex];
    
}