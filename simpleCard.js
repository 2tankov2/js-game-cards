import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { attach, contents } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
export const make = (name, persent) =>
  attach('SimpleCard', cons(name, persent));

export const getName = self => car(contents(self));

export const damage = self => cdr(contents(self));
// END
