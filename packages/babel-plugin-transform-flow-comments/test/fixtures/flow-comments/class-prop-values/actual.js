class X {
  foo = 2
  bar: number = 3
  baz: ?string
  qux: { foo: string | bar | baz } = { foo: 's' }
  x: (a: string) => string
  y: (a: string) => string = (a: string) => '2'
  z: (a: string) => (b: number) => { x: string, y: number } = (a: string) => (b: number) => ({ x: a, y: b })
}
