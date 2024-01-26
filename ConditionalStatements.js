// If-else Statements

/*let sale = true;
sale = false;
if(sale){
  console.log('Time to buy!');
}*/

let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!');
}
else {
  console.log('Time to wait for a sale.');
}

// Output:
// Time to wait for a sale.

// Comparison Operators

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!')
}
else {
  console.log('We can eat later!');
}

// Output
// We can eat later!

// Logical Operators

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
}
else {
  console.log('not bed time yet');
}

// Output
// not bed time yet

// Truthy and Falsy

let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Hello World!';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Output:
// Great! You've started your work!
// This string doesn't seem to be empty.

// Truthy and Falsy Assignment
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator
let isLocked = false;

isLocked ?
  console.log('You will need a key to open the door.') :

  console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ?
  console.log('Correct!') :

  console.log('Incorrect!');

let favoritePhrase1 = 'Love That!';

favoritePhrase1 === 'Love That!' ?
  console.log('I love that!') :
  console.log("I don't love that!");

// Else If Statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}
else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
}
else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
}
else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Output:It's sunny and warm because it's summer!

// The switch keyword

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// Output:You get the gold medal!

// Magic Eight Ball

let userName = '';
userName ? console.log(`Hello,${userName}!`) : console.log('Hello!');
let userQuestion = 'Magic Eight Ball';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightball = '';
switch (randomNumber) {
  case 1:
    eightball = 'It is certain';
    break;
  case 2:
    eightball = 'It is decidedly so';
    break;
  case 3:
    eightball = 'Reply hazy try again';
    break;
  case 4:
    eightball = 'Cannot predict now';
    break;
  case 5:
    eightball = 'Do not count on it';
    break;
  case 6:
    eightball = 'Outlook not so good';
    break;
  case 7:
    eightball = 'Signs point to yes';
    break;
  case 8:
    eightball = 'It is certain';
    break;
}
console.log(eightball);

/*Output:
Hello!
Magic Eight Ball
It is decidedly so*/

// Race Day****
let raceNumber = Math.floor(Math.random() * 1000);


let registeredEarly = true;

let runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}


if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
}

else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
}

else if (runnerAge < 18) {
  console.log(`Youth runners will race at 12:30 pm. Your race number is ${raceNumber}.`);
}

else {
  console.log("Please see the registration desk for further instructions.");
}
