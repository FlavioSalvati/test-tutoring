---
title: "What's the integral of 1/(x^2-1)?"
summary: "The integral of 1/(x^2-1) is ln|(x-1)/(x+1)| + C."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-13
---

The integral of the function $\frac{1}{x^2 - 1}$ can be expressed as:

$$
\int \frac{1}{x^2 - 1} \, dx = \ln \left| \frac{x + 1}{x - 1} \right| + C,
$$

where $C$ is the constant of integration.

To solve this integral, we can utilize the method of partial fractions. First, we factor the denominator:

$$
x^2 - 1 = (x + 1)(x - 1).
$$

Next, we express $\frac{1}{x^2 - 1}$ in terms of partial fractions:

$$
\frac{1}{x^2 - 1} = \frac{A}{x + 1} + \frac{B}{x - 1},
$$

where $A$ and $B$ are constants that we need to determine.

Multiplying both sides of the equation by the denominator $(x + 1)(x - 1)$ gives us:

$$
1 = A(x - 1) + B(x + 1).
$$

To find the values of $A$ and $B$, we can strategically choose values for $x$. 

1. Setting $x = 1$:

$$
1 = A(1 - 1) + B(1 + 1) \implies 1 = 2B \implies B = \frac{1}{2}.
$$

2. Setting $x = -1$:

$$
1 = A(-1 - 1) + B(-1 + 1) \implies 1 = -2A \implies A = -\frac{1}{2}.
$$

With the values of $A$ and $B$ determined, we can rewrite the partial fraction decomposition as:

$$
\frac{1}{x^2 - 1} = \frac{-\frac{1}{2}}{x + 1} + \frac{\frac{1}{2}}{x - 1}.
$$

Now, we can integrate both sides:

$$
\int \frac{1}{x^2 - 1} \, dx = \int \left( -\frac{1}{2(x + 1)} + \frac{1}{2(x - 1)} \right) \, dx.
$$

Calculating the integrals yields:

$$
-\frac{1}{2} \ln |x + 1| + \frac{1}{2} \ln |x - 1| + C.
$$

We can simplify this expression further:

$$
\int \frac{1}{x^2 - 1} \, dx = \frac{1}{2} \left( \ln |x - 1| - \ln |x + 1| \right) + C = \frac{1}{2} \ln \left| \frac{x - 1}{x + 1} \right| + C.
$$

By applying logarithmic properties, we can rewrite this as:

$$
\int \frac{1}{x^2 - 1} \, dx = \ln \left| \frac{x + 1}{x - 1} \right| + C.
$$

Thus, we conclude that the integral of $\frac{1}{x^2 - 1}$ is:

$$
\int \frac{1}{x^2 - 1} \, dx = \ln \left| \frac{x + 1}{x - 1} \right| + C.
$$
    