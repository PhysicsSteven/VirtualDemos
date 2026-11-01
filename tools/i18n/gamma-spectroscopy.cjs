/* harvest steps: every select, checkbox and slider end, then the buttons below */
const explore = require('./explore.cjs');
module.exports = (page, grab) => explore(page, grab, { press: ['#acq', '#reveal', '#showAct', '#markBtn', '#addRow', '#roiCal', '#cLin', '#cQuad', '#yLog', '#xKeV'] });
