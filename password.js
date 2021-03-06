//checking if the number is valid as password

function validPassword(pass) {
  let strPass = String(pass);

  //if it's 6 digit
  if (strPass.length !== 6) {
    return false;
  }

  hasDoubleDigit = false;

  for (let i = 0; i < strPass.length; i++) {
    //if the next number is less than the previous number
    if (strPass[i] > strPass[i + 1]) {
      return false;
    }
    //if it has double digit
    if (strPass[i] === strPass[i + 1]) {
      hasDoubleDigit = true;
    }
  }
  if (!hasDoubleDigit) return false;
  else return true;
}

function numberOfPassword(input) {
  let range = input.split("-");
  let counter = 0;
  for (let i = +range[0]; i <= +range[1]; i++) {
    if (validPassword(i)) {
      counter += 1;
    }
  }
  return counter;
}

console.log(numberOfPassword("245318-765747"));
