let month = prompt("enter a month number please.");
let dayName;

 

switch (month) {
  case "1":
    dayName = '31';
    break;  
  case "2":
    dayName = '28';
    break;
  case "3":
    dayName = '31';
    break;
  case "4":
    dayName = '30';
    break;
  case "5":
    dayName = '31';
    break;
  case "6":
    dayName = '30';
    break;
  case "7":
    dayName = '31';
    break;
  case "8":
    dayName = '31';
    break;
  case "9":
    dayName = '30';
    break;
  case "10":
    dayName = '31';
    break; 
  case "11":
    dayName = '30';
    break; 
  case "12":
    dayName = '31';
    break;         

  default:
    dayName = 'Invalid Month';

       
}

console.log(dayName);