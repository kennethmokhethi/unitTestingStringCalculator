let signature = require("../src/stringAdd");

//Testing the string function that accepts two parameters
describe("A function that except string numbers and return the sum:Handles two numbers", () => {
  it("If both arguments are null,return the sum as 0", () => {
    var a = null;
    var b = null;
    sum = signature(a, b);
    expect(sum).toBe(0);
  });

  it("If first argument has a value and second is null,the sum is equal to the first argument", () => {
    var a = "4";
    var b = null;
    sum = signature(a, b);
    expect(sum).toBe(4);
  });

  it("If first argument is a null and second has a value,the sum is equal to the second one", () => {
    var a = null;
    var b = "34";
    sum = signature(a, b);
    expect(sum).toBe(34);
  });

  it("Return the sum if both arguments have values", () => {
    var a = "23";
    var b = "10";
    sum = signature(a, b);
    expect(sum).toBe(33);
  });
});

//Testing the string function that accepts multiple parameters
describe("A function that except string numbers and return the sum:Handles multiple numbers", () => {
  it("Add numbers with a line", () => {
    sum = signature("1\n2,3");
    expect(sum).toBe(6);
  });

  it("Add Delimiters that include numbers", () => {
    sum = signature("//;\n1;2");
    expect(sum).toBe(3);
  });

  it("Throw an error for negative numbers", () => {
    sum = signature("1,-5");
    expect(sum).toBe("Error:number negative :-5");
  });

  it("Ignoring values that are greater tham 1000", () => {
    var a = "23";
    var b = "1005";
    sum = signature(a, b);
    expect(sum).toBe(23);
  });

  it("Add delimeters of any length", () => {
    sum = signature("//[***]\n1***2***3");
    expect(sum).toBe(6);
  });

  it("Add multiple delimeters  ", () => {
    sum = signature("//[*][%]\n1*2%3");
    expect(sum).toBe(6);
  });

  it("Numbers as delimeters", () => {
    sum = signature("//[2][3][u]\n1u52131");
    expect(sum).toBe(8);
  });
});
