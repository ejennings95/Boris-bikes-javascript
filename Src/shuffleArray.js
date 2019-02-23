function ShuffleArray(array) {
  this._array  = array;
};


ShuffleArray.prototype.shuffle = function () {
  for (var i = this._array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this._array[i];
    this._array[i] = this._array[j];
    this._array[j] = temp;
  }
  return this._array;
};
