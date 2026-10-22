# OpenStax alignment: executed checkpoint, 2026-10-22

Map first: feature commit `c03ab7e1b9794f139af22ab72ba59eeacd8c9900`. All 62 catalog demos mapped once, with 209 section records and explicit gaps. Sources: owner-supplied University Physics Volumes 1/2 PDF contents; optional Volume 3 chapter outlines on the official OpenStax site. Main at the map draft was e6be55f; the current handout source is **24564e476e0d5ac1acf737527c18550cfda75172**. Node v24.19.0. No demo HTML was edited by GPT; main source updates were merged into the feature branch.

## Physics II documents

Nine student companions: Coulomb/potential, Gauss, capacitors, DC networks (new), RC, magnetic motion/Hall, Faraday/Two coils, RLC and optional AC. Revised dense/starter material into the plain e/m structure; retained and updated already-plain Circuits material. All have OpenStax volume/section references. Optional AC remains going further rather than a required course unit. No new lecture-demo handouts for currents-fields or em-waves. Basic optics is optional; no optics rewrite in this checkpoint.

Matching private instructor guides, question answers, rubric and reference generators/results are in **TeacherKeys f75bc1d0ccf0e7be825387b42081e0df5e79b5a1**, under its existing `curriculum/curriculum-virtual-lab-starter-kits/curriculum/` tree. No instructor answers or numerical solution tables were placed in this public repository.

## Executed checks

Commands run from the VirtualDemos root, `node curriculum/validation/test_<name>.cjs`:

| Suite | Result |
|---|---|
| circuits | 7 groups passed |
| circuits_readings | 6 groups passed |
| faraday | 22 groups passed |
| gauss_law | 12 groups passed |
| capacitors | 12 groups passed |
| coulomb_sandbox | 8 groups passed |
| magnetic_force | 11 groups passed, including new Hall strip |
| springs | 10 groups passed, including unknown spring (preparation for Physics I) |
| textbook_map | Contract passed; rerun after map updates |
| main_lab_controls | **Blocked before any browser case**: Playwright Chromium executable missing |

The first six suites ran on e6be55f. Their demo sources are unchanged by 24564e4, which changes magnetic-force and springs. Those two suites were run after integration. Do not count the missing browser as a physics pass or a successful workflow. No browser CI reinstated and no remote CI result is claimed here.

Private reproducible calculations executed:

- `python3 generate_textbook_references.py`: independent analytic reference tables for Coulomb, flux, capacitors/networks, DC, RC, RLC, AC, generator/rails and Hall.
- `python3 check_mutual_inductance.py`: independent Neumann line integral averaged over winding disks, compared with the demo's elliptic-integral implementation. Relative difference about 3.3×10⁻8 for the documented configuration. This tests a stated coil model, not real coil calibration or an exact self-inductance calculation.
- `VIRTUALDEMOS_ROOT=<checkout> node check_reference_cores.cjs`: generated capacitor/network, Coulomb, magnetic/Hall and coil references agree with source within stated tolerances. Early drafts used wrong helper argument orders and were corrected before the final successful run; no simulation defect inferred from those harness failures.

Source inspection checked bold virtual-control labels for the first eight handouts; the magnetic-force labels and all remaining packaging checks are recorded in the final document check below when executed. Source label matching is not a browser interaction test.

## Known limits and next work

- Current-source browser workflows, accessibility and classroom acceptance remain open.
- Maxwell/displacement-current and early Physics I gaps remain explicitly visible in the map; chapter references are not claims of full topic coverage.
- Hall voltages require manual recording. Source Hall sign is correct; its short hint needs explicit B polarity wording. Faraday uses on-screen L for textbook bar length ℓ; request recorded in COLLABORATION.md.
- Existing Physics I student activities and private guides are the next writing batch; skip missing demos. New unknown-spring controls have now landed, so that hold can be lifted.
- Main merge requires Steve's approval. Claude can consume the map from the feature branch now.

## Final Physics II document checks

Executed a structural/source check on all nine handouts: required plain-style sections, exactly one data table each, balanced display equations, and 160 bold virtual-control labels matched to their demo source (HTML/subscript normalization). All passed. The map contract passed again after Hall/spring status changes. `git diff --check` passed. These are document/source checks, not browser execution.
