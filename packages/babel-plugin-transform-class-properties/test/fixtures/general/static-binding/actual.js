var y = {
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

console.log(y.getX(), y.getXArrow())
