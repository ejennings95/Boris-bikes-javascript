describe("ShuffleArray", function() {
  var shuffleArray;
  var array;

  beforeEach(function() {
    shuffleArray = new ShuffleArray();
    array = [1, 2, 3, 4, 5];
  });

  it("should shuffle the order of the array", function() {
    expect(shuffleArray(array)).not.toEqual(array);
  });
});
