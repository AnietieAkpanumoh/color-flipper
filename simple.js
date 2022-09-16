const colours = [
    "green",
    "red",
    "rgba(144,133,122)",
    "#f15025",
    "Orange",
    "Purple",
    "Pink",
    "#E2D1F9",
    "Yellow",
    "#990011",
    "#317773",
    "#EEA47F",
];

const button = document.getElementById("btn");
const colour = document.querySelector(".colour");
const h4 = document.getElementById("h4");
const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
const newColour = ["white"];

button.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
    h4.style.color = newColour;
    simple.style.color = newColour;
    hex.style.color = newColour;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
}