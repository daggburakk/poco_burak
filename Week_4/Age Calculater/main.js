let birthYear = prompt("Enter your birth year:")
let futureYear = prompt("Enter your future year:")

let firtsPossibleAge = futureYear - birthYear;
let secondPossibleAge = firtsPossibleAge- 1;

if(!birthYear ||  !futureYear){
 alert("Please enter valable number")
} else if(birthYear == 0 || futureYear == 0 ){
    alert("Check your date")
} else if(isNaN(birthYear) || isNaN(futureYear)){
    alert("Enter a number!!")
}else if(birthYear == futureYear){
    alert("Attention, your dates can't be same")
}else if(birthYear < 0 || futureYear < 0){
    alert("Your number cannot be negatif number!!")
}
else{
    alert("Your age could be  " + firtsPossibleAge + " "+"or" + " "+ secondPossibleAge)
}