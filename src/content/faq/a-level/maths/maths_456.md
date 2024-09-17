---
title: "Evaluate the integral of tan^3(x) dx"
summary: "The integral of tan^3(x) dx is (1/2)tan^2(x)ln|sec(x)| - (1/2)ln|sec(x)| + C."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-06
---

To evaluate the integral of $\tan^3(x) \, dx$, we can utilize the method of integration by substitution. We start by letting $u = \tan(x)$, which gives us the derivative $\frac{du}{dx} = \sec^2(x)$, or equivalently, $dx = \frac{du}{\sec^2(x)}$. 

Substituting these expressions into the integral, we have:

$$
\int \tan^3(x) \, dx = \int u^3 \sec^2(x) \, dx
$$

Next, using the identity $\sec^2(x) = 1 + \tan^2(x)$, we can express the integral as:

$$
= \int u^3 (1 + u^2) \, du
$$

This simplifies to:

$$
= \int u^3 \, du + \int u^5 \, du
$$

Now, we can compute these integrals separately:

$$
= \frac{1}{4} u^4 + \frac{1}{6} u^6 + C
$$

Finally, we substitute back $u = \tan(x)$ to express the result in terms of $x$:

$$
= \frac{1}{4} \tan^4(x) + \frac{1}{6} \tan^6(x) + C
$$

To combine our results, we can factor out common terms. We rearrange the expression as follows:

$$
= \frac{1}{2} \tan^2(x) \left( \frac{1}{2} \tan^2(x) + \ln|\sec(x)| \right) - \frac{1}{2} \ln|\sec(x)| + C
$$

Thus, we conclude that the integral of $\tan^3(x) \, dx$ is given by:

$$
\int \tan^3(x) \, dx = \frac{1}{2} \tan^2(x) \ln|\sec(x)| - \frac{1}{2} \ln|\sec(x)| + C.
$$
    