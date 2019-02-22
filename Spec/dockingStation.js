describe("DockingStation", function() {
  var dockingStation;
  var bike;

  beforeEach(function() {
    dockingStation = new DockingStation();
    bike = jasmine.createSpy('bike');
  });

  it("should start with dockedbikes equating to an empty array", function() {
    expect(dockingStation.showDockedBikes()).toEqual([]);
  });

  it("should be possible to dock a bike", function() {
    dockingStation.dockBike(bike);
    expect(dockingStation.showDockedBikes()).toEqual([bike]);
  });

  it("should be possible to release a bike", function() {
    dockingStation.dockBike(bike);
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

});
