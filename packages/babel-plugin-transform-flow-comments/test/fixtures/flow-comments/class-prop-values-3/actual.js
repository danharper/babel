class X {
  a: number = 2
  b: ?string = '3'
  c: ?number
  d
  v: (a/* x = y */: string) => /* blah = blah */ void
  w: (a/* x = y */: string) => /* blah = blah */ number = (a/* x = y */: string) => /* blah = blah */ 2
  x: (a: string) => string
  y: (a: string) => string = (a: string) => '2'
  z: (a: string) => (b: number) => { x: string, y: number } = (a: string) => (b: number) => ({ x: a, y: b })
}
