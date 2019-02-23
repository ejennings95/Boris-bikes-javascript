describe("DockingStation", function() {
  var dockingStation;
  var bike;
  var brokenBike;
  var biketest;

  beforeEach(function() {
    dockingStation = new DockingStation();
    bike = jasmine.createSpy('bike');
    brokenBike = jasmine.createSpyObj('brokenBike', ['showCondition']);
    workingBike = jasmine.createSpyObj('workingBike', ['showCondition']);
  });

  it("should start with dockedbikes equating to an empty array", function() {
    expect(dockingStation.showDockedBikes()).toEqual([]);
  });

  it("should be possible to dock a bike", function() {
    dockingStation.dockBike(bike);
    expect(dockingStation.showDockedBikes()).toEqual([bike]);
  });

  it("should be possible to release a bike", function() {
    dockingStation.dockBike(workingBike);
    (workingBike.showCondition).and.returnValue('Working');
    dockingStation.releaseBike();
    expect(dockingStation.showDockedBikes()).toEqual([]);
  });

  it("should be possible to see the capacity of the docking station", function() {
    expect(dockingStation._capacity).toEqual(5);
  });

  it("should be possible to have a capacity on the docking station", function() {
    for (var i = 0; i < dockingStation._capacity; i++) {
      dockingStation.dockBike(bike);
    }
    expect(function() {dockingStation.dockBike(bike);} ).toThrow(new Error("Docking station full - please find another one"));
  });

  it("should not be possible to release a bike if the docking station empty", function() {
    expect(function() {dockingStation.releaseBike();} ).toThrow(new Error("Docking station empty - please find another one"));
  });

  it("should not be possible to release a bike if it is broken", function() {
    (brokenBike.showCondition).and.returnValue('Broken');
    dockingStation.dockBike(brokenBike);
    expect(function() {dockingStation.releaseBike();} ).toThrow(new Error("Bike is Broken and cannot be released - try another one!"));
  });

});
