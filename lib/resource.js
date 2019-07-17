const moment = require('moment');

const todo = [
  {id: 'id1', customerId: 'cus1', insertedTime: moment().add(5, 's')},
  {id: 'id2', customerId: 'cus2', insertedTime: moment().add(10, 's')},
  {id: 'id3', customerId: 'cus3', insertedTime: moment().add(20, 's')},
  {id: 'id4', customerId: 'cus4', insertedTime: moment().add(30, 's')},
  {id: 'id5', customerId: 'cus5', insertedTime: moment().add(40, 's')},
  {id: 'id6', customerId: 'cus1', insertedTime: moment().add(5, 's')},
  {id: 'id7', customerId: 'cus2', insertedTime: moment().add(5, 's')},
  {id: 'id8', customerId: 'cus3', insertedTime: moment().add(5, 's')},
  {id: 'id9', customerId: 'cus2', insertedTime: moment().add(5, 's')},
  {id: 'id10', customerId: 'cus1', insertedTime: moment().add(5, 's')},
];

const customer = [
  {id: 'cus1', taskMinSec: 5, taskMaxSec: 15},
  {id: 'cus2', taskMinSec: 5, taskMaxSec: 15},
  {id: 'cus3', taskMinSec: 5, taskMaxSec: 15},
  {id: 'cus4', taskMinSec: 5, taskMaxSec: 15},
  {id: 'cus5', taskMinSec: 5, taskMaxSec: 15}
];

const randomSec = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = {
  todo,
  customer,
  randomSec
};
