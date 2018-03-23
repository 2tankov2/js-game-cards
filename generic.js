import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from './type'; // eslint-disable-line

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const iter = (table) => {
    if (isEmpty(table)) {
      return null;
    } if (typeTag(obj) === typeTag(head(table)) && methodName === car(contents(head(table)))) {
      return cdr(contents(head(table)));
    } return iter(tail(table));
  }; return iter(methods);
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };
