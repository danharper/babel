var a = {
  x: 2,
  run() {
    return class X {
      a = () => {}

      static x = 4

      static getXArrow = () => {
        return this.x
      }

      static getX() {
        return this.x
      }
    }
  }
}.run()

assert.equal(a.getX(), 4);
assert.equal(a.getXArrow(), 4);
