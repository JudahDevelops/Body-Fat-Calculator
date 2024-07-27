const calcButton = document.querySelector("#calculate");
const result = document.querySelector("#results");
const resetButton = document.querySelector("#reset");
const results = document.querySelector("#show-results");

function calcBF() {
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const age = parseInt(document.querySelector("#age").value);
    const gender = document.getElementsByName("gender");
    const bmi = weight / height ^ 2;
    let selected = null; 
   

    for (const index in gender) {
    if (gender[index].checked) {
                selected = gender[index].value;
                break;
        }
    }
    

   
    if (selected === "male") {
        return Math.floor((1.20 * bmi) + (0.23 * age));
    } else if (selected === "female") {
        return Math.floor((1.20 * bmi) + (0.23 * age) - 5.4);
    } else if (selected === null){
        return "Please select a gender";
    }
}


calcButton.addEventListener("click", () => {
   results.style.display = "block";
   result.innerHTML = calcBF();
});

resetButton.addEventListener("click", () => {
    location.reload();
})