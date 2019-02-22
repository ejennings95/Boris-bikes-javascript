describe("DockingStation", function() {
  var dockingStation;

  beforeEach(function() {
    dockingStation = new DockingStation();
  });

  it("should start with dockedbikes equating toan empty array", function() {
    expect(dockingStation.showDockedBikes()).toEqual([]);
  });

});
