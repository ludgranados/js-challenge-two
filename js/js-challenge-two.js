/*** Exercise 1 For Loop */

// Create a loop that console.logs odd numbers from 0 - 100
for (var i = 1; i < 100; i += 2) {
    if (i === 7) {

    }
    console.info('This is an odd number ' + i);
}

/*** Exercise 2 */

// Create a function that accepts a firstName parameter and a lastName parameter
// Inside the function use the alert function to render a message that welcomes the user by their full name
// Be sure to call the function and pass in the values for the parameters



function showMessage () {

let firstName = 'Ludwin';
let lastName = 'Granados';

let message = 'Welcome! ' + firstName + ' ' + lastName;
alert(message)


};

showMessage();
