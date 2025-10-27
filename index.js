function convertToCelsius(f) {
  return (f - 32) * (5 / 9);
}
//need new function using f temp as param
//convert from F to C
//based on new C value, returns description

function describeTemperature(f) {
  const c = convertToCelsius(f);
  //why is above const and below is let?
  //you need to change description based on the outcome so it cant be constant, it needs to be flexible

  let description = "";
  if (c < 0) {
    description = "very cold";
  } else if (c < 20) {
    description = "cold";
  } else if (c < 30) {
    description = "warm";
  } else if (c < 40) {
    description = "hot";
  } else if (c >= 40) {
    description = "very hot";
  }
  return `${f}F is ${c}C. That is ${description}`;
}

const f = Number(prompt("What is the temperature in Farenheit now?"));
const description = describeTemperature(f);

alert(description);

//console.log ()
//when use console.log? when not?
//why use tiks here? using $ bc its a function?
