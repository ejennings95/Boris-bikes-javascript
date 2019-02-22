describe("Bike", function() {
  var bike;

  beforeEach(function() {
    bike = new Bike();
  });

  it("should be a defined function", function() {
    expect(bike).toBeDefined();
  });

  it("should start in working condition", function() {
    expect(bike.showCondition()).toEqual('Working');
  });

});
