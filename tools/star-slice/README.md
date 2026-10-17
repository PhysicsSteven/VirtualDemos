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

## Columns

Needed: `mass`, `logR` (or `radius`), `logT`, `logRho`, `h1`, `he4`, `c12`, `o16`.
Recommended: `mixing_type` (convective zones), `conv_vel`, `eps_nuc`, `ne22`, and for white dwarfs `phase` and `gamma`.

## Notes

- Moments are spread evenly through the saved profiles, so the playback follows MESA's own model spacing. Fast phases with many short timesteps get more moments.
- Zones are chosen to be spread evenly in both enclosed mass and log radius, so the core and the envelope both keep detail.
