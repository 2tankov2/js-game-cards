import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { getName as getSimpleCardName, damage as simpleCardDamage } from './simpleCard'; // eslint-disable-line
import { getName as getPercentCardName, damage as percentCardDamage } from './percentCard'; // eslint-disable-line
import { typeTag } from './type'; // eslint-disable-line

const isSimpleCard = card => typeTag(card) === 'SimpleCard';
const isPercentCard = card => typeTag(card) === 'PercentCard';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит!`), log);
    }
    const card = customRandom(cards);
    const cardName = isPercentCard(card) ? getPercentCardName(card) : getSimpleCardName(card);
    const damage = isSimpleCard(card) ? simpleCardDamage(card) : percentCardDamage(card, health2);
    const newHealth = health2 - damage;
    const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;

    let starts;
    if (order === 1){
      starts = cons(cons(health1, newHealth), message);
    } else if (order === 2){
      starts = cons(cons(newHealth, health1), message);
    }

    const newLog = consList(starts, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    // END
};

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

// BEGIN (write your solution here)
export default (cards,customRandom) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
// END
