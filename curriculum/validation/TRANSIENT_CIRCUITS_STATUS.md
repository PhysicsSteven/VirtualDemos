# Transient circuits validation status

2026-10-18, feature branch `curriculum/virtual-lab-starter-kits`.

Implemented in `96a0d6b`, aligned lab/key in `059d949`. **18 Node test groups executed successfully**, including independent ODE integration and Joule-power quadrature, critical continuity, KVL, energy, zero resistance, UI parameter corners and CSV. Chromium 134 desktop/phone workflows executed successfully. Existing [GitHub Actions run](https://github.com/PhysicsSteven/VirtualDemos/actions/runs/39154683568) passed.

See [sprint evidence](SPRINT_2026-10-18.md) for exact commands, runtime, source snapshot, browser scope, defects corrected and limitations. These results supersede the earlier 10-check spot test and mocked DOM report.

The expanded [CI matrix](https://github.com/PhysicsSteven/VirtualDemos/actions/runs/39155943281) also passed Node 22 plus Chromium and Firefox desktop/phone workflows.

Remaining: mobile plot readability, comprehensive keyboard/screen-reader/contrast checks, and independent review. The student and instructor documents are aligned with precise resistance/time controls and CSV. **Implemented and tested in the stated scope; not release-ready or TA-accepted.**
