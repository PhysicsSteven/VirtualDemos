# Star Slice data

The Star Slice demo plays back real MESA profiles: composition, temperature, density, convection and burning at every radius, at a series of moments in a star's life. This folder holds the script that packs MESA output into the small file the page reads.

## On the machine with the MESA runs

1. Look first. This writes nothing and reports what each run has:

   ```
   python3 extract_profiles.py --report ~/path/to/run
   ```

   It lists how many profiles exist, the age range they cover, and which columns are present. If a column the demo needs or recommends is missing, it prints the lines to add to the run's `profile_columns.list`. If there are too few moments, it suggests a smaller `profile_interval`.

2. Extract:

   ```
   python3 extract_profiles.py -o life_3.7.json.gz --label "3.7 Msun progenitor" ~/path/to/mkwd_3.7
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
