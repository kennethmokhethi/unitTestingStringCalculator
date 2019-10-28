//Function that accept multiple number of arguments
function strAddMultArg() {
  var sum = 0;
  var numArray = [];
  var strNum = /-?[0-9]+/g;

  if (arguments[0] != null) {
    if (arguments[1] != null || arguments.length === 1) {
      //Extracting numbers from the string
      let twoDarry = [];
      for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].match(strNum).map(Number).length > 1) {
          for (
            let c = 0;
            c < arguments[i].match(strNum).map(Number).length;
            c++
          ) {
            twoDarry[c] = arguments[i].match(strNum).map(Number);
            numArray[c] = twoDarry[i][c]; /////split
          }
        } else {
          numArray[i] = arguments[i];
        }
      }

      //Error handling for negative numbers
      try {
        for (let c = 0; c < numArray.length; c++) {
          if (numArray[c] < 0) throw "number negative :" + numArray[c];
        }
      } catch (err) {
        return "Error:" + err;
      }
      console.log(numArray);
      //Summing the arguments
      for (let c = 0; c < numArray.length; c++) {
        //Ignoring numbers that are greater than 1000
        if (numArray[c] > 1000) {
          numArray[c] = 0;
        }
        sum += Number(numArray[c]);
      }
    } else {
      sum = Number(arguments[0]);
    }
  } else {
    sum = Number(arguments[1]);
  }

  return sum;
}
