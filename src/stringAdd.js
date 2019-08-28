class StringCalculatorP2{
// Function that add string numbers
function strAddTwoArg(a, b) {
    var sum = 0;
    var numA = Number(a);
    var numB = Number(b);

    if ((a != null) && (b != null)) {
        //summing the two arguments
        sum = numA + numB;

    } else if ((a != null) && (b == null)) { //return A if B null
        return numA;
    } else if ((a == null) && (b != null)) {//return B if A null
        return numB;
    } else {
        return sum;
    }

    return sum;

}

//Function that accept multiple number of arguments
function strAddMultArg() {
    var sum = 0;
    var numArray = [];
    var strNum = /-?[0-9]+/g;

    //Extracting numbers from the string
    for (let i = 0; i < arguments.length; i++) {
        numArray[i] = arguments[i].match(strNum).map(Number);
    }

    //Error handling for negative numbers
    try {
        for (let c = 0; c < numArray[0].length; c++) {

            if (numArray[0][c] < 0) throw "number negative :" + numArray[0][c];
        }

    } catch (err) {
        return "Error:" + err;
    }

    //Summing the arguments
    for (let c = 0; c < numArray[0].length; c++) {

        //Ignoring numbers that are greater than 1000
        if (numArray[0][c] > 1000) {
            numArray[0][c] = 0;
        }
        sum += numArray[0][c];
    }

    return sum;

}


}




