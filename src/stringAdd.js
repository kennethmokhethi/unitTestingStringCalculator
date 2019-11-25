//Function that accept multiple number of arguments
function strAddMultArg() {
  ///Extract content inside square brackets
  let stringNums = arguments[0].match(/\[\d*?\]/g).join("");
  let firstEleme = Number(stringNums[1]);

  if (typeof firstEleme === Number) {
    let numberString = arguments[0].match(/(?<=\n).*/g)[0];
    let delimitersString = arguments[0].match(/(?<=\/\/).*?(?=\n)/g)[0];
    let delimiter = delimitersString.match(/(?<=\[).*?(?=\])/g).join("");
    let numberSplittingRegex = new RegExp(`[${delimiter}]`, "g");
    let numberStringSplitByDelimiter = numberString.split(numberSplittingRegex);
    var sum = numberStringSplitByDelimiter
      .map(x => Number(x))
      .reduce((sum, n) => sum + n);
  } else {
    var sum = 0;
    var numArray = [];
    var strNum = /((\[0-9])|(-?[0-9]+))/g;
    if (arguments[0] != null) {
      if (arguments[1] != null || arguments.length === 1) {
        let twoDarry = [];
        for (let i = 0; i < arguments.length; i++) {
          if (arguments[i].match(strNum).map(Number).length > 1) {
            for (
              let c = 0;
              c < arguments[i].match(strNum).map(Number).length;
              c++
            ) {
              twoDarry[c] = arguments[i].match(strNum).map(Number); //Extracting numbers from the string
              numArray[c] = twoDarry[i][c]; ///Storing the 2D array into the existing 1D array
            }
          } else {
            numArray[i] = Number(arguments[i]);
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
        //Summing the arguments
        for (let c = 0; c < numArray.length; c++) {
          //Ignoring numbers that are greater than 1000
          if (numArray[c] > 1000) {
            numArray[c] = 0;
          }
          sum += numArray[c];
        }
      } else {
        //if the second argument is null,sum = first argument
        sum = Number(arguments[0]);
      }
    } else {
      //if the first argument is null,sum =second  argument
      sum = Number(arguments[1]);
    }
  }

  return sum;
}

let wh = strAddMultArg("//[2][3][u]\n1u52131");
console.log(wh);
