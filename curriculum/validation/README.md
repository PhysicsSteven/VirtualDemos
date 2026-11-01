# Physics tests

`test_<demo>.cjs` checks a demo's physics against independent analytic or numerical references. Each test pulls the code between a
demo's `// ==CORE START==` and `// ==CORE END==` markers with `core('<demo>', 'fn,...')` from `demo_source.cjs`, so the test
always runs the code the page runs. CI runs every Node test on each push (`.github/workflows/physics-labs.yml`). Tests that need
a browser (they mention playwright or chromium) are skipped there; run them locally with `NODE_PATH` set to the Playwright install.

    node curriculum/validation/test_pendulum.cjs

Other files:
- `check_math.cjs` checks the math in the worksheets (`npm install --no-save mathjax-full@3.2.2` first).
- `benchmark_gamma.cjs`, `GAMMA_BENCHMARK_RESULTS.json` and `GAMMA_PUBLISHED_COMPARISON.md` compare the Gamma Spectroscopy
  detector model with published NaI(Tl) measurements.

A test checks the model, so a readout that agrees with another readout from the same code is not independent evidence.
