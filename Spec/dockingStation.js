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


});
