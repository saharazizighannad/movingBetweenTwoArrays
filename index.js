const config = require('./configuration/config');

let algorithm;

if (config.algorithm === 'fifo') {
	algorithm  = require('./lib/fifo').fifoFn;
} else if (config.algorithm === 'roundRobin') {
	algorithm  = require('./lib/roundRobin').roundRobinFn;
} else if (config.algorithm === 'balancedRoundRobin') {
	algorithm  = require('./lib/balancedRoundRobin').balancedRoundRobinFn;
}
const app = () => algorithm()

module.exports = app();
