'use strict';
let score = 0;
let userName = prompt('Hello There! What is your name?');
//Welcome the user
function introduction() {
  alert(`Wecome ${userName} I am going to ask you five questions about my self. Good Luck!`);
}
introduction();
//console.log('I asked the user for their name: ${userName}');
//console.log(score);

// //Question #1
// let userResponse = prompt('Have I been to Luxembourg City twice?').toLowerCase();
// if(userResponse === 'y' || userResponse === 'yes') {
//   alert('Wrong! I\'ve only been there once.');
// } else if(userResponse === 'n' || userResponse === 'no') {
//   alert('Correct! I\'ve only been there once.');
//   score++;
// }
// //console.log(`The user responded ${userResponse}`);
// //console.log(score);

// //Question #2
// userResponse = prompt('Is my favorite TV show Doctor Who?').toLowerCase();
// if(userResponse === 'y' || userResponse === 'yes') {
//   alert('Wrong! It\'s FireFly.');
// } else if(userResponse === 'n' || userResponse === 'no') {
//   alert('Correct! It\'s FireFly.');
//   score++;
// }
// //console.log(`The user responded ${userResponse}`);
// //console.log(score);

// //Question #3
// userResponse = prompt('Did I used to live in Texas').toLowerCase();
// if(userResponse === 'y' || userResponse === 'yes') {
//   alert('Yep! I did my undergrad at Rice University.');
//   score++;
// } else if(userResponse === 'n' || userResponse === 'no') {
//   alert('Nope! I did my undergrad at Rice University in Houston.');
// }
// //console.log(`The user responded ${userResponse}`);
// //console.log(score);

// //Question #4
// userResponse = prompt('Do I like Oysters on the half shell?').toLowerCase();
// if(userResponse === 'y' || userResponse === 'yes') {
//   alert('Yes! I\'m from the Northwest so of course I do.');
//   score++;
// } else if(userResponse === 'n' || userResponse === 'no') {
//   alert('Wrong! I\'m from the Northwest so of course I do.');
// }
// //console.log(`The user responded ${userResponse}`);
// //console.log(score);

// //Question #5
// userResponse = prompt('Did I used to live on a boat?').toLowerCase();
// if(userResponse === 'y' || userResponse === 'yes') {
//   alert('No I didn\'t.');
// } else if(userResponse === 'n' || userResponse === 'no') {
//   alert('Correct I didn\'t.');
//   score++;
// }
// //console.log(`The user responded ${userResponse}`);*/
// //console.log(score);

// //give the user 4 chances to answer the 6th question

// let chancesRemaining = 4;
// let myAge = 29;

// //Question #6
// while(chancesRemaining > 0){
//   userResponse = +prompt(`How old am I? You have ${chancesRemaining} chances remaining.`);
//   chancesRemaining--;
//   if(userResponse === myAge){
//     alert('Correct! I am 29.');
//     score++;
//     break;
//   }
//   else if (userResponse < myAge)
//     alert('Too low!');
//   else if (userResponse > myAge)
//     alert('Too high!');
//   if(chancesRemaining === 0){
//     alert('I am 29.');
    
//   }
// }
// //console.log(`The user responded ${userResponse}`);
// //console.log(typeof(userResponse));
// //console.log(score);

// //Question #7
// let myFavoriteMovies = ['A Beautiful Mind',
//   'The Imitation Game',
//   'Alien',
//   'Invasion of the Body Snatchers',
//   'Star Trek II',
//   'The Producers',
//   'Amadeus',
//   'Star Wars IV',
//   'The Band\'s Visit',
//   'The Fellowship of the Ring'];
// chancesRemaining = 6;
// mainLoop: while(chancesRemaining > 0){
//   userResponse = prompt(`Guess one of my top 10 favorite movies. You have ${chancesRemaining} chances remaining.`);
//   chancesRemaining--;
//   for(let i = 0; i < myFavoriteMovies.length; i++){
//     //Check the users answer
//     if(myFavoriteMovies[i].toLowerCase() === userResponse.toLowerCase()){
//       //console.log(`The Answer is ${myFavoriteMovies[i]}`);
//       //console.log(`The user responded ${userResponse}`);
//       alert('Yes that is one of them.');
//       score++;
//       break mainLoop;
//     }
//     if(i >= myFavoriteMovies.length - 1)
//       alert('Nope that is not one of them.');
//   }
// }
// //console.log(score);
// alert('My top 10 favorite movies are: ' + myFavoriteMovies);
// alert('Thanks for answering these questions ' + userName + '! You got ' + score + '/7 questions correct!');
