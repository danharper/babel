class X {
  constructor() {
    this.a = 2;
    this.b = '3';

    this.w = (a /* blah = blah */ /* x = y */ /*: string*/) => 2;

    this.y = (a /*: string*/) => '2';

    this.z = (a /*: string*/) => (b /*: number*/) => ({ x: a, y: b });
  } /*:: a: number*/

  /*:: b: ?string*/ /*:: c: ?number*/
  /*:: v: (a/* x = y *-/: string) => /* blah = blah *-/ void*/
  /*:: w: (a/* x = y *-/: string) => /* blah = blah *-/ number*/ /*:: z: (a: string) => (b: number) => { x: string, y: number }*/ /*:: x: (a: string) => string*/ /*:: y: (a: string) => string*/
}
