function DockingStation(capacity = 5) {
  this._dockedBikes = [];
  this._capacity = 5;
};

DockingStation.prototype.showDockedBikes = function(){
  return this._dockedBikes;
};

DockingStation.prototype.dockBike = function(bike = new Bike){
  this._dockedBikes.push(bike);
};

DockingStation.prototype.releaseBike = function(){
  this._dockedBikes.pop();
};
