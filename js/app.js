'use strict';

/*//Welcome the user
let userName = prompt('Hello There! What is your name?');
alert(`Wecome ${userName} I am going to ask you five questions about my self. Good Luck!`);
//console.log('I asked the user for their name: ${userName}');

//Question #1
let userResponse = prompt('Have I been to Luxembourg City twice?').toLowerCase();
if(userResponse === 'y' || userResponse === 'yes') {
  alert('Wrong! I\'ve only been there once.');
} else if(userResponse === 'n' || userResponse === 'no') {
  alert('Correct! I\'ve only been there once.');
}
//console.log(`The user responded ${userResponse}`);

//Question #2
userResponse = prompt('Is my favorite TV show Doctor Who?').toLowerCase();
if(userResponse === 'y' || userResponse === 'yes') {
  alert('Wrong! It\'s FireFly.');
} else if(userResponse === 'n' || userResponse === 'no') {
  alert('Correct! It\'s FireFly.');
}
//console.log(`The user responded ${userResponse}`);

//Question #3
userResponse = prompt('Did I used to live in Texas').toLowerCase();
if(userResponse === 'y' || userResponse === 'yes') {
  alert('Yep! I did my undergrad at Rice University.');
} else if(userResponse === 'n' || userResponse === 'no') {
  alert('Nope! I did my undergrad at Rice University in Houston.');
}
//console.log(`The user responded ${userResponse}`);

//Question #4
userResponse = prompt('Do I like Oysters on the half shell?').toLowerCase();
if(userResponse === 'y' || userResponse === 'yes') {
  alert('Yes! I\'m from the Northwest so of course I do.');
} else if(userResponse === 'n' || userResponse === 'no') {
  alert('Wrong! I\'m from the Northwest so of course I do.');
}
//console.log(`The user responded ${userResponse}`);

//Question #5
userResponse = prompt('Did I used to live on a boat?').toLowerCase();
if(userResponse === 'y' || userResponse === 'yes') {
  alert('No I didn\'t.');
} else if(userResponse === 'n' || userResponse === 'no') {
  alert('Correct I didn\'t.');
}
//console.log(`The user responded ${userResponse}`);*/

//give the user 4 chances to answer the 6th question

let chancesRemaining = 4;
let myAge = 29;

while(chancesRemaining > 0){
  let userResponse = +prompt('How old am I? You have ${chancesRemaining} chances remaining.');
  chancesRemaining--;
  if(userResponse === 29){
    alert('Correct1 I am 29.');
    break;
  }
  else if (userResponse < 29)
    alert(`Too low!`);
  else if (userResponse > 29)
    alert(`Too high!`);
  if(chancesRemaining === 0)
    alert("I am 29.");
}
//console.log(`The user responded ${userResponse}`);
//console.log(typeof(userResponse));


