// Creating Object Literals

// Write your fasterShip object literal below
let fasterShip ={
    'color':'silver',
    'Fuel Type': 'Turbo Fuel'
  };

// Accessing Properties

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  let crewCount=spaceship.numCrew;
  let planetArray =spaceship.flightPath;
  
//   Bracket Notation

let spaceship1 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  let isActive =spaceship1['Active Mission'];
  // Write your code below
  console.log(spaceship1[propName]);

//   Output:true


// Property Assignment

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship2.color='glorious gold';
  spaceship2.numEngines=9;
  delete spaceship2['Secret Mission'];

//   Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat: function () { 
    console.log(retreatMessage);
  },
  takeOff: function () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();

// Output:We no longer wish to conquer your planet. It is full of dogs, which we do not care for.
// Spim... Borp... Glix... Blastoff!

// Nested Objects

let spaceship = {
    passengers: [
      {
        name: 'Alice',
        age: 28,
        destination: 'Jupiter'
      }
      
    ],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  
  console.log(capFave);
  let firstPassenger = spaceship.passengers[0];
  
  console.log(firstPassenger);
//   Output:cookies
// { name: 'Alice', age: 28, destination: 'Jupiter' }

// Pass By Reference

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  function greenEnergy(obj) {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  function remotelyDisable(obj) {
    obj.disabled = true;
  }
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  
  console.log(spaceship);

  
/*Output:
{ 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }*/

//   Looping Through Objects

let spaceship = {
    crew: {
      captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
      },
      'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
      },
      medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log('Jets on!') }
      },
      translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
      }
    }
  };
  
  for (let role in spaceship.crew) {
    console.log(`${spaceship.crew[role].name}: ${spaceship.crew[role].degree}`);
  }
  
//   Output:Lily: Computer Engineering
// Dan: Aerospace Engineering
// Clementine: Physics
// Shauna: Conservation Science