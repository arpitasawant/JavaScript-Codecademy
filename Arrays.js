// Create an Array

const hobbies =['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(hobbies);

// Output:[ 'Keep a journal', 'Take a falconry class', 'Learn to juggle' ]

// Accessing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[3]);

// Output:Fortune favors the brave.
// undefined

// Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

// Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
console.log(condiments);
condiments=['Mayo'];
console.log(condiments);

utensils [3]='Spoon';
console.log(utensils);

// Output:[ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
// [ 'Mayo' ]
// [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

// The .length property

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// Output:3

// The .push() Method

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('water','drink');
console.log(chores);

// Output:[ 'wash dishes', 'do laundry', 'take out trash', 'water', 'drink' ]

// The .pop() Method

const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores1);

// Output:[ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

// More Array Methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


/*[ 'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
[ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
[ 'bananas', 'coffee beans', 'brown rice' ]
[ 'popcorn',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains' ]
 4
 */

// Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement(newArr){
newArr.pop();
}
removeElement(concept);
console.log(concept);

// Output:[ 'arrays', 'can', 'be', 'MUTATED' ]
// [ 'arrays', 'can', 'be' ]

// Nested Arrays

let numberClusters =[[1,2],[3,4],[5,6]];
const target =numberClusters[2][1];
console.log(target);

// Output:6