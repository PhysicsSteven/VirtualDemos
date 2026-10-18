// Loads the gamma-spectroscopy demo's physics core (between ==CORE START== and ==CORE END==) without modifying the demo.
const fs = require('fs'), path = require('path');
const html = fs.readFileSync(path.join(__dirname, '../../../demos/gamma-spectroscopy.html'), 'utf8');
const a = html.indexOf('// ==CORE START=='), b = html.indexOf('// ==CORE END==');
if (a < 0 || b < 0) throw new Error('core markers not found');
module.exports = new Function(html.slice(a, b) + '\nreturn GSCORE();')();
