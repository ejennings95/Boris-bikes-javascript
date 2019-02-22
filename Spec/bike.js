describe("Bike", function() {
  var bike;

  beforeEach(function() {
    bike = new Bike();
  });

  it("should be a defined function", function() {
    expect(bike).toBeDefined();
  });

});
