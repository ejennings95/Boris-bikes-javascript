function Bike() {
  this._condition = 'Working'
};

Bike.prototype.showCondition = function(){
  return this._condition;
};

Bike.prototype.isBroken = function(){
  this._condition = 'Broken';
  return "The bike has been reported as broken"
};

Bike.prototype.isWorking = function(){
  this._condition = 'Working';
  return "The bike is in working condition" 
};
