class X {
  constructor() {
    this.a = 2;
    this.b = '3';

    this.w = (a /* x = y */ /*: string*/) => 2;

    this.y = (a /*: string*/) => '2';

    this.z = (a /*: string*/) => (b /*: number*/) => ({ x: a, y: b });
  } /*:: a: number*/

  /*:: b: ?string*/ /*:: c: ?number*/

  /*:: v: (a/* x = y *-/: string) => void*/
  /*:: w: (a/* x = y *-/: string) => number*/ /*:: z: (a: string) => (b: number) => { x: string, y: number }*/ /*:: x: (a: string) => string*/ /*:: y: (a: string) => string*/
}
