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

  it("should be possible to set the bike condition to broken", function() {
    bike.isBroken();
    expect(bike.showCondition()).toEqual('Broken');
  });

  it("should be possible to set the bike condition to working", function() {
    bike.isWorking();
    expect(bike.showCondition()).toEqual('Working');
  });

});
