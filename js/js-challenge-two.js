/*** Exercise 1 For Loop */

//Create a loop that console.logs odd numbers from 0 - 100


for (var i = 1; i < 100; i += 2) {
    if (i === 7) {

    }
    console.info('This is an odd number ' + i);
}

// /*** Exercise 2 */

// // Create a function that accepts a firstName parameter and a lastName parameter
// // Inside the function use the alert function to render a message that welcomes the user by their full name
// // Be sure to call the function and pass in the values for the parameters



function showMessage () {

let firstName = 'Ludwin';
let lastName = 'Granados';

let message = 'Welcome! ' + firstName + ' ' + lastName + '!';
alert(message)


};

showMessage();


// /*** Exercise 3 Verify a User's age */

// // When your page loads, create a function that prompts a user to enter their age
// // If the user is over the age of 13 alert the user they are good to enter
// // If they are not, alert the user to come back when they're older!
// // Use arrow function syntax, and add a debugger to test your data

const checkAge = (age) => {
    if (age >= 13) {
      return true;
    }
  }
//   debugger;
  let age = prompt('How old are you?'
  );

  if ( checkAge(age) ) {
    alert( 'Access granted, you are good to enter!' );
  } else {
    alert( 'Access denied, come back when you are of age!' );
  }

// /*** Exercise 4 Temperature in Fahrenheit */

// // Create a function that converts a number from Celsius to Fahrenheit
// // The C -> F formula is: number * 1.8 + 32
// // The number variable should be passed in to the function as a parameter
// // Console.log the result

function cToF(celsius)
{
  var cTemp = celsius;
  var cToFahr = cTemp * 1.8 + tempNumber;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';

  console.log(message);
    alert(cToFahr + '˚F');

}

let tempNumber = parseInt(prompt('Enter a temperature: '));
alert('The given temperature is',);

function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - tempNumber) * 1.8;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';

  console.log(message);
  alert(fToCel + '˚C');

}
cToF(60);
fToC(45);


/*** Exercise 5 Guess the number between 1 and 10 */

// Add a button to your page that when clicked calls a function
// The function should prompt the user for a number between 1 and 10
// Initialize the function with an answerNumber variable inside the function
// If the user passed number is correct, alert the user they are correct
// Else let the user know they are wrong and to try again

function answerNumber() {

      // generating a random integer from 1 to 10
      const random = Math.floor(Math.random() * 10) + 1;

      // take input from the user
      let number = parseInt(prompt('Guess a number from 1 to 10: '));

      // take the input until the guess is correct
      while(number !== random) {
          number = parseInt(prompt('Good try, guess again from 1 to 10: '));
      }

      // check if the guess is correct
      if(number == random) {
          alert('Congratulations, you guessed the right number!!!');
      }
    }


// const answerNumber = () => {

// let number = parseInt(prompt("Please enter a number from 1 to 10", ""));

// if (number <= 10) {
//     document.write("Your number (" + number + ") matches requirements", "");
// } else if (isNaN(number)) {
//     parseInt(prompt("It is not a number. Please enter a number from 1 to 10", ""));
// } else {
//     parseInt(prompt("Your number (" + number + ") is above 10. Please enter a number from 1 to 10", ""));
// }
// };
// answerNumber();


/*** Exercise 6 */


