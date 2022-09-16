const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const colour = document.querySelector(".colour");

button.addEventListener("click", function () {
    let hexColour = "#";
    for (let index = 0; index < 6; index++) {
        hexColour += hexCode[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexColour;
    colour.textContent = hexColour;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hexCode.length);
}
