/* resonators: the shared steps, then a 320 px phone, where the plot titles fall back to their shortest wording */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => { await explore(page, grab); await explore.narrow(page, grab); };
