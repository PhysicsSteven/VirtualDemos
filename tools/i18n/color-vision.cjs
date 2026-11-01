/* harvest steps: every select option, checkbox and slider end; then the page with three.js blocked */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await require('./nothree.cjs')(page, grab);
};
