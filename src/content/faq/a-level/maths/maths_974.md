---
title: "How to integrate sec^2(x)tan^3(x)?"
summary: "To integrate sec^2(x)tan^3(x), use substitution with u = tan(x) and du = sec^2(x)dx."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-28
---

To integrate the expression $ \sec^2(x) \tan^3(x) $, we can employ a substitution method. Let us define $ u = \tan(x) $. Consequently, the differential $ du $ will be equal to $ \sec^2(x) \, dx $.

Using this substitution, we can rewrite the integral as follows:

$$
\int \sec^2(x) \tan^3(x) \, dx = \int u^3 \, du.
$$

Next, we can integrate $ u^3 $:

$$
\int u^3 \, du = \frac{1}{4} u^4 + C,
$$

where $ C $ represents the constant of integration.

Now, we substitute back for $ u $ using our original substitution $ u = \tan(x) $:

$$
\frac{1}{4} u^4 + C = \frac{1}{4} \tan^4(x) + C.
$$

Thus, the final result of the integral is:

$$
\int \sec^2(x) \tan^3(x) \, dx = \frac{1}{4} \tan^4(x) + C.
$$
    