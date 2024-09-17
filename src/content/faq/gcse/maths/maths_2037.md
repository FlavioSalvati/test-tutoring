---
title: "How do you model exponential decay using a real-world example?"
summary: "You can model exponential decay using the example of radioactive decay in a sample of a radioactive substance."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "GCSE Maths Tutor"
date: 2024-03-08
---

Exponential decay can be effectively illustrated through the process of radioactive decay in a sample of a radioactive substance.

In the context of exponential decay, the quantity of the substance diminishes at a rate that is proportional to its current value. This implies that, over time, the amount of the substance decreases at an increasingly slower pace. A prevalent real-world example of this phenomenon is radioactive decay, in which unstable atoms lose energy by emitting radiation. The rate of this decay is characterized by the substance's half-life, which is defined as the time required for half of the radioactive atoms in a sample to decay.

Consider a sample of a radioactive substance with a half-life of $10$ years. If you begin with an initial quantity of $100$ grams of this substance, after $10$ years, you would have $50$ grams remaining. After another $10$ years (for a total of $20$ years), the remaining quantity would reduce to $25$ grams, and this pattern continues, with the quantity halving every $10$ years.

This decay process can be mathematically described by the formula:

$$
N(t) = N_0 \times (0.5)^{t/T}
$$

where:
- $N(t)$ represents the amount of substance remaining after time $t$,
- $N_0$ is the initial amount of substance,
- $T$ is the half-life of the substance.

In our example, we have $N_0 = 100$ grams, $T = 10$$ years, and $t$ represents the elapsed time in years.

Using this formula, we can predict how much of the substance will remain after any specified time period. For instance, to determine the remaining quantity after $30$ years, we can calculate:

$$
N(30) = 100 \times (0.5)^{30/10} = 100 \times (0.5)^3 = 100 \times 0.125 = 12.5 \text{ grams}.
$$

This calculation demonstrates how exponential decay can be applied to model real-world scenarios, such as the decay of radioactive materials.
    