/* harvest steps: every select option, checkbox and slider end; every setup in 3D and Flat; the page with three.js blocked;
   the free body diagram's heading wraps only in a narrow picture */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await require('./presets-views.cjs')(page, grab, { views: '[data-view]' });
  await require('./nothree.cjs')(page, grab);
};
