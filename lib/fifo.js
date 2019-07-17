const moment = require('moment');
const _ = require('lodash');

const config = require('../configuration/config');

const { todo, customer, randomSec } = require('./resource');
const sortedTodo = _.sortBy(todo, task => task.insertedTime);

const processing = [];

const fifoFn =() => {
  if(processing.length < config.maxTasksProcessing) {
    const firstEl = sortedTodo.shift();
    if(firstEl) {
      const foundCustomer = _.find(customer, c => c.id === firstEl.customerId)
      firstEl.pickTime = moment().add(randomSec(foundCustomer.taskMinSec, foundCustomer.taskMaxSec), 's');
      processing.push(firstEl);
    }
  } else if(processing.length > 0) {
    _.each(processing, task => {
      if(task && moment().isSameOrAfter(task.pickTime)) {
        const removed = _.remove(processing, pickedup => pickedup.pickTime.isSame(task.pickTime))
        _.each(removed, item => {
          const foundCustomer = _.find(customer, c => c.id === item.customerId)
          item.pickTime = moment().add(randomSec(foundCustomer.taskMinSec, foundCustomer.taskMaxSec), 's');
          sortedTodo.push(item);
        })
      }
    })
  }

  console.log(`processing ${processing.length}`);
  console.log(`todo ${sortedTodo.length}`);
  console.log('fifo');
  return `processing ${processing.length} todo ${sortedTodo.length}`;
}

setInterval(() => fifoFn(), config.intervalTime);

module.exports = {
  fifoFn
};
