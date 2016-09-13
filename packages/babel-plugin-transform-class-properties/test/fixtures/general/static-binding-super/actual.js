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
