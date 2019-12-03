//Main function.Function that accept multiple number of arguments
function signature() {
  let sum = 0;
  if (arguments.length == 2) {
    if (arguments[0] == null && arguments[1] != null) {
      //if first argument is null return the second
      return Number(arguments[1]);
    } else if (arguments[0] != null && arguments[1] == null) {
      //if second argument is null return the first
      return Number(arguments[0]);
    } else if (arguments[0] == null && arguments[1] == null) {
      //if both are null,return zero
      return sum;
    }
  }

  if (checkNumber(arguments[0])) {
    //Calling the function that sum up numbers separeted by a number
    sum = summing_Nums_Separated_By_Num(arguments);
  } else {
    let numArray = [];
    //Calling the function that extract numbers only
    numArray = extract_Nums(arguments);

    //Error handling for negative numbers
    try {
      for (let c = 0; c < numArray.length; c++) {
        if (numArray[c] < 0) throw "number negative :" + numArray[c];
      }
    } catch (err) {
      return "Error:" + err;
    }

    //Calling the function for summing the arguments
    sum = sumArg(numArray);
  }

  return sum;
}

//Utility function1.Function that checks if numbers exist within sqaure brackets
function checkNumber(input) {
  let reg = /(?<=\[).\d?(?=\])/g; //Extracting content inside square brackets excluding the sqaure brackets
  let sqbr = input.indexOf("["); //Checking if an square brackets exits
  if (sqbr > 0 && input != null) {
    let numArr1 = input.match(reg); //Stores content inside the sqaure brackets if exists
    if (numArr1 != null) {
      let numArr = input.match(reg).map(Number);
      let nonNum = numArr.indexOf("NaN");
      let sNum = numArr.indexOf("number");
      if (nonNum === false || sNum) {
        //All content in a array is a number
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

//Utility function 2.Summing the elements in the array
function sumArg(Arr) {
  let sumAr = 0;
  for (let c = 0; c < Arr.length; c++) {
    //Ignoring numbers that are greater than 1000
    if (Arr[c] > 1000) {
      Arr[c] = 0;
    }
    sumAr += Arr[c];
  }
  return sumAr;
}

//Utility function 3.Function that return a sum of numbers separated by a number
function summing_Nums_Separated_By_Num(arr) {
  let sum = 0;
  let numberString = arr[0].match(/(?<=\n).*/g)[0];
  let delimitersString = arr[0].match(/(?<=\/\/).*?(?=\n)/g)[0];
  let delimiter = delimitersString.match(/(?<=\[).*?(?=\])/g).join("");
  let numberSplittingRegex = new RegExp(`[${delimiter}]`, "g");
  let numberStringSplitByDelimiter = numberString.split(numberSplittingRegex);
  sum = numberStringSplitByDelimiter
    .map(x => Number(x))
    .reduce((sum, n) => sum + n);
  return sum;
}

//Utility function 3.Function that extract numbers only and stores them in a array
function extract_Nums(arr) {
  var strNum = /((\[0-9])|(-?[0-9]+))/g;
  let numArray1 = [];
  let twoDarry = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(strNum).map(Number).length > 1) {
      for (let c = 0; c < arr[i].match(strNum).map(Number).length; c++) {
        twoDarry[c] = arr[i].match(strNum).map(Number); //Extracting numbers from the string
        numArray1[c] = twoDarry[i][c]; ///Storing the 2D array into the existing 1D array
      }
    } else {
      numArray1[i] = Number(arr[i]);
    }
  }
  return numArray1;
}

module.exports = signature;
