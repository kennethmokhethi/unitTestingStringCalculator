//Function that accept multiple number of arguments
function strAddMultArg() {
  // let another=sb.match(/(?<=\[).\d?(?=\])/g) extract content inside brackets without square brackets

  ///Extract content inside square brackets
  // let stringNums = arguments[0].match(/\[\d*?\]/g).join("");
  // let firstEleme = Number(stringNums[1]);
  let sum = 0;
  if (arguments.length == 2) {
    if (arguments[0] == null && arguments[1] != null) {
      return Number(arguments[1]);
    } else if (arguments[0] != null && arguments[1] == null) {
      return Number(arguments[0]);
    } else if (arguments[0] == null && arguments[1] == null) {
      return sum;
    }
  }

  // let t = typeof firstEleme;
  // if (t === "number") {
  if (checkNumber(arguments[0])) {
    let numberString = arguments[0].match(/(?<=\n).*/g)[0];
    let delimitersString = arguments[0].match(/(?<=\/\/).*?(?=\n)/g)[0];
    let delimiter = delimitersString.match(/(?<=\[).*?(?=\])/g).join("");
    let numberSplittingRegex = new RegExp(`[${delimiter}]`, "g");
    let numberStringSplitByDelimiter = numberString.split(numberSplittingRegex);
    sum = numberStringSplitByDelimiter
      .map(x => Number(x))
      .reduce((sum, n) => sum + n);
  } else {
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

function checkNumber(input) {
  let reg = /(?<=\[).\d?(?=\])/g;
  let sqbr = input.indexOf("[");
  if (sqbr > 0 && input != null) {
    // let numArr = input.match(reg).map(Number);
    let numArr1 = input.match(reg);
    if (numArr1 != null) {
      let numArr = input.match(reg).map(Number);
      let nonNum = numArr.indexOf("NaN");
      let sNum = numArr.indexOf("number");
      if (nonNum === false || sNum) {
        ///All content in a array is a number
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

// function checkForNull() {
//   let sum = 0;
//   let dg = arguments[0][0];
//   let dg1 = arguments[0][1];
//   if (arguments[0][0] == null && arguments[0][1] != null) {
//     return Number(arguments[1]);
//   } else if (arguments[0][0] != null && arguments[0][1] == null) {
//     return Number(arguments[0]);
//   }
//   return sum;
// }
// let var1 = strAddMultArg("[***]\n1***2***3");
// console.log(var1);

// let var2 = strAddMultArg("//[2][3][u]\n1u52131");
// console.log(var2);

// var a = "23";
// var b = "1005";
// sum = strAddMultArg(a, b);
// console.log(sum);

// var a = null;
// var b = null;
// sum = strAddMultArg(a, b);
// console.log(sum);

// var a = "23";
// var b = "10";
// sum = strAddMultArg(a, b);
// console.log(sum);

sum = strAddMultArg("//[***]\n1***2***3");
console.log(sum);
