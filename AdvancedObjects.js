// The this Keyword

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo: function() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  console.log(robot.provideInfo());

// Output:
/*const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo: function() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};
console.log(robot.provideInfo());*/

// Arrow Functions and this

const robot1 = {
    energyLevel: 100,
    checkEnergy: function() {
      console.log(`Energy is currently at ${this.energyLevel}%.`);
    }
  };
  
  robot1.checkEnergy();

//   Output: Energy is currently at 100%.

// Privacy

const robot2 = {
    _energyLevel: 100,
    recharge() {
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
    }
  };
  
  
  robot2._energyLevel = 'high';
  
  robot2.recharge();

//   Output:Recharged! Energy is currently at high30%.

// Getters

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
  
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  
  
  console.log(robot.energyLevel);

//   Output:My current energy level is 100

// Setters

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
  
    get numOfSensors() {
      if (typeof this._numOfSensors === 'number') {
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.';
      }
    },
  
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  
  
  robot.numOfSensors = 100;

  console.log(robot.numOfSensors);

//   Output=100

// Factory Functions

const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep: () => {
        console.log('Beep Boop');
      }
    };
  };
  
  const tinCan = robotFactory('P-500', true);
  
  tinCan.beep();

//   Output:
// Beep Boop
  
// Property Value Shorthand

const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    };
  };
  
  
  const newRobot = robotFactory('P-501', false);
  console.log(newRobot.model);
  console.log(newRobot.mobile);

//   Output:P-501
// false

// Destructured Assignment

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  
  const { functionality } = robot;
  
  
  functionality.beep();

//   Output: Beep Boop

// Built-in Object Methods

const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
  };
  
  const robotKeys = Object.keys(robot);
  console.log(robotKeys);
  
  const robotEntries = Object.entries(robot);
  console.log(robotEntries);
  
  const newRobot = Object.assign({}, robot, { laserBlaster: true, voiceRecognition: true });
  console.log(newRobot);

  /**Output
   * [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]
{ model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75,
  laserBlaster: true,
  voiceRecognition: true }
   */