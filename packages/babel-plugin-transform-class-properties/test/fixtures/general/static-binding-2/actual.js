class X {
  static foo = () => this.x + this.y() + this.z.x
  static bar() {
    return this.z
  }
  static baz() {
    return this.x + this.y() + this.z.x
  }
  static x = 3
  static y() { return 1 }
  static z = this
}
