# Spectra Explorer data

The line data in `demos/spectra.html` comes from the NIST Handbook of Basic Atomic Spectroscopic Data (J. E. Sansonetti and W. C. Martin), strong lines tables, air wavelengths between 300 and 1000 nm, for the 99 elements from hydrogen (Z = 1) to einsteinium (Z = 99). NIST data is public domain.

Source pages: `https://physics.nist.gov/PhysRefData/Handbook/Tables/<element>table2_a.htm`

## Files

- `b01.csv` to `b16.csv`, `Fe.csv`: the line lists, one `## Symbol` section per element. Each row is `intensity,wavelength (Å, air),spectrum`, copied from NIST. Intensity keeps NIST's flags (`P` means a persistent line). A few sections came back with the first two columns swapped or with the ion written as `Ti II`; `validate.py` normalizes those when loading.
- `validate.py`: loads every file and checks that each element's lines are in wavelength order, inside 300 to 1000 nm, have readable intensities and ion stages, and include a set of well known reference lines (hydrogen's Balmer lines, the sodium D lines, the mercury lamp lines, the calcium H and K lines and so on). Run `python3 validate.py -v`.
- `spectra.template.html`: the page, with the placeholder `__LINE_DATA__`.
- `build.py`: validates the data and writes `demos/spectra.html`.

## Notes on the data

- Astatine has no lines in this range in the NIST handbook.
- NIST gives no intensities for francium, and lists every curium, berkelium and californium line at the same intensity.
- Some einsteinium lines have no assigned ionization stage; they are stored with ion `0`.
- NIST's intensities come from different light sources and are only meaningful within one element, and sometimes only within one ionization stage.

To rebuild after editing the data or template: `python3 tools/spectra-data/build.py`
