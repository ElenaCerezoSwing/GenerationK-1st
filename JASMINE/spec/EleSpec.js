describe("appplication", function () {

  beforeEach(startApp);
  var leftInput = document.getElementById("leftInput");
  var rightInput = document.getElementById("rightInput");
  const toLeftButton = document.getElementById("toLeft");
  const toRightButton = document.getElementById("toRight");

  it("moves to right", function () {

    expect(leftInput.value).toEqual("");
    toRightButton.click();
    var expectedValue = leftInput.value;
    expect(expectedValue).toEqual(rightInput.value);
  });

  it("moves to left", function () {

    expect(rightInput.value).toEqual("");
    toLeftButton.click();
    var expectedValue = rightInput.value;
    expect(expectedValue).toEqual(leftInput.value);
  });
});
