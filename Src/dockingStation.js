function DockingStation() {
  this._dockedBikes = [];
};

DockingStation.prototype.showDockedBikes = function(){
  return this._dockedBikes;
};

DockingStation.prototype.dockBike = function(bike = new Bike){
  this._dockedBikes.push(bike);
};
