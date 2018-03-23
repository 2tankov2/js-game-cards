import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
const defmetod = definer('SimpleCard');

const make = (name, persent) =>
  attach('SimpleCard', cons(name, persent));

export default make;

defmetod('getName', self => car(self));

defmetod('damage', self => cdr(self));
// END
