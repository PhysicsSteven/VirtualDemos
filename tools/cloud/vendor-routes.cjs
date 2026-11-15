/* For your own Playwright scripts in a cloud session: await require('<repo>/tools/cloud/vendor-routes.cjs')(contextOrPage)
   serves three.js r128, MathJax 3.2.2 and anchor-js from the npm packs setup.sh put in $VD_VENDOR (default ~/vendor), since
   cdnjs and jsdelivr are blocked there, and drops Google Fonts. The repo's own check tools already do this through VD_THREE. */
const fs = require('fs'), path = require('path'), os = require('os');
const V = process.env.VD_VENDOR || path.join(os.homedir(), 'vendor');
module.exports = async (ctx) => {
  await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: path.join(V, 'three/package/build/three.min.js') }));
  await ctx.route(/mathjax@3\.2\.2\//, (r) => { const f = path.join(V, 'mj/package', r.request().url().split('mathjax@3.2.2/')[1].split('?')[0]);
    return fs.existsSync(f) ? r.fulfill({ path: f }) : r.fulfill({ status: 404, body: '' }); });
  await ctx.route(/cdnjs\.cloudflare\.com\/.*anchor/, (r) => r.fulfill({ path: path.join(V, 'aj/package/anchor.min.js') }));
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
};
