# Star Slice data

The Star Slice demo plays back real MESA profiles: composition, temperature, density, convection and burning at every radius, at a series of moments in a star's life. This folder holds the script that packs MESA output into the small file the page reads.

## On the machine with the MESA runs

0. If the runs no longer have their profiles (or a multi-stage run kept only its last stage, because every stage wrote to the same `LOGS/`), set up copies that save them. The originals are not touched:

   ```
   python3 make_slice_runs.py --progenitor ~/runs/mkwd_3.7 --wd ~/runs/wd_M0.669_B --dry-run   # see what it would do
   python3 make_slice_runs.py --progenitor ~/runs/mkwd_3.7 --wd ~/runs/wd_M0.669_B
   ```

   This makes `slice_mkwd_3.7` (each stage logs to its own `LOGS_<stage>`) and `slice_wd_M0.669_B`, sets `profile_interval = 10`, and adds the profile columns the demo uses after checking each name against `$MESA_DIR/star/defaults/profile_columns.list`. Run the copies the usual way.

1. Look first. This writes nothing and reports what each run has:

   ```
   python3 extract_profiles.py --report ~/path/to/run
   ```

   It lists how many profiles exist, the age range they cover, and which columns are present. If a column the demo needs or recommends is missing, it prints the lines to add to the run's `profile_columns.list`. If there are too few moments, it suggests a smaller `profile_interval`.

2. Extract:

   ```
   cd ~/runs/slice_mkwd_3.7
   python3 extract_profiles.py -o life_3.7.json.gz --label "3.7 Msun progenitor" LOGS_zams LOGS_to_end_he_core_burn LOGS_co_core LOGS_remove_env LOGS_settle
   python3 extract_profiles.py -o wd_0.669_B.json.gz --label "0.669 Msun white dwarf, phase separation on" ~/path/to/wd_M0.669_B
   ```

   Give a star's stages in time order if they live in separate folders. Each output keeps about 150 moments with about 200 real zones each (no interpolation), and is typically well under 1 MB.

3. Put the `.json.gz` files in `tools/star-slice/data/` and push.

## More masses (the mass slider)

`make_mass_grid.py` copies MESA's own test suite cases that run a whole life: `1M_pre_ms_to_wd` (1 M☉ to a white dwarf), `12M_pre_ms_to_core_collapse` (12 and 15 M☉) and `20M_pre_ms_to_core_collapse` (20 and 25 M☉, envelope removal stage skipped). Each copy logs every stage to its own folder, keeps only the profile columns the demo reads, and gets an `rn_slice` script.

```
export MESA_DIR=~/mesa-26.04.1
python3 make_mass_grid.py --dest ~/runs            # add --dry-run to look first
cd ~/runs/slice_grid_12M && ./mk && ./rn_slice > run.log 2>&1
```

The kit also sets up `wd_cool_0.6M` (skip it with `--no-wd`): MESA's 0.6 M☉ C/O white dwarf cooling with the Skye equation of state and phase separation on, until the center reaches 10⁶ K, so the core freezes. Its own profile column list is kept (it already writes every isotope) with `eos_phase`, `eps_phase_separation` and `mixing_type` added. A run that starts as a white dwarf is shown as its own choice next to the mass slider, not on it.

When `run.log` ends with `finished`, the script's printed `extract_profiles.py` line packs that run. Massive star networks are grouped to keep files small: `s_ca` is ³²S + ³⁶Ar + ⁴⁰Ca, `fe_grp` is ⁴⁴Ti through ⁵⁶Ni, `np` is free neutrons and protons, `burn_c` is c12_c12 + c12_o16 and `burn_o` is o16_o16. The massive suites run with no winds (`Dutch_scaling_factor = 0`).

On the page, every embedded dataset with an initial mass sits on the Star mass slider (ticks on a log mass scale, spread apart where labels would touch). Switching mass keeps the color mode and jumps to the same inferred stage at the same progress through it (for example halfway through core hydrogen burning, or the last moment), and otherwise to the zero age main sequence. The other masses' HR tracks show faintly behind the current one. Runs that end at iron core collapse get a Core collapse preset (iron core mass and fastest infall from the data, no explosion drawn) and an Onion shells preset. A run from this kit with a mass of 8 M☉ or more is labeled as a MESA test suite model; its metallicity (1 − X − Y at the surface) and the absence of mass loss are read from the data. The page recognizes these runs by their source folders: `slice_grid_*`, or the stage log folders `LOGS_make_late_pre_zams`, `LOGS_to_end_core_c_burn`, `LOGS_to_lgTmax`, `LOGS_to_cc`.

## Building the page

```
python3 build.py                                                    # data/ -> demos/star-slice.html
python3 build.py --data /tmp/test --out /tmp/test/star-slice.html   # a test build from another folder
```

The build embeds each dataset with its initial mass and HR track, so the slider and the faint tracks work before a dataset is unpacked; each dataset is unpacked the first time it is shown.

## Columns

Needed: `mass`, `logR` (or `radius`), `logT`, `logRho`, `h1`, `he4`, `c12`, `o16`.
Recommended: `mixing_type` (convective zones), `conv_vel`, `eps_nuc`, `ne22`, and for white dwarfs `phase` and `gamma`.

## Notes

- Moments are spread evenly through the saved profiles, so the playback follows MESA's own model spacing. Fast phases with many short timesteps get more moments.
- Zones are chosen to be spread evenly in both enclosed mass and log radius, so the core and the envelope both keep detail.
