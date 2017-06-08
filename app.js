'use strict';

var userName = prompt('Hi there, user! What is your name?');

var userGreeting = prompt('Hello, ' + userName + '! Are you ready to play a guessing game about me? It will only be 5 questions.');
  if (userGreeting.trim().toLowerCase() === 'yes' || userGreeting.trim().toLowerCase() === 'y') {
    alert ('Hurray! Let us get started!');
  } else if (userGreeting.trim().toLowerCase() === 'no' || userGreeting.trim().toLowerCase() === 'n') {
    alert ('Too bad! We are playing anyway!');
  } else {
    alert ('I am going to take that as a yes');
  }
console.log('User input to prompt userGreeting was ' + userGreeting);

var questionOne = prompt('Do you believe I am holding you here against your will?');
  if (questionOne.trim().toLowerCase() === 'yes' || questionOne.trim().toLowerCase() === 'y') {
    alert ('Hahahaha!! I would never do that to you, friend...?');
  } else if (questionOne.trim().toLowerCase() == 'no', questionOne.trim().toLowerCase() == 'n') {
    alert ('Wow! You are a really trusting person! :D');
  } else {
    alert ('I think I am going to take that as a no');
  }
console.log('User input to prompt questionOne was ' + questionOne);


var questionTwo = prompt('Do you believe this is a game?');
  if (questionTwo.trim().toLowerCase() === 'yes' || questionTwo.trim().toLowerCase() === 'yes') {
    alert ('Ahahahahaha!');
  } else if (questionTwo.trim().toLowerCase() === 'no' || questionTwo.trim().toLowerCase() === 'n') {
    alert ('...You are probably right!');
  } else {
    alert ('Too scared to guess, huh?');
  }
  console.log('User input to prompt questionTwo was ' + questionTwo);

var questionThree = prompt('Do you feel safe?');
  if (questionThree.trim().toLowerCase() === 'yes' || questionThree.trim().toLowerCase() === 'y') {
    alert ('How quaint :)');
  } else if (questionThree.trim().toLowerCase() === 'no' || questionThree.trim().toLowerCase() === 'n') {
    alert ('You must horribly troubled.');
  } else {
    alert ('You are very bad at responding to anything...');
  }
console.log('User input to prompt questionThree was ' + questionThree);

var questionFour = prompt('Do you like coffee?');
  if (questionFour.trim().toLowerCase() === 'yes' || questionFour.trim().toLowerCase() === 'y') {
    alert ('Be careful of what you drink!');
  } else if (questionFour.trim().toLowerCase() === 'no' || questionFour.trim().toLowerCase() === 'n') {
    alert ('...bummer...');
  } else {
    alert ('...You are not making this very fun, are you.');
  }
console.log('User input to prompt questionFour was ' + questionFour);

var questionFive = prompt('Do you like icecream?');
  if (questionFive.trim().toLowerCase() === 'yes' || questionFive.trim().toLowerCase() === 'y') {
    alert ('Ok! Go outside and grab some!');
  } else if (questionFive.trim().toLowerCase() === 'no' || questionFive.trim().toLowerCase() === 'n') {
    alert ('I am going to find you...');
  } else {
    alert ('You are boring! I am going to go play with someone else!');
  }
console.log('User input to prompt questionFive was ' + questionFive);

var finalResponse;
  if (finalResponse.trim().toLowerCase() === questionOne + questionTwo + questionThree + questionFour + questionFive) {
    alert ('Hurray! You answered all the questions!');
  } else {
    alert ('You did not answer all of the questions, you butt!');
  }
