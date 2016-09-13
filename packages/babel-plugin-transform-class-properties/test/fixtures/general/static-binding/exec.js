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

assert.equal(X.x, 3);
assert.equal(X.y(), 1);
assert.equal(X.z, X);
assert.equal(X.bar(), X);
assert.equal(X.baz(), 7);
assert.equal(X.foo(), 7);
