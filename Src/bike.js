function Bike() {
  this._condition = 'Working'
};

Bike.prototype.showCondition = function(){
  return this._condition;
};

Bike.prototype.isBroken = function(){
  this._condition = 'Broken';
};
