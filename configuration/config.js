
module.exports = (() => {
  const configuration = {
      maxTasksProcessing: process.env.MAX_TASKS_PROCESSING || 10,
      intervalTime: process.env.INTERVAL_TIME || 2000,
      algorithm: process.env.ALGORITHM || 'fifo'
  };

  const errs = [];

  function traveseNodeSync(node) {
    Object.keys(node).forEach((prop) => {
      if (typeof node[prop] === 'object' && node[prop]) {
        traveseNodeSync(node[prop]);
      }
      else if (typeof node[prop] === 'undefined') {
        errs.push(`Missing required value for property ${prop}`);
      }
    });
  }

  function checkForErrors() {
    traveseNodeSync(configuration);
  }
  checkForErrors();

  if (errs.length > 0) throw new Error(errs);

  return configuration;
})();
