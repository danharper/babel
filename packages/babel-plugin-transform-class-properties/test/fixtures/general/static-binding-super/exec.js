class A {
  static foo() { return this.x }
  static x = 1
}

class B extends A {

}

class C extends B {
  static x = 4
}

class X {
  static foo = () => { return this.x }
  static x = 3
}

class Y extends X {

}

class Z extends Y {
  static x = 2
}

assert.equal(A.foo(), 1);
assert.equal(B.foo(), 1);
assert.equal(C.foo(), 4);

assert.equal(X.foo(), 3);
assert.equal(Y.foo(), 3);
assert.equal(Z.foo(), 2);
