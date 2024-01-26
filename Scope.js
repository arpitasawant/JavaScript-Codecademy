// Blocks and Scope

const city = 'New York City';

function logCitySkyline() {

  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

// Output:The stars over the Empire State Building in New York City

// Global Scope

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy
}

console.log(callMyNightSky());

// Output:Night Sky: The Moon, North Star, and The Milky Way

// Block Scope

function logVisibleLightWaves(){
    const lightWaves='Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();

//   Output:Moonlight

// Scope Pollution

const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
let stars1 = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite1 + ', ' + stars1 + ', ' + galaxy1;
};

console.log(callMyNightSky());
console.log(stars1);

// Practice Good Scoping

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if(region ==='The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves)
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();

//   Output:Northern Lights
// Moonlight