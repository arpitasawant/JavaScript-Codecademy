// The .forEach() Method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitsItem){
  console.log('I want to eat a '+fruitsItem);
});

/**Output:I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple */


// The .map() Method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number / 100);
console.log(smallNumbers);

// HelloWorld
// [ 1, 2, 3, 4, 5 ]

// The .filter() Method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers=randomNumbers.filter(
  word=>
  {
    return word<250;
  }
);
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords=favoriteWords .filter(value=>{
  return value.length>7;
});


// The .findIndex() Method

const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal=animals1.findIndex(ani=>
{
  return ani==='elephant';
})

const startsWithS = animals1.findIndex(animal => animal[0] === 's');

console.log(startsWithS);

// Output:3

// The .reduce() Method

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator,currentValue)=>{
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
},10);
console.log(newSum);

// Output:
/*The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26 */

// Iterator Documentation

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));
const interestingWords = words.filter(word => word.length > 5);
// Use filter to create a new array



// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every((word) => {return word.length>5; } ));


//  Output:true
// true

// Choose the Right Iterator

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
// OR nums.some(num => num < 0);

// Output
/*Have you visited Orlando?
Have you visited Dubai?
Have you visited Edinburgh?
Have you visited Chennai?
Have you visited Accra?
Have you visited Denver?
Have you visited Eskisehir?
Have you visited Medellin?
Have you visited Yokohama?
CODECADEMY */