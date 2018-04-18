describe("appplication", function () {

  beforeEach(function () { startApp() });


  it("moves to right", function () {


    var leftInput = document.getElementById("leftInput");
    var rightInput = document.getElementById("rightInput");
    const toLeftButton = document.getElementById("toLeft");
    const toRightButton = document.getElementById("toRight");

    expect(leftInput.value).toEqual("");
    toRightButton.click();
    var expectedValue = leftInput.value;
    expect(expectedValue).toEqual(rightInput.value);
  });

  it("moves to left", function () {


    const toLeftButton = document.getElementById("toLeft");
    const toRightButton = document.getElementById("toRight");
    var leftInput = document.getElementById("leftInput");
    var rightInput = document.getElementById("rightInput");

    expect(rightInput.value).toEqual("");
    toLeftButton.click();
    var expectedValue = rightInput.value;
    expect(expectedValue).toEqual(leftInput.value);
  });
});
