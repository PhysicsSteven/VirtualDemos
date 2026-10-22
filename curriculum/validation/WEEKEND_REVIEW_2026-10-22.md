# Weekend independent review: first checkpoint, 2026-10-22

Source: main **77d11e3521246158995d765e661a64ab13a03064**, fast forwarded into the clean feature checkout. Runtime: Node **v24.19.0**, Linux. No demo HTML changed. This is a partial review of queue item 1, not completion of the nine-demo audit or release approval.

## Executed software checks

Run each command from the repository root: `node curriculum/validation/test_<name>.cjs`.

| Suite name | Passed groups | Scope |
|---|---:|---|
| ising | 14 | Exact results, update bookkeeping, statistics and seeded Monte Carlo |
| bz_reaction | 22 | Default suite; optional `BZ_SLOW=1` spiral refinement not run |
| relativity_em | 19 | Fields, forces, paths, loop/magnet flux and frame relations |
| chladni | 17 | Plate modes, normalization, response and numerical reference checks |
| faraday | 20 | Includes Two coils mutual inductance, coupled circuits, energy and switch behavior |
| acoustic_labs | 9 | Includes 3D levitation grid checks, plus timbre and resonators |
| gamma | 10 | Includes ORTEC configuration; not a fresh experimental transport benchmark |
| dna (new) | 10 | Supported geometry, chemical graph, ATOM fields, thermodynamics and mass checks |
| lagrange_points (new) | 5 | Force equilibria, Sun frame, Jacobi identity, trajectories and Kepler limits |

**126 supported groups passed locally.** The first seven suites were written previously: rerunning their independent references is useful regression evidence, but does not make GPT the independent author of those references. Machine-readable output: [WEEKEND_REVIEW_RESULTS_2026-10-22.json](WEEKEND_REVIEW_RESULTS_2026-10-22.json).

The DNA strict export check was also executed: `node curriculum/validation/test_dna.cjs --strict-ter` **exits 1**. Its failure is intentionally visible below and is outside the supported-case green CI command. The new DNA and Lagrange suites have been added to the existing Node workflow. Remote CI has not been observed for this checkpoint. Browser checks have not been run. No browser CI was added.

## Confirmed defect for Claude: DNA PDB chain termination

`toPDB(buildModel('ACGT', 'B'))` emits:

```text
TER      80      DT A   4
TER     160      DT B   8
```

In these records the chain letter is in **column 21**. The required chainID column is **22**, and resSeq is columns **23–26**. The ATOM records use the correct columns. A strict parser reads a blank TER chain, so explicit chain termination does not match its preceding chain. Both A and B forms fail. This is an export formatting defect, not a coordinate defect.

Requested local fix: format the residue name as a right-justified three-character field in the TER record, as the ATOM writer already does, keeping a separate space before chainID. Run the strict check after correction. GPT has not changed the HTML because Claude owns it this weekend.

