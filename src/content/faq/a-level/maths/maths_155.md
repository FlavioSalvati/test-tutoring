---
title: "Evaluate the integral of sec(x) dx"
summary: "The integral of sec(x) with respect to x is expressed as ln|sec(x) + tan(x)| + C, where C represents the constant of integration."
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-26
---

The integral of $\sec(x) \, dx$ is given by:

$$
\int \sec(x) \, dx = \ln|\sec(x) + \tan(x)| + C
$$

To evaluate this integral, we can employ the method of substitution. Let us define:

$$
u = \sec(x) + \tan(x)
$$

Next, we differentiate $u$ with respect to $x$:

$$
\frac{du}{dx} = \sec(x)\tan(x) + \sec^2(x) = u(\tan(x) + u)
$$

Rearranging this equation, we find:

$$
dx = \frac{du}{\tan(x) + u}
$$

Now, we can substitute $u$ and $dx$ into the integral:

$$
\int \sec(x) \, dx = \int \frac{du}{\tan(x) + u}
$$

At this point, we will use partial fractions to break the integral into simpler components:

$$
\frac{1}{\tan(x) + u} = \frac{A}{\tan(x)} + \frac{B}{u}
$$

Multiplying both sides by $(\tan(x) + u)$ gives:

$$
1 = A u + B \tan(x)
$$

To find coefficients $A$ and $B$, we can set $u = -\tan(x)$. This leads to:

$$
1 = A(-\tan(x)) + B \tan(x) \implies A = -\frac{1}{\tan(x)} = -\cot(x)
$$

Next, we set $u = 1$ to find $B$:

$$
1 = A(1) + B \tan(x) \implies B = 1
$$

Thus, we can express the integral as:

$$
\frac{1}{\tan(x) + u} = -\frac{\cot(x)}{\tan(x)} + \frac{1}{u}
$$

Substituting this back into our integral, we have:

$$
\int \sec(x) \, dx = \int \left(-\frac{\cot(x)}{\tan(x)} + \frac{1}{u}\right) du
$$

Evaluating the integrals separately yields:

$$
-\int \frac{\cot(x)}{\tan(x)} \, du + \int \frac{1}{u} \, du = -\ln|\tan(x)| + \ln|\sec(x) + \tan(x)| + C
$$

Combining the logarithmic terms, we find:

$$
\int \sec(x) \, dx = \ln|\sec(x) + \tan(x)| - \ln|\cos(x)| + C
$$

This can be simplified further:

$$
= \ln\left|\frac{\sec(x) + \tan(x)}{\cos(x)}\right| + C
$$

Recognizing that $\sec(x) = \frac{1}{\cos(x)}$, we rewrite it as:

$$
= \ln|\sec(x)(\sec(x) + \tan(x))| + C
$$

Thus, we arrive at our final expression:

$$
\int \sec(x) \, dx = \ln|\sec(x) + \tan(x)| + C
$$

In conclusion, the integral of $\sec(x) \, dx$ can be succinctly expressed as:

$$
\int \sec(x) \, dx = \ln|\sec(x) + \tan(x)| + C
$$
    