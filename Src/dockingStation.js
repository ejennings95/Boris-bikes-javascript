function DockingStation(capacity = 5) {
  this._dockedBikes = [];
  this._capacity = capacity;
};

DockingStation.prototype.showDockedBikes = function(){
  return this._dockedBikes;
};

DockingStation.prototype.showCapacity = function(){
  return this._capacity;
};

DockingStation.prototype.dockBike = function(bike = new Bike){
  if (this.isFull()) { throw new Error("Docking station full - please find another one"); }
  this._dockedBikes.push(bike);
  return "Thank you! You have successfully docked your Bike."
};

DockingStation.prototype.releaseBike = function(){
  if (this.isEmpty()) { throw new Error("Docking station empty - please find another one"); }
  this.shuffleBikes();
  if (this.isBroken()){ throw new Error("Bike is Broken and cannot be released - try another one!"); }
  this._dockedBikes.pop();
  return "Enjoy your ride! Please update the bikes condition if you have any problems."
};

DockingStation.prototype.shuffleBikes = function (shuffleArray = new ShuffleArray(this._dockedBikes)) {
  shuffleArray.shuffle();
  this._dockedBikes = shuffleArray._array;
};

DockingStation.prototype.isFull = function () {
  return (this._dockedBikes.length >= this._capacity);
};

DockingStation.prototype.isEmpty = function () {
  return (this._dockedBikes.length === 0);
};

DockingStation.prototype.isBroken = function () {
  return (this._dockedBikes[this._dockedBikes.length -1].showCondition() === 'Broken');
};
