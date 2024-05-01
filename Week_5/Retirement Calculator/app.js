function calculate(){
let currentAge = prompt("Enter your age please");

let retirementAge = prompt("Enter the age you want to retire:");

let yearsLeft = retirementAge - currentAge;

let currentYear = new Date().getFullYear();

let yearOfRetirement = currentYear + yearsLeft;

if(currentAge > retirementAge){
    alert("Error!!")
}else if(currentAge <0 || retirementAge < 0){
    alert("Error!!")
}
console.log("You have " + yearsLeft + " years left until you can retire.");
console.log("It's " + currentYear + ", so you can retire in " + yearOfRetirement + ".");
}

calculate();
