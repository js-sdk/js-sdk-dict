(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function Dict() {
    this.repr = [];
  };

  Dict.create = function () {
    return new Dict();
  };

  Dict.prototype.set = function (k, v) {
    for (var i = 0; i < this.repr.length; i += 2) {
      if (this.repr[i] == k) {
        this.repr[i + 1] = v;
      }
      return this;
    }
    this.repr = this.repr.concat([k, v]);
    return this;
  };

  Dict.prototype.get = function (k) {
    for (var i = 0; i < this.repr.length; i += 2) {
      if (this.repr[i] == k) {
        return this.repr[i + 1];
      }
    }
    return null;
  };

  exports.default = Dict;
});
