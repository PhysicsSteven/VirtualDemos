/* Keyboard shortcuts of each demo's own code, for the ? dialog (vd.js VD.help), loaded the first time the dialog opens.
   One list per demo: [keys, what it does, where the focus must be ('on the picture', or '' for anywhere)]. Keys are separated by
   spaces (Page Up and Page Down are one key each); "Shift + ← →" shows as keys joined by plus. Keys the library already gives every
   demo are left out here, because the dialog lists them by itself: Space, R, P, F and ? on the page, knobs and sliders, 3D pictures
   (VD3.orbit), the picture size grip and dividers. An empty list means the demo has no keys beyond those.
   When a demo's own keys change, change its list here in the same commit (tools/rules.cjs shortcuts-list checks that every demo
   that handles keys has a list). Inventory read from each demo's code on 2026-11-08. */
window.VD_SHORTCUTS = {
  "acoustic-levitation": [
    ["↑ ↓", "Move the traps by changing the top bowl phase (two bowl setups)", "on the picture"],
    ["← →", "Change the drive voltage in steps of 0.5 V", "on the picture"],
    ["B", "Add a bead", "on the picture"],
    ["F", "Fill the traps with beads", "on the picture"],
    ["C", "Clear the beads", "on the picture"],
    ["S", "Start or stop the phase sweep (two bowl setups)", "on the picture"],
    [", .", "Turn the 3D view", "on the picture"]
  ],
  "binding-energy": [
    ["← →", "Step the mass number (the neutron number in Chart; neutrons in Build) (Shift for ten)", "on the picture"],
    ["↑ ↓", "Step the proton number (protons in Build)", "on the picture"],
    ["V", "Switch to the next view (Curve, Liquid drop, Shell effects, Chart, Build); in Build, go back to Curve", "on the picture"],
    ["D Space", "Let the nucleus decay (Build)", "on the picture"]
  ],
  "black-holes": [
    ["← → ↑ ↓", "Move the source (Lensing), the galaxy (Ray traced) or the distance from the hole (Near the hole) (Shift for bigger steps)", "on the picture"],
    ["V", "Switch to the next view", "on the picture"],
    ["G", "Switch the source between a galaxy and a disk (Lensing)", "on the picture"]
  ],
  "bose-einstein": [],
  "blackbody": [
    ["↑ ← ↓ →", "Raise the temperature (↑ ←) or lower it (↓ →) (Shift for bigger steps)", "on the spectrum chart"]
  ],
  "bragg-peak": [
    ["← → ↑ ↓", "Move the detector depth (Shift for 1 cm steps); in Why it peaks, move along the proton track", "on the picture"]
  ],
  "bz-reaction": [
    ["← → ↑ ↓", "Change the stoichiometric factor f (Stirred beaker) or the flow rate (Flow reactor) (Shift for bigger steps)", "on the vessel or a plot"],
    ["← → ↑ ↓", "Turn the 3D phase portrait (Stirred beaker)", "on the upper plot"],
    ["← → ↑ ↓", "Move the probe (Petri dish) (Shift for bigger steps)", "on the picture or a plot"],
    ["C", "Clear the dish (Petri dish)", "on the picture or a plot"]
  ],
  "capacitors": [
    ["↑ ↓", "Change the plate separation d (One capacitor); change the inner sphere radius a (Spherical); change the first capacitor (Combinations)", "on the capacitor picture"],
    ["← →", "Slide the dielectric slab in or out (One capacitor); change the outer sphere radius b (Spherical); change the second capacitor (Combinations)", "on the capacitor picture"],
    ["Page Up Page Down", "Change the plate area A (One capacitor); change the third capacitor (Combinations)", "on the capacitor picture"],
    ["− +", "Change the battery or supply voltage (Shift for bigger steps)", "on the capacitor picture"],
    ["M Enter", "Connect or disconnect the battery (One capacitor)", "on the capacitor picture"],
    ["C", "Capture a reading", "on the capacitor picture"],
    ["[ ]", "Turn the 3D view (One capacitor)", "on the capacitor picture"],
    ["{ }", "Tilt the 3D view (One capacitor)", "on the capacitor picture"],
    ["V", "Reset the 3D view (One capacitor)", "on the capacitor picture"]
  ],
  "cart-launch": [],
  "catenary": [
    ["1 2 3 4 5", "Pick support A, support B, the middle grip, the first marker or the second marker", "on the chain"],
    ["← → ↑ ↓", "Move the picked support, grip or marker (Shift for bigger steps)", "on the chain"],
    ["− +", "Shorten or lengthen the chain (Shift for bigger steps)", "on the chain"],
    ["← →", "Change the sag (Shift for bigger steps)", "on the tension graph"]
  ],
  "cavendish": [],
  "celestial-sphere": [
    ["← →", "Turn the view left or right (Horizon)", "on the sky picture"],
    ["↑ ↓", "Tilt the view up or down (Horizon)", "on the sky picture"],
    ["− +", "Zoom out or in (Horizon)", "on the sky picture"]
  ],
  "center-of-mass": [
    ["1 2 3 4", "Pick a mass (Masses on a plate)", "on the picture"],
    ["← → ↑ ↓", "Move the picked mass (Masses on a plate)", "on the picture"]
  ],
  "charged-particles": [
    ["← → ↑ ↓", "Move the detector depth (Shift for bigger steps) (Beam in water)", "on the picture"]
  ],
  "chladni": [
    ["← →", "Change the frequency in small steps (Shift for bigger steps)", "on the picture"],
    ["↑ ↓ Page Up Page Down", "Jump to the next or previous resonance", "on the picture"],
    ["S", "Sprinkle fresh sand", "on the picture"],
    [", .", "Turn the 3D plate", "on the 3D plate"]
  ],
  "circuits": [
    ["1 2 3 4 5 6 7 8 9 0", "Pick a part tool (1 Select, 2 Wire, 3 Resistor, 4 Bulb, 5 Battery, 6 AC source, 7 Capacitor, 8 Inductor, 9 Switch, 0 Two way switch)", "on the circuit board"],
    ["D E T A V O", "Pick the Diode, LED, Transistor, Ammeter, Voltmeter or scope Probe tool", "on the circuit board"],
    ["← → ↑ ↓", "Move the cursor from dot to dot, or move the selected part", "on the circuit board"],
    ["Enter", "Mark the start of a part, then press again at the cursor to place it; flip a selected switch", "on the circuit board"],
    ["Tab Shift + Tab", "Select the next or previous part", "on the circuit board"],
    ["Esc", "Cancel a part being placed, then return to the Select tool, then deselect", "on the circuit board"],
    ["+ −", "Step the value of the selected part up or down (Page Up and Page Down do the same)", "on the circuit board"],
    ["R", "Rotate the selected part", "on the circuit board"],
    ["F", "Flip the selected part", "on the circuit board"],
    ["S", "Flip the selected switch", "on the circuit board"],
    ["Delete", "Remove the selected part", "on the circuit board"],
    ["Ctrl + Z", "Undo (Shift + Ctrl + Z or Ctrl + Y redoes)", "on the circuit board"],
    ["B", "Switch between Schematic and Bench", "on the circuit board"],
    ["M", "Switch the analysis mode (DC, In time, AC)", "on the circuit board"],
    ["← → ↑ ↓ Page Up Page Down", "Change the frequency (AC)", "on the resonance curve"],
    ["← →", "Move the time cursor (Shift for bigger steps) (In time)", "on the oscilloscope"],
    ["Home End", "Move the time cursor to the start of the window or to the present (In time)", "on the oscilloscope"],
    ["Esc", "Remove the time cursor (In time)", "on the oscilloscope"],
    ["C", "Capture a reading at the time cursor (In time)", "on the oscilloscope"]
  ],
  "circular-motion": [
    ["C", "Cut the string", "on the picture"]
  ],
  "collisions": [
    ["1 2", "Pick body 1 or body 2 (1D track, 2D table, and other setups with two bodies)", "on the picture"],
    ["← →", "Change the speed of the picked body (the stored energy in Explosion, the spring in Newton's cradle) (Shift for bigger steps)", "on the picture"],
    ["↑ ↓", "Change the elasticity e, the cradle angle, the stored energy or the block mass, depending on the setup (Shift for bigger steps)", "on the picture"],
    ["C", "Capture a reading", "on the picture"],
    ["1 2 3 4 5 6 7 8", "Pick a cart (Sandbox)", "on the picture"],
    ["← →", "Change the picked cart's speed (Shift for bigger steps) (Sandbox)", "on the picture"],
    ["↑ ↓", "Change the picked cart's mass (Shift for bigger steps) (Sandbox)", "on the picture"],
    ["Delete", "Remove the picked cart (Sandbox)", "on the picture"],
    ["A", "Add a cart (Sandbox)", "on the picture"],
    ["V", "Turn Velcro on or off for the picked cart (Sandbox)", "on the picture"],
    ["E Shift + E", "Lower or raise the elasticity e (Sandbox)", "on the picture"]
  ],
  "color-vision": [
    ["← → ↑ ↓", "Move the probe ring (Stage lights)", "on the picture"]
  ],
  "compton": [
    ["← →", "Change the scattering angle by 1 degree (Shift for 10 degrees)", "on the picture"],
    ["↑ ↓", "Change the photon energy (Shift for bigger steps)", "on the picture"],
    ["S", "Start or stop sampling photons", "on the picture"],
    ["C", "Clear the sampled photons", "on the picture"],
    ["1 2 3", "Show the Detector, Angles or Electron energy tab", "on the picture"]
  ],
  "coulomb-sandbox": [
    ["] [", "Select the next or previous charge (Tab and Shift + Tab also work)", "on the field map"],
    ["← → ↑ ↓", "Move the selected charge or the probe 0.1 cm (Shift for 1 cm)", "on the field map"],
    ["− +", "Change the selected charge by 0.5 nC", "on the field map"],
    ["Delete", "Remove the selected charge", "on the field map"],
    ["P", "Switch between the probe and the last selected charge", "on the field map"],
    ["Esc", "Go back to the probe", "on the field map"],
    ["R", "Turn the selected rod, ring or disk by 15 degrees (Shift + R turns it the other way)", "on the field map"],
    ["C", "Capture a reading at the probe", "on the field map"],
    ["A D", "Rotate the 3D landscape", "on the field map"],
    ["W S", "Tilt the 3D landscape", "on the field map"],
    ["Z X", "Zoom the 3D landscape out or in", "on the field map"],
    ["0", "Reset the 3D landscape view", "on the field map"]
  ],
  "currents-fields": [
    ["N", "Select the next wire, probe or Amperian loop (Shift + N selects the previous one) (Straight wires)", "on the picture"],
    ["← → ↑ ↓", "Move the selected wire, probe or loop (Shift for bigger steps); move the probe (Loop and solenoid)", "on the picture"],
    ["− +", "Change the selected wire's current or the loop size (Straight wires); change the number of turns (Loop and solenoid) (Shift for bigger steps)", "on the picture"],
    ["R", "Reverse the selected wire's current (Straight wires)", "on the picture"],
    ["Delete", "Remove the selected wire (Straight wires)", "on the picture"],
    ["A", "Show or hide the Amperian loop (Straight wires)", "on the picture"]
  ],
  "diffraction-grating": [
    ["↑ ↓", "Move the wall closer or farther (Shift for bigger steps)", "on the picture"],
    ["[ ]", "Turn the grating (Shift for bigger steps)", "on the picture"],
    ["− +", "Change the slit width (Single slit) or the number of lines (Grating) (Shift for bigger steps)", "on the picture"],
    ["A B", "Pick caliper jaw A or B (Measure)", "on the picture"],
    ["← →", "Move the picked caliper jaw (Shift for bigger steps) (Measure)", "on the picture"]
  ],
  "displacement-current": [
    ["← →", "Move the probe loop along the axis", "on the picture"],
    ["↑ ↓", "Change the probe loop radius", "on the picture"]
  ],
  "distance-ladder": [
    ["1 2 3 4 5 6", "Open a rung of the ladder (Whole ladder)", "on the picture"],
    ["1 2 3", "Pick Proxima Centauri, Sirius or Vega (Parallax)", "on the picture"],
    ["← →", "Move Earth around its orbit (Shift for bigger steps) (Parallax)", "on the picture"],
    ["0 1 2 3 4 5 6 7 8 9", "Pick a star (Spectroscopic parallax)", "on the picture"],
    ["↑ ↓", "Change the distance modulus (Shift for bigger steps) (Main sequence fitting)", "on the picture"],
    ["1 2 3 4 5", "Pick a Cepheid (Cepheids, Cepheid photometry)", "on the picture"],
    ["← →", "Move the picked light curve peak (Shift for bigger steps) (Cepheids); step to the previous or next night (Cepheid photometry)", "on the picture"],
    ["↑ ↓", "Switch between the first and second peak (Cepheids)", "on the picture"],
    ["1 2 3 4", "Pick a supernova (Type Ia)", "on the picture"],
    ["↑ ↓", "Move the peak line (Shift for bigger steps) (Type Ia)", "on the picture"],
    ["↑ ↓", "Pick the next galaxy (Hubble's law)", "on the picture"],
    ["← →", "Change the picked galaxy's distance (Shift for bigger steps) (Hubble's law)", "on the picture"],
    ["[ ]", "Shift the comb of rest wavelengths (Shift for bigger steps) (Hubble's law)", "on the picture"]
  ],
  "dna": [
    ["← → ↑ ↓", "Turn the molecule", "on the 3D picture"],
    ["− +", "Zoom out or in", "on the 3D picture"],
    ["0", "Show the whole molecule and clear the selection", "on the 3D picture"],
    ["S", "Start or stop the spin", "on the 3D picture"],
    ["Esc", "Clear the selection", "on the 3D picture"]
  ],
  "doppler": [
    ["← → ↑ ↓", "Move the selected source or observer (Shift for bigger steps)", "on the picture"],
    ["N", "Switch between the source and the observer (Sound)", "on the picture"],
    ["− +", "Change the selected object's speed (Shift for bigger steps)", "on the picture"],
    ["[ ]", "Turn the selected object's direction (Shift for bigger steps)", "on the picture"],
    ["L", "Switch between Sound and Light", "on the picture"]
  ],
  "dosimetry": [
    ["← →", "Move the depth probe (Shift for bigger steps) (Kerma view)", "on the picture"]
  ],
  "double-slit": [
    ["F", "Fire one particle", "on the picture"],
    ["C", "Clear the screen", "on the picture"],
    ["1 2", "Close or open slit 1 or slit 2", "on the picture"],
    ["W", "Turn the detector at the slits on or off", "on the picture"],
    ["V", "Switch between the bench view and the top view", "on the picture"],
    ["[ ]", "Turn the bench view (Shift for bigger steps)", "on the picture"],
    ["↑ ↓", "Change the slit separation d (Shift for bigger steps)", "on the picture"],
    ["← →", "Change the slit width a (Shift for bigger steps)", "on the picture"],
    ["− +", "Widen or narrow the screen range", "on the picture"]
  ],
  "e-over-m": [
    ["↑ ↓", "Change the accelerating voltage V (Shift for bigger steps)", "on the apparatus"],
    ["← →", "Change the coil current I (Shift for bigger steps)", "on the apparatus"],
    ["[ ]", "Turn the tube (Shift for bigger steps)", "on the apparatus"],
    [", .", "Move the eye along its rail (Shift for bigger steps)", "on the apparatus"],
    ["L R E", "Pick the left pointer, the right pointer or the eye", "on the scale view"],
    ["← →", "Move the picked pointer or the eye (Shift for bigger steps)", "on the scale view"]
  ],
  "early-universe": [
    ["H", "Make the Milky Way the home galaxy again (Expansion)", "on the picture"]
  ],
  "eddy-currents": [],
  "electron-diffraction": [
    ["↑ ↓", "Change the voltage (Shift for bigger steps)", "on the tube picture"],
    ["Page Up Page Down", "Move the magnet up or down", "on the tube picture"],
    ["M", "Bring the magnet near or take it away", "on the tube picture"],
    ["1 2", "Pick the first or second ring", "on the screen close up"],
    ["A B", "Pick mark or jaw A or B", "on the screen close up"],
    ["← →", "Move the picked mark or jaw (Shift for bigger steps)", "on the screen close up"],
    ["← →", "Change the crystal angle θ (Shift for 1 degree) (X rays)", "on the X ray spectrometer"]
  ],
  "electrostatics-at-work": [
    ["← → ↑ ↓", "Move the charging wand (Shift for bigger steps) (Van de Graaff)", "on the picture"]
  ],
  "elevator": [],
  "em-waves": [
    ["← →", "Change the frequency (Shift for bigger steps); in Guides and cavities, change the guide frequency", "on the picture"],
    ["↑ ↓", "Change the amplitude (Plane wave); turn the direction θ (Antenna) (Shift for bigger steps)", "on the picture"],
    [", .", "Change the component angle ψ (Shift for bigger steps)", "on the picture"],
    ["[ ]", "Change the phase difference δ (Shift for bigger steps)", "on the picture"],
    ["P", "Switch the polarizer on or off", "on the picture"],
    ["A", "Switch to the next mode (Plane wave, Antenna, In a plane)", "on the picture"],
    ["V", "Reset the 3D view", "on the picture"],
    ["← → ↑ ↓", "Move the cursor (Shift for bigger steps) (In a plane)", "on the picture"],
    ["Enter", "Use the chosen tool at the cursor (In a plane)", "on the picture"],
    ["1 2 3 4", "Pick the Wire, Metal, Erase or Probe tool (In a plane)", "on the picture"],
    ["I", "Switch between Field now and Average intensity (In a plane)", "on the picture"]
  ],
  "energy-track": [
    ["← →", "Move the skater's starting point along the track (Shift for bigger steps)", "on the picture"]
  ],
  "entropy": [],
  "equilibrium": [
    ["1 2", "Pick the first or second load (Seesaw)", "on the picture"],
    ["← →", "Move the picked load (Shift for bigger steps)", "on the picture"],
    ["[ ]", "Pick the previous or next part (Sandbox)", "on the picture"],
    ["Delete", "Remove the picked part (Sandbox)", "on the picture"]
  ],
  "exoplanets": [
    ["← →", "Step time back or forward (Shift for bigger steps)", "on a picture"],
    ["↑ ↓", "Change the inclination (Shift for bigger steps)", "on a picture"]
  ],
  "faraday": [
    ["← →", "Move the magnet (setups with a magnet); turn the crank (Generator); move the bar (Sliding bar); change the coil separation (Two coils); change the length or outer radius (Self inductance)", "on the apparatus drawing"],
    ["↑ ↓", "Change the coil radius (magnet setups); change the angular speed ω (Generator); change the rail spacing (Sliding bar); change the secondary radius (Two coils); ramp the current up or down (Self inductance)", "on the apparatus drawing"],
    ["P O T F", "Push the magnet in, pull it out, push it through or flip it (magnet setups)", "on the apparatus drawing"],
    ["M", "Turn the motor on or off (Generator)", "on the apparatus drawing"],
    ["Shift + ← → ↑ ↓", "Turn the 3D view (Generator)", "on the apparatus drawing"],
    ["0", "Reset the 3D view (Generator)", "on the apparatus drawing"],
    ["G", "Pull the bar at v (Sliding bar); restart the source (Two coils)", "on the apparatus drawing"],
    ["L", "Push the bar and let go (Sliding bar)", "on the apparatus drawing"],
    ["S", "Open or close the switch (Two coils)", "on the apparatus drawing"],
    ["O X", "Switch the current on or off (Self inductance)", "on the apparatus drawing"],
    ["− +", "Change the circuit resistance R", "on the apparatus drawing"]
  ],
  "fluids": [
    ["↑ ↓", "Move the probe up or down (Depth); change the fill height (Shapes); change the pressure (Barometer); change the block edge or lower the spring scale (Buoyancy); change the inlet speed (Venturi); move the hole up or down (Torricelli) (Shift for bigger steps)", "on the picture"],
    ["← →", "Move the probe sideways (Depth); change the fill height (Shapes); change the pressure (Barometer); change the block density (Buoyancy); change the throat diameter (Venturi); change the water height (Torricelli) (Shift for bigger steps)", "on the picture"]
  ],
  "force-lab": [
    ["← →", "Move the right body (Shift for bigger steps)", "on the picture"]
  ],
  "forces": [
    ["T", "Release the block at the top mark for the timer", "on the picture"],
    ["↑ ↓", "Tilt the ramp by half a degree", "on the picture"]
  ],
  "franck-hertz": [
    ["← →", "Change the accelerating voltage U (Shift for bigger steps)", "on the picture"],
    ["↑ ↓", "Change the oven temperature (Shift for bigger steps) (Mercury)", "on the picture"],
    ["M", "Turn Mark peaks on or off", "on the picture"],
    ["Enter", "Mark the maximum nearest the cursor", "on the picture"],
    ["Backspace Delete", "Remove the last mark", "on the picture"],
    ["N", "Start a new sweep", "on the picture"]
  ],
  "galton-board": [],
  "gamma-spectroscopy": [
    ["← →", "Move the cursor along the channels (Shift for 10 channels)", "on the picture"],
    ["[ ]", "Move the source closer or farther", "on the picture"],
    ["Page Up Page Down", "Raise or lower the high voltage", "on the picture"],
    ["L", "Switch between linear and log scale", "on the picture"],
    ["M", "Mark the peak at the cursor", "on the picture"],
    ["− +", "Zoom out or in", "on the picture"],
    ["Delete Backspace", "Remove the selected region of interest", "on the picture"]
  ],
  "gas-heat-capacity": [],
  "gauss-law": [
    ["N", "Select the next object (Shift + N selects the previous one) (Any surface)", "on the slice or the 3D view"],
    ["← → ↑ ↓", "Move the selected charge, grip or surface (Shift for bigger steps) (Any surface)", "on the slice or the 3D view"],
    ["− +", "Change the selected charge or the surface size (Any surface)", "on the slice or the 3D view"],
    ["Delete", "Remove the selected charge or point (Any surface)", "on the slice or the 3D view"],
    ["Esc", "Cancel drawing a surface", "on the slice"],
    ["← → ↑ ↓", "Change the radius of the Gaussian surface (Shift for bigger steps) (Symmetry)", "on the slice, the 3D view or the field plot"],
    ["− +", "Change the sphere radius or the cylinder length (Symmetry)", "on the slice or the 3D view"],
    ["[ ]", "Turn the 3D view", "on the 3D view"],
    ["Page Up Page Down", "Tilt the 3D view", "on the 3D view"],
    ["0", "Reset the 3D view", "on the 3D view"]
  ],
  "giant-planets": [
    ["↑ ↓", "Move the rings closer or farther (Rings view, Shift for bigger steps)", "on the picture"],
    ["↑ ↓", "Move up or down through the cloud layers (Clouds view, Shift for bigger steps)", "on the picture"],
    ["← →", "Pick the previous or next moon (Moons view)", "on the picture"],
    ["← →", "Pick the previous or next planet (Planets view)", "on the picture"]
  ],
  "granular-flow": [],
  "gyroscope": [],
  "heat-engines": [
    ["1 – 6", "Pick a corner of the cycle", "on the picture"],
    ["← → ↑ ↓", "Move the picked corner (Shift for bigger steps)", "on the picture"],
    ["N", "Go to the next leg of the cycle", "on the picture"],
    ["R", "Run the cycle the other way around", "on the picture"]
  ],
  "holography": [
    ["← →", "Move cursor B on the plate one way or the other (Record view, Shift for bigger steps)", "on the microscope picture"],
    ["← →", "Move the detector one way or the other (Reconstruct view, Shift for bigger steps)", "on the lower picture"]
  ],
  "hr-diagram": [
    ["← →", "Step to the previous or next star (Real stars)", "on the picture"],
    ["← →", "Change the age of the star (one star, Shift for bigger steps)", "on the picture"],
    ["↑ ↓", "Raise or lower the mass of the star (one star, Shift for bigger steps)", "on the picture"],
    ["← → ↑ ↓", "Change the age of the cluster (Cluster, Shift for bigger steps)", "on the picture"]
  ],
  "huygens": [
    ["← → ↑ ↓", "Turn the angle of the incoming wave by 1 degree (Boundary view)", "on the picture"]
  ],
  "hydrogen-orbitals": [
    ["← → ↑ ↓", "Turn the cloud left, right, up or down", "on the 3D picture"],
    ["0", "Put the 3D view back the way it was", "on the 3D picture"],
    ["C", "Turn the cutaway on or off", "on the 3D picture"],
    ["M", "Start or stop finding the electron one position at a time", "on the 3D picture"],
    ["Space", "Play or pause the changing mixture of states", "on the 3D picture"],
    ["← → ↑ ↓", "Move the readout point (Shift for bigger steps)", "on the slice picture"],
    ["Home", "Put the readout point back in the center", "on the slice picture"],
    ["Esc", "Hide the readout point", "on the slice picture"],
    ["← → ↑ ↓", "Move the readout along the radius (Shift for bigger steps)", "on the radial graph"],
    ["Home End", "Jump the readout to the start or end of the graph", "on the radial graph"],
    ["Esc", "Hide the readout", "on the radial graph"]
  ],
  "ideal-gas": [
    ["← →", "Move the right wall left or right (Shift for smaller steps)", "on the box"],
    ["K", "Play or pause", "on the box"]
  ],
  "impulse": [],
  "induced-electric-field": [
    ["← → ↑ ↓", "Move the closed path", "on the picture"]
  ],
  "induction": [
    ["← → ↑ ↓", "Move the tip of the rod by 1 millimeter (Shift for 1 centimeter)", "on the picture"],
    ["← → ↑ ↓", "Move the probe in the field (Conductor shapes in a field)", "on the picture"],
    ["↑ ↓", "Raise or lower the charged rod (Attracting a neutral insulator, with Charged rod lowered on, Shift for bigger steps)", "on the picture"]
  ],
  "induction-at-work": [
    ["← → ↑ ↓", "Move the pen on the tablet (Graphics tablet)", "on the picture"]
  ],
  "inside-a-planet": [],
  "instrument-builder": [
    ["Page Up Page Down", "Pick the previous or next part on the rail", "on the picture"],
    ["← →", "Move the picked part along the rail (Shift for bigger steps)", "on the picture"],
    ["[ ]", "Make the picked lens weaker or stronger", "on the picture"],
    ["Delete", "Remove the picked part", "on the picture"]
  ],
  "ising": [
    ["↑ ↓", "Raise or lower the temperature (Shift for bigger steps)", "on the lattice"],
    ["← →", "Lower or raise the magnetic field (Shift for bigger steps)", "on the lattice"],
    ["U", "Set every spin up", "on the lattice"],
    ["R", "Set every spin to a random direction", "on the lattice"]
  ],
  "kepler-orbits": [
    ["← → ↑ ↓", "Move what the arrow keys are set to move: the arrow tip, the launch point, the view or a ruler point (Shift for smaller steps)", "on the picture"],
    ["M", "Switch what the arrow keys move", "on the picture"],
    ["1 2", "Pick ruler point 1 or 2 and move it with the arrow keys", "on the picture"],
    ["− +", "Zoom out or in", "on the picture"],
    ["F", "Fit the orbit in the picture", "on the picture"],
    ["[ ]", "Pick the previous or next body (Sandbox)", "on the picture"],
    ["← →", "Turn the velocity of the picked body (Sandbox, Shift for smaller steps)", "on the picture"],
    ["↑ ↓", "Speed the picked body up or slow it down (Sandbox, Shift for smaller steps)", "on the picture"],
    ["C", "Put the picked body on a circular orbit around its host (Sandbox)", "on the picture"],
    ["Delete", "Remove the picked body (Sandbox)", "on the picture"]
  ],
  "kundts-tube": [
    ["S", "Stroke the rod", "on the picture"],
    ["← →", "Move the pointer left or right (Shift for bigger steps)", "on the picture"]
  ],
  "lagrange-points": [
    ["← →", "Turn the launch direction of the picked particle", "on the picture"],
    ["↑ ↓", "Raise or lower the launch speed of the picked particle", "on the picture"],
    ["Shift + ← → ↑ ↓", "Move the view", "on the picture"],
    ["← → ↑ ↓", "Move the view (when no particle is picked)", "on the picture"],
    ["[ ]", "Lower or raise the Jacobi constant C", "on the picture"],
    ["I", "Switch between the rotating frame and the Sun centered frame", "on the picture"],
    ["F", "Show the whole system", "on the picture"],
    ["N", "Look near m₂", "on the picture"],
    ["P", "Follow m₂", "on the picture"],
    ["X", "Clear the particles", "on the picture"],
    ["− +", "Zoom out or in", "on the picture"]
  ],
  "lasers": [
    ["← →", "Change the temperature (Processes), pump rate (Laser) or mirror spacing fine change (Modes), Shift for bigger steps", "on the picture"],
    ["↑ ↓", "Change the pump light (Processes), mirror reflectivity (Laser) or peak gain (Modes), Shift for bigger steps", "on the picture"],
    ["R", "Switch the laser on again (Laser)", "on the picture"],
    ["1 – 4", "Go to Processes, Laser, Energy levels or Modes", "on the picture"]
  ],
  "magnetic-force": [
    ["S", "Pick the next thing the arrow keys move (Shift + S for the previous)", "on the picture"],
    ["← → ↑ ↓", "Move the picked item (Shift for bigger steps)", "on the picture"],
    ["← →", "Turn the launch direction (when the arrow tip is picked)", "on the picture"],
    ["↑ ↓", "Change the launch speed or the slit width, spread or frequency (Shift for bigger steps)", "on the picture"],
    ["M", "Show or hide the ruler", "on the picture"],
    ["T", "Start or stop the timer", "on the picture"],
    ["C", "Capture a reading, or clear the particles in the velocity selector and mass spectrometer", "on the picture"],
    ["F", "Fire 20 particles, or fit the view", "on the picture"],
    ["R", "Restart", "on the picture"],
    ["− +", "Zoom out or in", "on the picture"],
    ["← → ↑ ↓", "Turn the 3D view (Shift for bigger steps)", "on the 3D picture"]
  ],
  "magnetic-moments": [
    ["← → ↑ ↓", "Move the cursor on the graph (Shift for bigger steps)", "on the graph"]
  ],
  "magnetism-in-matter": [
    ["← → ↑ ↓", "Change the current I in small steps", "on the picture"]
  ],
  "michelson": [
    ["→ ↑", "Move the mirror micrometer forward (Shift for bigger steps)", "on the picture"],
    ["← ↓", "Move the mirror micrometer back (Shift for bigger steps)", "on the picture"]
  ],
  "millikan": [
    ["N", "Follow the next drop", "on the picture"]
  ],
  "molecules": [
    ["← → ↑ ↓", "Change the separation of the atoms in 0.001 nanometer steps, the level in Energy levels, or the cursor in the HCl spectrum (Shift for bigger steps)", "on the picture or the graph"]
  ],
  "moon-phases": [
    ["← → ↑ ↓", "Move the Moon by one day (Shift for a tenth of a day)", "on the orbit picture"],
    ["← → ↑ ↓", "Change the time of day by 15 minutes (Shift for 1 hour)", "on the sky clock"]
  ],
  "motion-graphs": [
    ["← →", "Move the time marker (Shift for bigger steps)", "on the picture"],
    ["← →", "Push the cart left or right during a run (Walk the graph, Shift for faster)", "on the picture"]
  ],
  "nuclear-reactions": [
    ["Space", "Fire the beam (Reactions view)", "on the picture"]
  ],
  "optics-bench": [
    ["← → ↑ ↓", "Move the picked item (Shift for smaller steps)", "on the bench"],
    ["[ ]", "Turn the picked item one way or the other (Shift for smaller steps)", "on the bench"],
    ["− +", "Make the picked item smaller or bigger, or change its curvature or focal length", "on the bench"],
    ["Delete", "Remove the picked item", "on the bench"],
    ["Esc", "Let go of the picked item", "on the bench"],
    ["← →", "Move the point where the path crosses the surface (Fermat: the quickest path, Shift for smaller steps)", "on the bench"]
  ],
  "particles": [
    ["← → ↑ ↓", "Move the cursor (Detector, Shift for bigger steps)", "on the picture"],
    ["Enter Space", "Place a point at the cursor (Detector)", "on the picture"],
    ["− +", "Zoom out or in at the cursor (Detector)", "on the picture"]
  ],
  "pendulum": [
    ["← →", "Lower or raise the release angle by 1 degree", "on the pendulum picture"],
    ["↑ ↓", "Shorten or lengthen the pendulum (Shift for bigger steps)", "on the pendulum picture"],
    ["← →", "Turn the upper rod by 1 degree and release from rest; with Shift, turn the lower rod (Double pendulum)", "on the pendulum drawing"],
    ["← →", "Lower or raise the release angle (Shift for 10 degrees)", "on the top plot"],
    ["← → ↑ ↓", "Move a start point on the lower plot (Shift for bigger steps)", "on the lower plot"],
    ["Enter", "Start the pendulum from the point on the lower plot", "on the lower plot"],
    ["Esc", "Hide the start point on the lower plot", "on the lower plot"],
    ["← →", "Step the time back or forward by one second (row of pendulums)", "on the row of pendulums"]
  ],
  "photoelectric": [
    ["← →", "Lower or raise the wavelength (Shift for bigger steps)", "on the picture"],
    ["↑ ↓", "Raise or lower the voltage (Shift for bigger steps)", "on the picture"],
    ["Page Up Page Down", "Raise or lower the light power", "on the picture"],
    ["R", "Flip the reversing switch", "on the picture"]
  ],
  "photon-interactions": [
    ["← →", "Lower or raise the photon energy (Shift for bigger steps)", "on the picture"]
  ],
  "planet-temperatures": [
    ["← → ↑ ↓", "Move the planet closer to or farther from the star (Shift for bigger steps)", "on the star system picture"],
    ["← →", "Move closer to or farther from the Galactic center (Shift for bigger steps)", "on the galaxy picture"],
    ["↑ ↓", "Make the stars born longer or shorter ago (Shift for bigger steps)", "on the galaxy picture"]
  ],
  "polarization": [
    ["V", "Switch between the Polarizer bench and Reflection views", "on the picture"],
    ["← →", "Pick the previous or next element (Polarizer bench)", "on the picture"],
    ["↑ ↓", "Turn the picked element by 1 degree (Polarizer bench, Shift for 5)", "on the picture"],
    ["A", "Add an element (Polarizer bench)", "on the picture"],
    ["Delete", "Remove the picked element (Polarizer bench)", "on the picture"],
    ["1 – 4", "Pick an element by its number (Polarizer bench)", "on the picture"],
    ["← → ↑ ↓", "Change the angle of incidence (Reflection, Shift for bigger steps)", "on the picture"]
  ],
  "potential-curves": [
    ["← →", "Move the starting point (Shift for bigger steps)", "on the energy diagram"],
    ["↑ ↓", "Raise or lower the energy E (Shift for bigger steps)", "on the energy diagram"],
    ["1 – 9", "Pick a control point (Draw your own)", "on the energy diagram"],
    ["← → ↑ ↓", "Move the picked control point (Draw your own, Shift for bigger steps)", "on the energy diagram"],
    ["Esc", "Let go of the control point so the arrows move E and the start again (Draw your own)", "on the energy diagram"]
  ],
  "projectile-drag": [
    ["← → ↑ ↓", "Lower or raise the launch angle (Shift for 5 degrees)", "on the picture or a graph"],
    ["Enter Space", "Launch", "on the picture or a graph"],
    ["Page Up Page Down", "Raise or lower the launch height (Shift for bigger steps)", "on the picture or a graph"],
    [", .", "Step the time cursor back or forward (Shift for 10 steps)", "on the picture or a graph"],
    ["Home End", "Jump the time cursor to the start or end", "on the picture or a graph"],
    ["C", "Capture a reading", "on the picture or a graph"],
    ["Esc", "Clear the time cursor", "on the picture or a graph"]
  ],
  "quantum-coin": [
    ["Space", "Measure one coin", "on the picture"]
  ],
  "quantum-waves": [
    ["← →", "Move the launch point (Shift for bigger steps)", "on the energy diagram"],
    ["↑ ↓", "Raise or lower the launch energy (Shift for bigger steps)", "on the energy diagram"],
    ["M", "Measure the position of the electron", "on the energy diagram"],
    ["1 – 9", "Add or drop an energy level (well)", "on the energy diagram"],
    ["1 – 9", "Add or drop one of the lowest states", "on the electron in the plane, or its energy levels"]
  ],
  "radioactive-decay": [
    ["← → ↑ ↓", "Move to a neighboring nucleus once one is picked (Shift for 5 steps)", "on the tray of nuclei"],
    ["S", "Take one step", "on the tray of nuclei"],
    ["← →", "Lower or raise the half life of the parent (Shift for bigger steps)", "on the graph of nuclei against time"],
    ["↑ ↓", "Lower or raise the half life of the daughter (Shift for bigger steps)", "on the graph of nuclei against time"],
    ["← →", "Pick the previous or next nucleus", "on the close up of one nucleus"]
  ],
  "radiobiology": [
    ["← →", "Lower or raise the dose D (Survival and oxygen), the LET (Proton RBE) or the number of fractions (Fractionation); Shift for bigger steps", "on the picture"]
  ],
  "rainbows": [
    ["← → ↑ ↓", "Move the ray (One drop) or the Sun (The sky); Shift for bigger steps", "on the picture"]
  ],
  "relativistic-motion": [
    ["Space", "Launch the electron (Electron flight)", "on the picture"]
  ],
  "relativity-em": [
    ["F", "Switch between the lab frame and the charge's frame (Wire, Magnet and loop)", "on the 3D picture"],
    ["← →", "Lower or raise the main setting: the speed, the current or the field (Shift for bigger steps)", "on the 3D picture"],
    ["↑ ↓", "Move the charge closer to or farther from the wire (Wire), or the ring along the magnet (Magnet and loop); Shift for bigger steps", "on the 3D picture"]
  ],
  "resistivity": [
    ["← →", "Slide the movable clip along the wire by half a centimeter (Shift: 5 cm)", "on the picture (Bench view)"],
    ["← → ↑ ↓", "Move the probe over the sheet by 0.25 cm (Shift: 1 cm)", "on the picture (Current in a sheet view)"]
  ],
  "resolution": [
    ["← →", "Move the cursor along the intensity graph (Shift: ten times as far)", "on the intensity graph"]
  ],
  "resonators": [
    ["↑ ↓", "Move the water level in the resonance tube (Shift: ten times as far)", "on the picture (Resonance tube)"],
    ["Enter C", "Capture a reading", "on the picture (Resonance tube)"],
    ["← →", "Make the pipe shorter or longer (Shift: ten times as far)", "on the picture (Pipe)"],
    ["↑ ↓", "Step the harmonic up or down", "on the picture (Pipe)"],
    ["← →", "Move the pluck point along the string (Shift: six steps)", "on the picture (String)"],
    ["Enter", "Pluck the string", "on the picture (String)"],
    ["↑ ↓", "Raise or lower the water level in the bottle (Shift: ten steps)", "on the picture (Bottle)"],
    ["Enter B", "Start or stop blowing across the bottle", "on the picture (Bottle)"]
  ],
  "retrograde-motion": [
    ["← → ↑ ↓", "Step the date back or forward one day (Shift: ten days)", "on the view from above the North Pole"],
    ["+ −", "Zoom the sky strip in or out", "on the sky strip"],
    ["← →", "Look along the sky strip", "on the sky strip"]
  ],
  "ripple-tank": [
    ["A B", "Choose which end of the measuring line the arrow keys move", "on the picture"],
    ["← → ↑ ↓", "Move the chosen end of the measuring line (Shift: 10 mm)", "on the picture"]
  ],
  "rocket": [],
  "room-acoustics": [
    ["← →", "Move the microphone away from or toward the loudspeaker by 0.1 m (Shift: 1 m)", "on the picture or the 3D room"],
    ["C", "Clap", "on the picture or the 3D room"]
  ],
  "rotating-frames": [
    ["← → ↑ ↓", "Change the turntable speed (Turntable view) or the latitude (Foucault view); Shift for bigger steps", "on the picture"]
  ],
  "rotation": [
    ["Enter", "Start, pause or resume the run, like the main button", "on the picture"],
    ["← → ↑ ↓", "Torque scene: ← → change the push point r, ↑ ↓ change the angle θ (Shift: five steps)", "on the picture"],
    ["+ −", "Torque scene: raise or lower the force F", "on the picture"],
    ["1 2 3 4 5 6 7 8 9", "Rolling scene: pick a lane (the number of lanes decides how many keys work)", "on the picture"],
    ["↑ ↓", "Rolling scene: tilt the ramp steeper or shallower (Shift: five steps)", "on the picture"],
    ["← → ↑ ↓", "Floor scene: ↑ ↓ change the launch speed, ← → change the launch spin", "on the picture"],
    ["← → ↑ ↓", "Yo-yo scene: ↑ ↓ change the drop height, ← → change the axle radius", "on the picture"],
    ["← → ↑ ↓", "Collide scene: ↑ ↓ change the ball speed (friction for the disks), ← → change the hit point (bottom disk spin for the disks)", "on the picture"],
    ["↑ ↓", "Spin scene: change the radius of the masses", "on the picture"],
    ["1 2 3", "Seesaw scene: pick block A, B or C", "on the picture"],
    ["← →", "Seesaw scene: move the picked block left or right (Shift: five steps)", "on the picture"]
  ],
  "rotation-curves": [
    ["← →", "Move the chosen radius in or out (Shift: five times as far)", "on the picture"],
    ["↑ ↓", "Raise or lower the dark matter halo density (Shift: five times as far)", "on the picture"],
    ["V", "Switch between the face on and edge on views", "on the picture"],
    ["H", "Turn the dark matter halo on or off", "on the picture"]
  ],
  "rotational-dynamics": [
    ["↑ ↓", "Hang another 5 g mass or take off the last mass", "on the picture"]
  ],
  "rutherford": [
    ["↑ ↓", "Change the impact parameter b (one alpha) or the beam radius (beam mode, nuclear model); Shift for five steps", "on the picture"],
    ["← →", "Turn the 3D view (Shift: five steps)", "on the picture (3D view)"],
    ["V", "Switch the 3D view on or off", "on the picture"],
    ["B", "Switch between one alpha and a beam", "on the picture"],
    ["P", "Switch between the plum pudding and nuclear atom models", "on the picture"],
    ["Q", "Switch the projectile between the alpha and the antialpha", "on the picture"],
    ["F", "Fire", "on the picture"],
    ["C", "Clear the counts", "on the picture"]
  ],
  "seasons": [
    ["← →", "Step the date back or forward one day (Shift: ten days)", "on the orbit picture or the yearly chart"],
    ["↑ ↓", "Raise or lower the observer's latitude by half a degree (Shift: 5 degrees)", "on the Earth closeup"]
  ],
  "shells-and-x-rays": [
    ["↑ ↓", "Add or remove a proton", "on the picture (Build an atom view)"],
    ["→ ←", "Add or remove a neutron", "on the picture (Build an atom view)"],
    ["+ −", "Add or remove an electron", "on the picture (Build an atom view)"],
    ["← → ↑ ↓", "Step the atomic number Z down or up", "on the picture (Shells view)"],
    ["← → ↑ ↓", "Move the cursor along the spectrum (Shift: larger steps)", "on the spectrum graph (X-ray tube view)"]
  ],
  "solar-system-formation": [
    ["← →", "Move the probe in or out (Shift: larger steps)", "on the picture (2 Frost line stage)"]
  ],
  "sound-intensity": [
    ["← →", "Move the meter toward or away from the speaker by 0.1 m (Shift: 1 m)", "on the picture"],
    ["Page Up Page Down", "Double or halve the distance r", "on the picture"]
  ],
  "sound-waves": [
    ["Space", "Strike the materials in the Race view, or clap in the Time of flight view", "on the picture"],
    ["C", "Clap", "on the picture (Time of flight view)"],
    ["← → ↑ ↓", "Pan the 3D Race view", "on the picture (3D Race view)"]
  ],
  "spacetime": [
    ["← → ↑ ↓", "Move the selected event (Shift: larger steps), or pan the diagram if none is selected", "on the diagram"],
    ["[ ]", "Select the previous or next event", "on the diagram"],
    ["Delete", "Remove the selected event", "on the diagram"],
    ["Esc", "Deselect the events", "on the diagram"],
    ["N", "Add an event", "on the diagram"],
    ["M", "Switch between both frames and the moving frame's view", "on the diagram"],
    ["+ −", "Zoom the diagram in or out", "on the diagram"],
    ["0", "Fit the whole diagram in the view", "on the diagram"]
  ],
  "spectra": [
    ["← →", "Step to the previous or next element in the periodic table (Explore mode)", ""],
    ["← →", "Step from line to line (Shift: ten lines)", "on a spectrum"],
    ["Home End", "Jump to the first or last line", "on a spectrum"],
    ["Enter or Space", "Mark or unmark the line", "on a spectrum"],
    ["Esc", "Hide the line readout", "on a spectrum"],
    ["← → ↑ ↓", "Move to the transition from the next lower or higher level", "on the hydrogen energy level diagram"],
    ["Home End", "Jump to the lowest or highest upper level", "on the hydrogen energy level diagram"],
    ["← →", "Lower or raise the temperature (Shift: ten times as far)", "on the star temperature chart"]
  ],
  "speed-of-light": [
    ["↑ ↓", "Speed the mirror up or down by 10 revolutions per second (Shift: ten times as much)", "on the 3D bench"],
    ["← →", "Shorten or lengthen the path D to the far mirror (Shift: ten times as far)", "on the 3D bench"],
    ["Page Up Page Down", "Move lens L2 (B) farther or closer", "on the 3D bench"],
    ["C", "Reverse the motor", "on the 3D bench or the flat bench drawing"],
    ["V", "Switch between normal and slow motion views", "on the 3D bench or the flat bench drawing"],
    ["→ ←", "Move lens L2 (B) one way or the other (Shift: ten times as far)", "on the top view"],
    ["↑ ↓", "Lengthen or shorten the path D (Shift: ten times as far)", "on the top view"],
    ["← → ↑ ↓", "Move the crosshair by 0.001 mm (Shift: 0.01 mm)", "on the measuring microscope"],
    ["Page Up Page Down", "Move the crosshair by 0.1 mm", "on the measuring microscope"],
    ["Enter", "Capture a reading", "on the measuring microscope"]
  ],
  "spin-resonance": [
    ["↑ ↓", "Turn the SENS screw up or down (Shift: ten times as far)", "on the 3D bench"],
    ["← →", "Turn the FREQ knob (proton setup only; Shift: ten times as far)", "on the 3D bench"],
    ["H", "Change the frequency range (Hz selector)", "on the 3D bench"],
    ["S", "Switch between the FAST and SLOW run modes", "on the 3D bench"],
    ["R", "Start a slow run", "on the 3D bench"],
    ["E P", "Switch to the ESR or PSR setup", "on the 3D bench"],
    ["A B V", "Pick cursor A, cursor B or the V cursor", "on the oscilloscope"],
    ["1 2", "Pick channel marker 1 or 2", "on the oscilloscope"],
    ["← →", "Move the picked time cursor (Shift: ten times as far)", "on the oscilloscope"],
    ["↑ ↓", "Move the V cursor or the picked channel marker (Shift: ten times as far)", "on the oscilloscope"],
    ["1 2", "Pick ruler line 1 or 2", "on the chart recorder"],
    ["← →", "Move the picked ruler line (Shift: ten times as far)", "on the chart recorder"]
  ],
  "springs": [
    ["← →", "Pull the block 1 cm one way or the other and release it from rest (↑ ↓ when hanging; with Shift, block 2)", "on the picture"],
    ["[ ]", "Give the block a push of 5 cm/s backward or forward", "on the picture"],
    ["Page Up Page Down", "Raise or lower the spring constant k", "on the picture"],
    ["W", "Start or stop the stopwatch", "on the picture"],
    ["C", "Capture a reading", "on the picture"],
    ["D", "Drop a block onto the moving block (free horizontal setup)", "on the picture"],
    ["← →", "Lower or raise the drive frequency ω (Shift: ten times as far)", "on the resonance curve (Driven setup)"],
    ["S", "Start or stop a frequency sweep", "on the resonance curve (Driven setup)"],
    ["↑ ↓", "Pull the picked block 1 cm one way or the other and release it (← → on a level track)", "on the picture (Sandbox)"],
    ["W", "Start or stop the stopwatch", "on the picture (Sandbox)"],
    ["L", "Let go of the top of the chain", "on the picture (Sandbox, chain of blocks)"],
    ["N", "Pick the next puck", "on the picture (Sandbox, grid of pucks)"],
    ["← → ↑ ↓", "Pull the picked puck 1 cm and release it", "on the picture (Sandbox, grid of pucks)"],
    ["1 2 3 4 5 6 7 8 9 0", "Start the rig in normal mode 1 to 10 alone", "on the normal modes graph (Sandbox)"]
  ],
  "standing-waves": [
    ["↑ ↓", "Raise or lower amplitude A1 (Shift: ten steps)", "on the picture (Two waves view)"],
    ["← →", "Lower or raise amplitude A2 (Shift: ten steps)", "on the picture (Two waves view)"],
    ["1 2 3 4 5 6 7 8", "Pick harmonic 1 to 8 on the string", "on the picture (String view)"],
    ["← →", "Step to the previous or next harmonic", "on the picture (String view, Harmonic mode)"],
    ["← → ↑ ↓", "Lower or raise the drive frequency (Shift: ten steps)", "on the picture (String view, Drive mode)"],
    ["← →", "Move the pluck point along the string", "on the picture (String view, Pluck mode)"],
    ["↑ ↓", "Lower or raise the pluck height", "on the picture (String view, Pluck mode)"],
    ["← →", "Lower or raise the frequency difference f2 − f1 (Shift: ten steps)", "on the picture (Beats view)"],
    ["↑ ↓", "Raise or lower amplitude A2 (Shift: ten steps)", "on the picture (Beats view)"]
  ],
  "star-slice": [
    ["← →", "Step to the earlier or later moment", "on the cross section"],
    ["↑ ↓", "Zoom in or out", "on the cross section"],
    ["Home End", "Jump to the first or last moment", "on the cross section or the 3D star"],
    ["← → ↑ ↓", "Turn the 3D star", "on the 3D star"],
    ["+ −", "Zoom the 3D star in or out", "on the 3D star"],
    ["Page Up Page Down", "Step to the earlier or later moment", "on the 3D star"],
    ["[ ]", "Step to the earlier or later moment", "on the 3D star"],
    ["Esc 0", "Reset the 3D view", "on the 3D star"],
    ["← → ↑ ↓", "Move the probe one zone along the star (Shift: ten zones)", "on the composition graph or the temperature and density graph"],
    ["Home End", "Move the probe to the center or the surface", "on the composition graph or the temperature and density graph"]
  ],
  "states-of-matter": [],
  "stress-strain": [
    ["↑ ↓", "Add or take off load in the tension test, or raise or lower the force in the other tests (Shift: larger steps)", "on the picture"]
  ],
  "string-density": [
    ["← →", "Raise or lower the driver frequency by 0.1 Hz (Shift: 1 Hz)", "on the picture"],
    ["↑ ↓", "Add a 1 g mass or take off the last mass", "on the picture"]
  ],
  "superconducting-levitation": [
    ["↑ ↓", "Move the hand holding the magnet, changing the gap (Shift: larger steps)", "on the picture"]
  ],
  "superconductors": [
    ["↑ ↓", "Raise or lower the magnetic field B (Shift: larger steps)", "on the picture"],
    ["← →", "Lower or raise the temperature T (Shift: larger steps)", "on the picture"]
  ],
  "telescope-aberrations": [],
  "temperature": [
    ["← →", "Move the probe along the bar (Shift: ten times as far)", "on the picture (Conduction view)"]
  ],
  "terminal-velocity": [],
  "the-eye": [
    ["↑ ←", "Move the object farther away", "on the picture"],
    ["↓ →", "Move the object closer", "on the picture"]
  ],
  "thin-films": [
    ["↑ ↓", "Make the film thicker or thinner (Shift: ten times as much)", "on the main picture"],
    ["← →", "Lower or raise the angle of the incoming ray (Shift: ten times as much)", "on the main picture"],
    ["[ ]", "Lower or raise the wavelength by 5 nm (Shift: ten times as much)", "on the main picture"],
    ["← →", "Lower or raise the wavelength (Shift: ten times as much)", "on the reflectance graph"],
    ["↑ ↓", "Make the film thicker or thinner (Shift: ten times as much)", "on the reflectance graph"],
    ["1 2 3 4", "Choose the Rays, Soap film, Wedge or Newton's rings view", "on the main picture or the reflectance graph"]
  ],
  "tides": [
    ["← → ↑ ↓", "Move the Moon closer or farther (Shift: finer steps)", "on the picture or the graph (Pull on Earth view)"],
    ["← →", "Move the Moon back or forward a day (Shift: finer steps)", "on the picture or the graph (Ocean bulges view)"],
    ["↑ ↓", "Move the time forward or back 15 minutes", "on the picture or the graph (Ocean bulges view)"]
  ],
  "timbre": [
    ["← →", "Pick the previous or next harmonic", "on the picture"],
    ["↑ ↓", "Raise or lower the picked harmonic's amplitude (Shift: smaller steps)", "on the picture"],
    ["[ ]", "Turn the picked harmonic's phase 15 degrees one way or the other", "on the picture"],
    ["0 Delete", "Silence the picked harmonic", "on the picture"]
  ],
  "transformers": [],
  "two-speaker": [
    ["← → ↑ ↓", "Move the microphone 5 cm (Shift: 50 cm)", "on the picture or the microphone"],
    ["[ ]", "Pick the previous or next speaker", "on the picture (Sandbox)"],
    ["← → ↑ ↓", "Move the picked speaker 5 cm (Shift: 50 cm)", "on the picture (Sandbox)"],
    ["Delete", "Remove the picked speaker", "on the picture (Sandbox)"],
    ["Esc", "Deselect the speaker", "on the picture (Sandbox)"]
  ],
  "ultrasound": [
    ["← →", "Move the cursor on the screen (Shift: ten times as far)", "on the picture"]
  ],
  "units": [
    ["↑ →", "Zoom in toward smaller things", "on the picture (Zoom through view)"],
    ["↓ ←", "Zoom out toward bigger things", "on the picture (Zoom through view)"],
    ["← → ↑ ↓", "Move the cursor along the ruler", "on the picture (Ruler view)"]
  ],
  "vectors": [
    ["1 2", "Pick vector A or B", "on the picture"],
    ["A B", "Pick vector A or B", "on the picture"],
    ["← → ↑ ↓", "Move the picked vector's tip one grid step (Shift: a tenth of a step)", "on the picture"],
    ["1 2 3 4", "Pick a string", "on the picture (Force table)"],
    ["← →", "Turn the picked string's pulley by 1 degree (Shift: 10 degrees)", "on the picture (Force table)"],
    ["↑ ↓", "Add or remove 1 g of mass on the picked string (Shift: 10 g)", "on the picture (Force table)"],
    ["P", "Pull out or replace the center pin", "on the picture (Force table)"]
  ],
  "viscometer": [
    ["↑ ↓", "Open or close the outlet valve by 1 percent (Shift: 10 percent)", "on the picture (Pipe experiment)"]
  ],
  "wave-power": [
    ["← →", "Lower or raise the driver frequency by 0.1 Hz (Shift: 1 Hz)", "on the picture"],
    ["↑ ↓", "Raise or lower the vibrator amplitude by 0.05 mm", "on the picture"]
  ],
  "white-dwarf-cooling": [
    ["← →", "Make the star younger or older (Shift: five times as much)", "on the picture"],
    ["↑ ↓", "Raise or lower the mass (Shift: five times as much)", "on the picture"],
    ["T", "Switch the cooling plot between luminosity and core temperature", "on the picture"],
    ["C", "Turn crystallization on or off", "on the picture"],
    ["L", "Turn latent heat on or off (needs crystallization)", "on the picture"],
    ["H", "Switch between a helium and a carbon and oxygen core", "on the picture"],
    ["P", "Show or hide the simulated population", "on the picture"]
  ],
  "wire-force": []
};
