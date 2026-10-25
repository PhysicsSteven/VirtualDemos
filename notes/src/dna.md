---
title: DNA in 3D
level: PHYS 202 (Coulomb forces and screening); biophysics; general science
time: 15 to 25 minutes
---
## What students should come away with

- DNA is two antiparallel strands wound into a right handed helix. Each strand is a chain of nucleotides (phosphate, sugar, base); the bases pair across the middle, A with T and G with C, so one strand fixes the other.
- Every Watson–Crick pair is one purine plus one pyrimidine, so A·T and G·C pairs have the same width. That is what lets any sequence wind into the same regular helix.
- In B DNA each pair rises 3.38 Å and turns 36°, ten pairs per turn. The sugars sit on one side of each pair, so the backbones leave a wide major groove and a narrow minor groove.
- The two strands are held together by hydrogen bonds and by stacking between neighboring pairs, and pushed apart by the negative charge on every phosphate. More G·C, a longer duplex and more salt all raise the melting temperature.

## Before class

For the salt question students need Coulomb's law and the idea that ions in water screen a charge; no biology is assumed beyond the four letters. The 3D view loads a graphics library from the web, so open the page once before class (the readouts work without it). Hover an atom to name it; click a letter in **The two strands** to select a base pair.

## Running it in class

1. **Dickerson dodecamer.** Let it turn (press **Spin** if it is still) and ask what repeats along the chain. Hover a few atoms: every nucleotide is a phosphate, a sugar and a base. The **5′ and 3′ ends** labels show that the two strands run in opposite directions. Ask Q2, then read **Length** and **Helical turns**.
2. **One base pair close up.** The view looks down the axis at pair 4, G·C, with three dashed hydrogen bonds. Click pair 5 (an A in the strand panel): two bonds. Compare **C1′ to C1′** for the two pairs and ask Q3.
3. **Two grooves.** Space filling, strands colored. Turn the molecule until both grooves face the room; read **Minor groove** and **Major groove** (Q6).
4. **A versus B.** The same 20 pairs drawn in both forms, B on top. Point out that A is shorter, wider and has a hollow core, then ask Q7.
5. **GC rich**, then a typed sequence. Ask Q1 first. Read **Melting temperature Tm, estimate**. Type twenty A's into the **Sequence** box and press **Build**; compare. Then return to **Dickerson dodecamer** and step **Na+** from **50 mM** to **1 M** (Q5).

## Questions

**Q1.** Predict: a 20 pair duplex made only of G·C pairs (**GC rich**) and one made only of A·T pairs (type AAAAAAAAAAAAAAAAAAAA and press **Build**). Which melts at the higher temperature, and is the difference a few degrees or tens of degrees? Give a reason, then check with **Melting temperature Tm, estimate** at 50 mM Na⁺.

**Q2.** In B DNA each base pair rises 3.38 Å and turns 36.0° relative to the one below. For the 12 pairs of the **Dickerson dodecamer**, find the length the demo reports (12 rises) in nm and the number of helical turns. How many pairs make one full turn? Repeat for the A form (2.56 Å and 32.7° per pair), then check both with **Helix form**.

**Q3.** In **One base pair close up**, compare the **C1′ to C1′** distance for pair 4 (G·C) and pair 5 (A·T). Why must they be nearly equal for any sequence to form a regular helix? Why would an A·G or a C·T pair not fit?

**Q4.** The residue masses are dA 313.21, dC 289.18, dG 329.21 and dT 304.20 g/mol, and each strand in this model loses 61.96 g/mol because its 5′ end has no phosphate. Find the molar mass of both strands of CGCGAATTCGCG. Why are the two strands' masses equal for this particular sequence? Check with **Molar mass, both strands**.

**Q5.** At **Dickerson dodecamer**, step **Na+** from **50 mM** to **1 M** and watch the melting temperature. Every phosphate on the backbone carries a charge of −e. Use Coulomb's law to explain why more salt makes the double helix harder to pull apart.

**Q6.** In **Two grooves** the demo reports a minor groove of about 5.6 Å and a major groove of about 11.4 Å. Use **One base pair close up** (where do the two sugars attach to a pair?) to explain why the grooves are unequal. What happens to the two grooves in the A form?

**Q7.** Strand 1 of the **TATA box** reads 5′ GCCTATAAAAGGGCTGCG 3′. Write strand 2, also read 5′ to 3′, then check against **The two strands** panel. Why is the **Dickerson dodecamer** called self complementary?

## Common misconceptions

- **"The two strands are identical copies."** They are complementary, not identical, and they run in opposite directions. Only a self complementary sequence such as CGCGAATTCGCG reads the same on both strands.
- **"G·C pairs are stronger only because they have three hydrogen bonds instead of two."** Stacking between neighboring pairs contributes as much or more. That is why the melting estimate is built from pairs of neighbors: in its parameters a CG step gives −10.6 kcal/mol of enthalpy but an AT step only −7.2.

## Physics behind the demo

- Atom positions come from the Arnott fiber models of A and B DNA (X-ray fiber diffraction), as tabulated in the Nucleic Acid Builder. Pair k is turned k times the twist and raised k times the rise; strand 2 is the twofold image of strand 1, which makes the strands antiparallel.
- The helix is uniform: every step has the same rise and twist and every pair the same shape. Real structures, such as the Dickerson dodecamer crystal (PDB 1BNA), differ by up to a few ångströms. Hydrogen atoms are not placed; hydrogen bonds are measured between donor and acceptor (N or O) atoms.
- **Length** is the number of pairs times the rise. Groove widths are the closest phosphorus to phosphorus distance across each groove minus 5.8 Å (twice the phosphate radius), measured along the phosphate helices of the model.
- The melting temperature is the SantaLucia (1998) unified nearest neighbor estimate for a two state transition: ΔH and ΔS summed over neighboring pairs plus end terms, a salt correction ΔS += 0.368 (N − 1) ln[Na⁺], total strand concentration 0.5 µM and no magnesium. It is meant for short duplexes; the demo warns when a sequence is longer than 30 pairs.

## Going further

- Homework: the GC rich preset (20 pairs) and the TATA box (18 pairs, 10 of them G·C) differ in both length and composition. Design a fair test of each effect with typed sequences and report the melting temperatures.
