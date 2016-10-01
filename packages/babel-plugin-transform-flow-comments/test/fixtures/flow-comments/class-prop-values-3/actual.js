class X {
  a: number = 2
  b: ?string = '3'
  c: ?number
  d
  v: (a/* x = y */: string) => void
  w: (a/* x = y */: string) => number = (a/* x = y */: string) => 2
  x: (a: string) => string
  y: (a: string) => string = (a: string) => '2'
  z: (a: string) => (b: number) => { x: string, y: number } = (a: string) => (b: number) => ({ x: a, y: b })
}
