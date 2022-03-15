// create an alarm clock that will beep after a specified amount of time has passed.
// User can specify an unlimited number of alarms using cmd line args.

// Process to create a beep : process.stdout.write('\x07');

//  1. Create a function that accepts input of numbers
//  2. Allow it to be ran from node >> args.slice(2, args.length)
//  3. Loop through input numbers to know length required
//  4. Set the timer to beep at each specified intermission

// Allow code to take input from node & remove first 2 lines
let args = process.argv.slice(2);
const beep = function() {
  process.stdout.write('\x07')
};

// create a function to accept the input numbers
function timer(num) {
  delay = Number(num);
  console.log(num) // << input numbers
  if (!isNaN(num) && num > 0) {
    setTimeout(beep, delay * 1000)
  }
};

// Loop through the input numbers to determine the length needed
for (const num of args) {
  timer(num);
};