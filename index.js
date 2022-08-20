import readlineSync from 'readline-sync';
import chalk from 'chalk';

const right = chalk.green; //right is now an alias for chalk.green(). 
const wrong = chalk.red; //wrong is now an alias for chalk.red(). 

console.log(chalk.black.bold.bgCyan("Is your birth day a prime number?\n"));
var userName = readlineSync.question("Enter your name: ");
var dob = readlineSync.question("Enter your birth day in DD/MM format: "); //input is taken in String format.



function checkPrime(combine){ //function to check prime number
  var count = 0;
  console.log("Birth number: " + combine);
 for(var div=2; div * div <= combine; div++){ //prime number logic
   if(combine % div == 0){
     count++;
     break;
   }
 }
  if(count==0){
     console.log(right(userName + "! " + "Your birth number is a prime number."));
   }
   else{
     console.log(wrong(userName + "! " + "Your birth number is not a prime number."));
   }
}

function validateDob(dob){ //passing dob String to this function to validate date of birth if it's correct or not.

  var userDD = dob.substring(0,2); //extracting string from 0th index to 1st index. 
  //Ex: 26/06 - 26 is extracted. 
  var userMM = dob.substring(3,5); //extracting string from 3rd index to 4th index leaving '/'. 
  //Ex: 26/06 - 06 is extracted. 
  
  var combine = Number(userDD + userMM); //first, concatenating userDD + userMM and typecasting it from String to Number format. Ex: Number(26 + 06) -> combine = 2606
  
  
  if(isNaN(userDD) || isNaN(userMM)){ //isNaN() first converts a value to a number before testing it. isNaN(userDD) returns true if user enters a String instead of a number, same for isNaN(userMM) and isNaN(userYYYY). So, checking for a valid input.
    console.log("Please enter valid input birth date 😡");
  } else if(Number(userDD) <= 0 || Number(userDD) > 31){ //Number(userDD) converts a string to a number, ex: String '12' is converted to Number 12 and then checked. If userDD is below or equal to 0 OR it is greater than 31 - message is printed 'Enter a valid birth DD'
    console.log(wrong("Enter a Valid Birth DD."));
  } else if(Number(userMM) <=0 || Number(userMM) > 12){
    console.log(wrong("Enter a Valid Birth MM."));
  } else if(Number(userMM) == 2 && Number(userDD) == 30 || Number(userDD) == 31){ //if user enters userMM = 02 or 2, both are covered in Number(userMM) == 2 -> 2==2 and 02==2 , both will get a true value which is wat I want and if userDD == 30 or userDD = 31, error - enter a valid birth day will be shown.
    console.log(wrong("Enter a Valid Birth Day for Februrary Month."));
  } else{
    checkPrime(combine); //passing value of 'combine' passed to checkPrime() function to check it is a prime number or not.
  }
}

validateDob(dob);