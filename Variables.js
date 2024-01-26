// Create a Variable

/*Rules:
i)Variable names cannot start with numbers.

ii)Variable names are case sensitive, so myName and myname would be different variables. It is bad practice 
to create two variables that have the same name using different cases.

iii)Variable names cannot be the same as keywords.*/

// 1.Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.

var favoriteFood = 'pizza';

// 2.Declare a variable named numOfSlices using the var keyword and assign to it the number 8.

var numOfSlices = 8;

// 3.Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.
// On the following line, use console.log() to print the value saved to numOfSlices.

var numOfSlices = 8;
var favoriteFood = 'pizza';
console.log(favoriteFood);
console.log(numOfSlices);

// Create a Variable: let 
// The let keyword signals that the variable can be reassigned a different value. 

// 1.Create a let variable called changeMe and set it equal to the boolean true.

let changeMe = true;

// 2.On the line after changeMe is declared, set the value of changeMe to be the boolean false.
// To check if changeMe was:

changeMe = false;
console.log(changeMe);

/*Create a Variable: const

Just like with var and let you can store any value in a const variable. The way you declare a const 
variable and assign a value to it follows the same structure as let and var.However, a const variable cannot be 
reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.*/

// 1.Create a constant variable named entree and set it to equal to the string 'Enchiladas'.
// 2.Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.

const entree = 'Enchiladas';
console.log(entree);

//Output
//Enclilades

// 3.Great, let’s see what happens if you try to reassign a constant variable.
/*

entree = 'Tacos'

Output:

TypeError: Assignment to constant variable.*/

// Mathematical Assignment Operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);


//Output

/*The value of levelUp: 15
The value of powerLevel: 8901
The value of multiplyMe: 352
The value of quarterMe: 288*/

// The Increment and Decrement Operator

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log(gainedDollar);
console.log(lostDollar);

//Output:
/*
4
49*/

// String Concatenation with Variables

let favoriteAnimal = 'Lion';
console.log('My favorite animal:'+favoriteAnimal);

//Output
// My favorite animal:Lion

//String Interpolation

let myName='Arpita';
let myCity = 'Agra';
console.log(`My name is ${myName} .My favorite city is ${myCity}`);

// Output
// My name is Arpita .My favorite city is Agra

// typeof operator

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

// Output
// string
// number


// ****Kelvin Weather****


// The forecast today is 293 Kelvin
const kelvin = 0;
// convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
let celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Dog Years****

let myAge = 21;
let earlyYears =2;
earlyYears *= 10.5;
myAge -= 2;
let laterYears = myAge;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Arpita'.toLowerCase();
console.log(`My name is ${myName}. I am ${myName} ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// Output
/*21
76
My name is arpita. I am arpita 19 years old in human years which is 97 years old in dog years. */



