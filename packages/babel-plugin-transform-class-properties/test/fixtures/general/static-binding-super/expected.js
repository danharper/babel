var A = function () {
  function A() {
    babelHelpers.classCallCheck(this, A);
  }

  babelHelpers.createClass(A, null, [{
    key: "foo",
    value: function foo() {
      return this.x;
    }
  }]);
  return A;
}();

(function () {
  A.x = 1;
}).call(A)

var B = function (_A) {
  babelHelpers.inherits(B, _A);

  function B() {
    babelHelpers.classCallCheck(this, B);
    return babelHelpers.possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).apply(this, arguments));
  }

  return B;
}(A);

var C = function (_B) {
  babelHelpers.inherits(C, _B);

  function C() {
    babelHelpers.classCallCheck(this, C);
    return babelHelpers.possibleConstructorReturn(this, (C.__proto__ || Object.getPrototypeOf(C)).apply(this, arguments));
  }

  return C;
}(B);

(function () {
  C.x = 4;
}).call(C)

var X = function X() {
  babelHelpers.classCallCheck(this, X);
};

(function () {
  X.foo = () => {
    return this.x;
  };

  X.x = 3;
}).call(X)

var Y = function (_X) {
  babelHelpers.inherits(Y, _X);

  function Y() {
    babelHelpers.classCallCheck(this, Y);
    return babelHelpers.possibleConstructorReturn(this, (Y.__proto__ || Object.getPrototypeOf(Y)).apply(this, arguments));
  }

  return Y;
}(X);

var Z = function (_Y) {
  babelHelpers.inherits(Z, _Y);

  function Z() {
    babelHelpers.classCallCheck(this, Z);
    return babelHelpers.possibleConstructorReturn(this, (Z.__proto__ || Object.getPrototypeOf(Z)).apply(this, arguments));
  }

  return Z;
}(Y);

(function () {
  Z.x = 2;
}).call(Z)
