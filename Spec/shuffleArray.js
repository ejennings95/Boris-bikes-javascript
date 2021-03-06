describe("ShuffleArray", function() {
  var shuffleArray;
  var array;

  beforeEach(function() {
    array = [1, 2, 3, 4, 5];
    shuffleArray = new ShuffleArray(array);
  });

  it("should shuffle the order of the array", function() {
    expect(shuffleArray.shuffle()).not.toEqual([1, 2, 3, 4, 5]);
  });
});
