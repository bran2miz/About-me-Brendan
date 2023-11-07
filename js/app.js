'use strict';

//Welcome the user
let userName = prompt('Hello There! What is your name?');
alert(`Wecome ${userName} I am going to ask you five question about my self. Good Luck!`);
console.log('I ask you user for their name: ${userName}')

//Question #1
let userResponse = prompt('Have I been to Luxembourg City twice?').toLowerCase();
if(userResponse === 'y' || userResponse === 'yes') {
  alert('Wrong! I\'ve only been there once');
} else if(userResponse === 'n' || userResponse === 'no') {
  alert('Correct! I\'ve only been there once');
}