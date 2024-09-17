---
title: "How to integrate x^2*sqrt(x+1)?"
summary: "To integrate x^2*sqrt(x+1), use substitution with u = x+1 and then integration by parts."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-18
---

To evaluate the integral of the expression $ x^2 \sqrt{x+1} $, we can apply the method of substitution followed by integration by parts.

We start by making the substitution $ u = x + 1 $. Consequently, we have:

$$
x = u - 1 \quad \text{and} \quad dx = du.
$$

With this substitution, the integral transforms as follows:

$$
\int x^2 \sqrt{x+1} \, dx = \int (u-1)^2 \sqrt{u} \, du.
$$

Next, we expand the expression $ (u-1)^2 $ and simplify the integral:

$$
\int (u-1)^2 \sqrt{u} \, du = \int (u^2 - 2u + 1) \sqrt{u} \, du.
$$

This further simplifies to:

$$
\int \left( u^2 - 2u + 1 \right) \sqrt{u} \, du = \int \left( u^2 \cdot u^{1/2} - 2u \cdot u^{1/2} + 1 \cdot u^{1/2} \right) du = \int \left( u^{5/2} - 2u^{3/2} + u^{1/2} \right) du.
$$

Now, we can integrate each term separately:

$$
= \int u^{5/2} \, du - 2 \int u^{3/2} \, du + \int u^{1/2} \, du.
$$

Calculating these integrals, we find:

$$
\int u^{5/2} \, du = \frac{2}{7} u^{7/2}, \quad \int u^{3/2} \, du = \frac{2}{5} u^{5/2}, \quad \text{and} \quad \int u^{1/2} \, du = \frac{2}{3} u^{3/2}.
$$

Thus, combining all these results, we have:

$$
\frac{2}{7} u^{7/2} - 2 \left(\frac{2}{5} u^{5/2}\right) + \frac{2}{3} u^{3/2} + C = \frac{2}{7} u^{7/2} - \frac{4}{5} u^{5/2} + \frac{2}{3} u^{3/2} + C.
$$

Finally, we substitute back $ u = x + 1 $ to obtain the final answer for the integral:

$$
\frac{2}{7} (x+1)^{7/2} - \frac{4}{5} (x+1)^{5/2} + \frac{2}{3} (x+1)^{3/2} + C.
$$

This completes the integration of $ x^2 \sqrt{x+1} $.
    