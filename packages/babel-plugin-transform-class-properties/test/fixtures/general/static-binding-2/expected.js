var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = {
  x: 2,
  run() {
    var _class, _temp;

    return _temp = _class = function () {
      function X() {
        _classCallCheck(this, X);

        this.a = () => {};
      }

      _createClass(X, null, [{
        key: "getX",
        value: function getX() {
          return this.x;
        }
      }]);

      return X;
    }(), (function () {
      _class.x = 4;

      _class.getXArrow = () => {
        return this.x;
      };
    }).call(_class), _temp;
  }
}.run();
