let selected = null;

const calcButton = document.querySelector("#calculate");
const result = document.querySelector("#results");
const resetButton = document.querySelector("#reset");
const results = document.querySelector("#show-results");
const gender = document.getElementsByName("gender").value;
    
   

for (const index in gender) {
   if (gender[index].checked) {
            selected = gender[index];
            break;
    }
}


function calcBF() {
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const age = parseInt(document.querySelector("#age").value);
    

    const bmi = weight / height ^ 2;
    if (selected === "male") {
        return (1.20 * bmi) + (0.23 * age);
    } else if (selected === "female") {
        return ((1.20 * bmi) + (0.23 * age) - 5.4);
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