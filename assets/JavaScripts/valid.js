
// Asks the user to input a number
let input = prompt("Input a number between 0-100");
input = parseInt(input); //convert into a number

//check if input is in the range, if not, reenter
while (input <= 1 || input >= 100){
    input = prompt("Please re-enter a number between 0-100")
    input = parseInt(input);
}
//Display the squared number
console.log(input*input);