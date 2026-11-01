/* harvest steps: every select, checkbox and slider end (not the list of 300 real stars: their names are not translated) */
const explore = require('./explore.cjs');
module.exports = (page, grab) => explore(page, grab, { skip: '#realPick' });
