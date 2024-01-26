// Function Declarations

function getReminder(){
    console.log('Water the plants.');
  }
   getReminder();
  
   function greetInSpanish(){
    console.log('Buenas tardes.')
   }

// Output:Water the plants.

// Calling a Function

function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  
  sayThanks();

//   Output:Thank you for your purchase! We appreciate your business.

// Parameters and Arguments

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Arpita');

//   Output:Thank you for your purchase Arpita! We appreciate your business.

// Default Parameters

function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  makeShoppingList();

// Output:Remember to buy milk
// Remember to buy bread
// Remember to buy eggs

// Return

function monitorCount(rows,columns){
    return rows*columns;
    }
    const numOfMonitors = monitorCount(5,4);
    console.log(numOfMonitors);

// Output:20

// Helper Functions

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows,columns){
    return monitorCount(rows, columns)*200;
  }
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);

//   Output:4000

// Function Expressions

const plantNeedsWater = function(day){
    if(day ==='Wednesday'){
      return true;
    }
    else{
      return false;
    }
  }
  
  
  console.log(plantNeedsWater('Tuesday'));

// Output:false

// Arrow Functions

const plantNeedsWater2 = (day) =>{
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

// Concise Body Arrow Functions  

const plantNeedsWater1 = day => 
  day === 'Wednesday' ? true : false;
