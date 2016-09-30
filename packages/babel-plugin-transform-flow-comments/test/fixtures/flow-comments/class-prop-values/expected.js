class X {
  foo = 2;
  bar = 3; /*:: bar: number*/
  /*:: baz: ?string*/

  qux = { foo: 's' }; /*:: qux: { foo: string | bar | baz }*/
  /*:: v: (a/* x = y *-/: string) => /* blah = blah *-/ void*/

  w = (a /* blah = blah */ /* x = y */ /*: string*/) => 2; /*:: w: (a/* x = y *-/: string) => /* blah = blah *-/ number*/
  /*:: x: (a: string) => string*/

  y = (a /*: string*/) => '2'; /*:: y: (a: string) => string*/
  z = (a /*: string*/) => (b /*: number*/) => ({ x: a, y: b }); /*:: z: (a: string) => (b: number) => { x: string, y: number }*/
}
