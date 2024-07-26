const calcButton = document.querySelector("#calculate");
const result = document.querySelector("#results");
const resetButton = document.querySelector("#reset");

function calcBF() {
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const age = parseInt(document.querySelector("#age").value);
    const bmi = weight / height ^ 2;
    return (1.20 * bmi) + (0.23 * age);
}


calcButton.addEventListener("click", () => {
   result.innerHTML = calcBF();
});

resetButton.addEventListener("click", () => {
    location.reload();
})