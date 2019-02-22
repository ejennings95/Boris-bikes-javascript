function DockingStation(capacity = 5) {
  this._dockedBikes = [];
  this._capacity = 5;
};

DockingStation.prototype.showDockedBikes = function(){
  return this._dockedBikes;
};

DockingStation.prototype.dockBike = function(bike = new Bike){
  if (this._dockedBikes.length >= this._capacity){
    throw new Error("Docking station full - please find another one");
  }
  this._dockedBikes.push(bike);
};

DockingStation.prototype.releaseBike = function(){
  this._dockedBikes.pop();
};
