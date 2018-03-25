import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards, customRandom) => {
  // BEGIN (write your solution here)
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0 || health2 <= 0) {
      const getLog = {
        health1: head(log).health1,
        health2: head(log).health2,
        message1: `${name1} был убит`,
      };
      return consList(getLog, log);
    }
    const card = customRandom(cards);
    const cardName = card.name;

    let points;
    let starts;
    if (order === 1) {
      points = card.damage(health2);
      starts = {
        health1,
        health2: health2 - points,
        message: `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${points}'`,
      };
    } else if (order === 2) {
      points = card.damage(health1);
      starts = {
        health1: health1 - points,
        health2,
        message: `Игрок '${name2}' применил '${cardName}' против '${name1}' и нанес урон '${points}'`,
      };
    }
    return iter(starts.health1, name1, starts.health2, name2, order === 1 ? 2 : 1, consList(starts, log));
  };
  // END

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
