---
title: "What's the integral of 1/(x^2-4)?"
summary: "The integral of 1/(x^2-4) is (1/4)ln|(x-2)/(x+2)| + C."
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-23
---

Here’s an enhanced version of your content for clarity and readability, with proper formatting for mathematical expressions:

The integral of the function $\frac{1}{x^2 - 4}$ can be expressed as:

$$
\int \frac{1}{x^2 - 4} \, dx = \frac{1}{4} \ln \left| \frac{x - 2}{x + 2} \right| + C,
$$

where $C$ is the constant of integration.

To solve this integral, we will utilize the method of partial fractions. First, we factor the denominator:

$$
x^2 - 4 = (x + 2)(x - 2).
$$

Next, we can express $\frac{1}{x^2 - 4}$ in terms of partial fractions as follows:

$$
\frac{1}{x^2 - 4} = \frac{A}{x + 2} + \frac{B}{x - 2},
$$

where $A$ and $B$ are constants that we need to determine.

To find $A$ and $B$, we start by multiplying both sides by the denominator $(x + 2)(x - 2)$:

$$
1 = A(x - 2) + B(x + 2).
$$

We can solve for $A$ and $B$ by substituting convenient values for $x$. 

First, let’s set $x = 2$:

$$
1 = A(2 - 2) + B(2 + 2) \implies 1 = 0 + 4B \implies B = \frac{1}{4}.
$$

Next, let’s set $x = -2$:

$$
1 = A(-2 - 2) + B(-2 + 2) \implies 1 = -4A + 0 \implies A = -\frac{1}{4}.
$$

Now that we have determined $A$ and $B$ as $A = -\frac{1}{4}$ and $B = \frac{1}{4}$, we can rewrite the integral:

$$
\int \frac{1}{x^2 - 4} \, dx = \int \left( \frac{-\frac{1}{4}}{x + 2} + \frac{\frac{1}{4}}{x - 2} \right) \, dx.
$$

This simplifies to:

$$
\int \left( -\frac{1}{4} \frac{1}{x + 2} + \frac{1}{4} \frac{1}{x - 2} \right) \, dx = \frac{1}{4} \int \left( \frac{1}{x - 2} - \frac{1}{x + 2} \right) \, dx.
$$

Next, we can integrate each term separately, yielding:

$$
\frac{1}{4} \left( \ln |x - 2| - \ln |x + 2| \right) + C = \frac{1}{4} \ln \left| \frac{x - 2}{x + 2} \right| + C.
$$

Thus, we conclude that the integral of $\frac{1}{x^2 - 4}$ is:

$$
\int \frac{1}{x^2 - 4} \, dx = \frac{1}{4} \ln \left| \frac{x - 2}{x + 2} \right| + C.
$$
    