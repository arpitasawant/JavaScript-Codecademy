// Repeating Tasks Manually

// The For Loop
// Write your code below

for(let counter = 5;counter<11;counter++){
    console.log(counter);
  }
  
 /*Output:5
6
7
8
9
10*/  

// Looping in Reverse

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >=0; counter--){
    console.log(counter);
  }

  /*Output:3
2
1
0 */

// Looping through Arrays

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i=0;i<vacationSpots.length;i++){
console.log('I would love to visit ' + vacationSpots[i]);
}
// Output:I would love to visit Bali
// I would love to visit Paris
// I would love to visit Tulum

// Nested Loops

// Write your code below

let bobsFollowers=['a','b','c','d'];
let tinasFollowers=['a','b','n'];
let mutualFollowers=[];

for(let i=0;i<bobsFollowers.length;i++){
  for(let j=0;j<tinasFollowers.length;j++){
  if(bobsFollowers[i]===tinasFollowers[j]){
    mutualFollowers.push(bobsFollowers[i]);
  }
}
}
console.log(mutualFollowers);

// Output:[ 'a', 'b' ]

// The While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard ;
while(currentCard !=='spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// Output:spade

// Do...While Statements

// Write your code below

let cupsOfSugarNeeded=5;
let cupsAdded =0;
do{
  cupsAdded +=1;
  console.log(cupsAdded);
}
while(cupsAdded<cupsOfSugarNeeded);

/* Output:1
2
3
4
5*/

// The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i=0;i<rapperArray.length;i++){
  console.log(rapperArray[i]);
  console.log(rapperArray[2]);
  break;

}
console.log("And if you don't know, now you know.");

// Output:Lil' Kim
// Notorious B.I.G.
// And if you don't know, now you know.