function Dict() {
  this.repr = [];
};

Dict.create = () => new Dict();

Dict.prototype.set = function(k, v) {
  for (let i = 0; i < this.repr.length; i += 2) {
    if (this.repr[i] == k) {
      this.repr[i + 1] = v;
    }
    return this;
  }
  this.repr = this.repr.concat([k, v]);
  return this;
};

Dict.prototype.get = function(k) {
  for (let i = 0; i < this.repr.length; i += 2) {
    if (this.repr[i] == k) {
      return this.repr[i + 1];
    }
  }
  return null;
};

export default Dict;
