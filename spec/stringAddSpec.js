//Testing the string function that accepts two parameters
describe("A function that except string numbers and return the sum:Handles two numbers", () => {
  it("Test for null arguments", () => {
    var a = null;
    var b = null;
    sum = strAddMultArg(a, b);
    expect(sum).toBe(0);
  });

  it("First agrument is a value and second is null", () => {
    var a = "4";
    var b = null;
    sum = strAddMultArg(a, b);
    expect(sum).toBe(4);
  });

  it("First agrument is a null and second is value", () => {
    var a = null;
    var b = "34";
    sum = strAddMultArg(a, b);
    expect(sum).toBe(34);
  });

  it("Both arguments have values", () => {
    var a = "23";
    var b = "10";
    sum = strAddMultArg(a, b);
    expect(sum).toBe(33);
  });
});

//Testing the string function that accepts multiple parameters
describe("A function that except string numbers and return the sum:Handles multiple numbers", () => {
  it("Testing numbers with a line", () => {
    sum = strAddMultArg("1\n2,3");
    expect(sum).toBe(6);
  });

  it("Delimiter", () => {
    sum = strAddMultArg("//;\n1;2");
    expect(sum).toBe(3);
  });

  it("Error handling negative numbers", () => {
    sum = strAddMultArg("1,-5");
    expect(sum).toBe("Error:number negative :-5");
  });

  it("Ignoring values that are greater tham 1000", () => {
    var a = "23";
    var b = "1005";
    sum = strAddMultArg(a, b);
    expect(sum).toBe(23);
  });

  it("Testing delimeters of any length", () => {
    sum = strAddMultArg("//[***]\n1***2***3");
    expect(sum).toBe(6);
  });

  it("Multiple delimeters ", () => {
    sum = strAddMultArg("//[*][%]\n1*2%3");
    expect(sum).toBe(6);
  });
});
