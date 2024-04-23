
let input = prompt("Enter day's name:");
let translatedDay;

switch(input){
  case "Monday":
   translatedDay = "Lundi"; 
   break;
  case "Tuesday":
    translatedDay = "Mardi"; 
    break;
  case "Wednesday":
    translatedDay = "Mercredi"; 
    break;
  case "Thursday":
    translatedDay = "Jeudi"; 
    break;
  case "Friday":
    translatedDay = "Vendredi"; 
    break;
  case "Saturday":
    translatedDay = "Samedi"; 
    break;
  case "Sunday":
    translatedDay = "Dimanche";
    break;
    default:
        input=alert("Error!!!")          
}
    alert(translatedDay)