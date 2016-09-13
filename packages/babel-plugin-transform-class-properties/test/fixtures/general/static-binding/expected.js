var X = function () {
  function X() {
    babelHelpers.classCallCheck(this, X);
  }

  babelHelpers.createClass(X, null, [{
    key: "bar",
    value: function bar() {
      return this.z;
    }
  }, {
    key: "baz",
    value: function baz() {
      return this.x + this.y() + this.z.x;
    }
  }, {
    key: "y",
    value: function y() {
      return 1;
    }
  }]);
  return X;
}();

(function () {
  X.foo = () => this.x + this.y() + this.z.x;

  X.x = 3;
  X.z = this;
}).call(X)
