---
title: "How to integrate sec^4(x)?"
summary: "To integrate sec^4(x), use the substitution u = tan(x) and simplify using trigonometric identities."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-07
---

To integrate $ \sec^4(x) $, we can use the substitution $ u = \tan(x) $ and apply trigonometric identities for simplification.

First, we express $ \sec^4(x) $ as $ (\sec^2(x))^2 $. Utilizing the identity $ 1 + \tan^2(x) = \sec^2(x) $, we can perform the substitution $ u = \tan(x) $ and $ du = \sec^2(x) \, dx $. This transforms our integral as follows:

$$
\int \sec^4(x) \, dx = \int (\sec^2(x))^2 \, dx
$$

Substituting $ u = \tan(x) $ and $ du = \sec^2(x) \, dx $, we rewrite the integral:

$$
= \int (1 + \tan^2(x))^2 \sec^2(x) \, dx = \int (1 + u^2)^2 \, du
$$

Next, we expand the integrand and integrate term by term:

$$
= \int (1 + 2u^2 + u^4) \, du
$$

Now, we can integrate each term:

$$
= u + \frac{2}{3} u^3 + \frac{1}{5} u^5 + C
$$

Finally, we substitute back $ u = \tan(x) $ to express the result in terms of $ x $:

$$
\int \sec^4(x) \, dx = \tan(x) + \frac{2}{3} \tan^3(x) + \frac{1}{5} \tan^5(x) + C
$$

Thus, the solution to the integral of $ \sec^4(x) $ is:

$$
\int \sec^4(x) \, dx = \tan(x) + \frac{2}{3} \tan^3(x) + \frac{1}{5} \tan^5(x) + C
$$
    