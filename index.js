const config = require('./configuration/config');

let algorithm;

if (config.algorithm === 'fifo') {
	algorithm  = require('./lib/fifo').fifoFn;
}
const app = () => algorithm()

module.exports = app();