Specification: [wwPDB format 3.3, coordinate section](https://www.wwpdb.org/documentation/file-format-content/format33/sect9.html), ATOM and TER tables (accessed 2026-10-22). The strict test checks fixed slices rather than whitespace splitting.

## New independent checks

### DNA

Read the full CORE and About the model note. Constructed a chemical bond graph from nucleotide connectivity independently of the distance finder: sugar/phosphate bonds, purine and pyrimidine rings, substituents, glycosidic bonds and every O3′–P link between residues. Compared the complete graph, including absence of spurious bonds, for both forms and sequences of 2, 8 and 60 pairs. Heavy atom covalent lengths are between 1.15 and 1.70 Å in these cases.

Verified Watson–Crick donor/acceptor identities for A, T, G and C on either strand, correct pair mapping, and 2 versus 3 bonds per pair. For `ACGTACGT`, donor–acceptor distances span **2.71714–3.06408 Å** in A form and **2.80616–2.89995 Å** in B form. These are model distances, not measurements of real DNA.

Reconstructed rise and twist from built coordinates and checked strand direction: A form **2.56 Å, 32.7°**; B form **3.38 Å, 36°**. Checked ATOM serials, residue/chain fields, xyz rounding to 0.001 Å, occupancy, temperature factors and elements through 60 pairs. Added explicit strict TER check.

Hand-summed nearest-neighbor examples at 1 M NaCl: `AAAA` has ΔH = −19.1 kcal/mol and ΔS = −58.4 cal/(mol K); self-complementary `ATAT` has −17.0 and −55.3 including the symmetry entropy. Checked concentration factors, entropy salt correction and reverse-complement invariance. A first test draft had an arithmetic error in the ATAT entropy; corrected the reference sum before the successful final run. No simulation defect was inferred from that draft failure.

Limitations: the thermodynamic sums test implementation consistency with the stated parameters, not an independent experimental melting curve. Full transcription of all fiber coordinates against NAB, all thermodynamic table entries against the paper, groove-width methodology and external PDB-reader import remain unchecked. The model correctly discloses its uniform helix/heavy atom assumptions. Primary thermodynamics reference: [SantaLucia 1998](https://doi.org/10.1073/pnas.95.4.1460); full-text retrieval was blocked/timed out in this session, so external table verification is pending.

### Lagrange points, especially Sun centered frame

Read the full CORE and Model note. Independently solved collinear equilibria by bisection of the direct Newtonian force, rather than the demo's quintics, for μ = 3.0035×10⁻⁶, 0.0009537, 0.01215 and 0.5. Checked equilateral point distances and force residuals.

Differentiated the moving-frame coordinates. If H is the Sun centered position and e(t) = (cos t, sin t), the required acceleration is

$$
\ddot H=-(1-\mu)H/|H|^3-\mu(H-e)/|H-e|^3-\mu e.
$$

The transformed demo velocities give this acceleration, including the indirect term, to 10⁻⁹ absolute tolerance in the tested cases. Round trips recover the rotating state. The Sun centered view has fixed axes and an accelerating origin; it should not be called a truly inertial frame. The CORE explicitly makes that distinction.

Independently verified the barycentric identity **C = −2(E − Lz) + μ(1 − μ)**; the constant follows from the stated Szebehely potential convention and is not a Jacobi error. Integrated four trajectories to t = 1 with tighter tolerances; Jacobi differences were below 2×10⁻⁹ and state differences below 2×10⁻⁸. Checked Sun centered circular speed, osculating radius/eccentricity, energy and period against Kepler equations. Long unstable trajectories, close approaches, event location and Lyapunov-orbit shooting are not certified by these short checks. No confirmed frame physics defect found in this scope.

### Ising and Relativity–EM: source review begun

Read both full cores and their model/teaching explanations. Ising explicitly labels its absolute-magnetization susceptibility convention; do not mistake it for the ordinary zero-field thermodynamic susceptibility. Relativity–EM uses the correct four-current boost and Lorentz field transformations in the reviewed equations; passing author suites cover numerical reference cases. These source reads and suite reruns are not yet a complete independent end-to-end review.

A comment-only Ising error: the Kaufman comment says γ₀ = 2K + ln(tanh K) is negative **below** Tc. It is positive below and negative above. The formula/code should stay unchanged; reverse the wording only. For example K = 1 gives a positive value and K = 0.2 a negative value.

## Next work and status

1. Finish independent source/Model review and freshly calculated reference checkpoints for BZ, Chladni, Faraday Two coils, levitation 3D and ORTEC gamma. Their passing regression suites alone do not close the review. Extend Ising and Relativity–EM beyond this first source read where useful.
2. Await Claude's E&M feature batch notes before rewriting affected handouts; check every bold control name against that source. Mechanics handouts follow the mechanics batch.
3. Claude can fix DNA TER locally and rerun `--strict-ter`; then make TER checking unconditional and remove the known-failure exemption.
4. No release candidates have been certified here. No instructor guides or public student answers were created in this checkpoint. Private instructor work remains in TeacherKeys. Do not merge into main without Steve's approval.
