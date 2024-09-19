---
title: "What stops a piece of paper from being folded more than seven times?"
summary: "The maximum number of times a piece of paper can be folded depends on its thickness and width.  Each fold doubles the thickness and halves the width, making it impossible to fold beyond a certain point.  A standard piece of printer paper can be folded seven times because its thickness limits further folding."
author: "Dr. Jacob Wilson"
degree: "PhD in Particle Physics, University College London"
tutor_type: "IB Physics Tutor"
date: 2024-06-28
---

## What Stops a Piece of Paper from Being Folded More Than Seven Times?

### Understanding the Limitations of Paper Folding

When considering the question of why a piece of paper cannot be folded more than seven times, it is essential to delve into the physics of the folding process itself. The limitations arise primarily due to the relationship between the thickness of the paper and its width. As you fold paper, the thickness increases exponentially while the width decreases at a slower rate. 

For every fold, the thickness of the paper doubles. If we denote the initial thickness of the paper as $t$, after $n$ folds, the total thickness becomes:

$$
\text{Total Thickness} = 2^n t
$$

Simultaneously, when each fold is made, the width of the paper is halved. If we denote the initial width of the paper as $w$, the width after $n$ folds is given by:

$$
\text{Width After Folds} = \left(\frac{1}{2}\right)^{n/2} w
$$

This folding process assumes that we fold the paper alternately from side to side and top to bottom. 

### The Critical Point of Folding

There comes a critical point in the folding process when the thickness of the folded paper equals its width. At this juncture, further folding is physically impossible. Thus, we set:

$$
2^n t = \left(\frac{1}{2}\right)^{n/2} w
$$

Rearranging this equation and solving for $n$ gives us the maximum number of folds as:

$$
n = 0.96 \ln\left(\frac{w}{t}\right)
$$

### Calculation Example

For a standard piece of printer paper, which typically measures $w = 8.5$ inches in width and has a thickness of $t = 0.004$ inches, substituting these values into the equation yields:

$$
n = 0.96 \ln\left(\frac{8.5}{0.004}\right)
$$

Calculating this gives us approximately $n \approx 7$. Therefore, under normal circumstances, a standard piece of printer paper can indeed only be folded seven times.

### Variations and Other Examples

Interestingly, if you were to use paper that is thinner, such as an $8.5 \times 11$ inch sheet that is half as thick as normal, the equation would allow for one additional fold, resulting in a maximum of $n = 8$. 

Moreover, the scenario changes significantly when we consider materials such as toilet paper. If you were to unroll a roll of toilet paper into a long line and fold it in one direction, the equation alters slightly, leading to:

$$
n = 0.72 \ln\left(\frac{w}{t}\right)
$$

For instance, if you tape together many rolls to create a single piece that is $170,000$ inches long, the calculations suggest that it is theoretically possible to fold it up to thirteen times, a feat that has been accomplished by students at MIT.

### Conclusion

In summary, the limitation of folding a piece of paper more than seven times is fundamentally a consequence of the exponential increase in thickness relative to the linear decrease in width. The mathematical relationship illustrated through the derived equations provides clarity on why there exists a maximum threshold for folding, which, under typical conditions, is indeed seven folds for standard printer paper.
    