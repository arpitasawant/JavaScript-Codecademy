// Functions as Data

const isTwoPlusTwo = () => {
    for (let i = 1; i <= 1000000; i++) {
      if ((2 + 2) !== 4) {
        console.log('Something has gone very wrong :(');
      }
    }
  };
  
  
  console.log(isTwoPlusTwo.name);

//   Functions as Parameters

const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
  let checkA =val+2;
  let checkB =func(val);
  if(checkA === checkB){
    return checkB;
  }
  else{
    console.log('inconsistent results');
  }
  }
  
  console.log(checkConsistentOutput(addTwo,5));

//   Output:7