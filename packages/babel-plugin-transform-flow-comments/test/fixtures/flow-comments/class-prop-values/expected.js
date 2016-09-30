class X {
  foo = 2;
  bar = 3; /*:: bar: number */
  /*:: baz: ?string*/

  qux = { foo: 's' }; /*:: qux: { foo: string | bar | baz } */
  /*:: x: (a: string) => string*/

  y = (a /*: string*/) => '2'; /*:: y: (a: string) => string */
  z = (a /*: string*/) => (b /*: number*/) => ({ x: a, y: b }); /*:: z: (a: string) => (b: number) => { x: string, y: number } */
}
