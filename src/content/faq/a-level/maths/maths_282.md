---
title: "How to integrate ln(x)/x?"
summary: "To integrate ln(x)/x, use substitution u = ln(x) and du/dx = 1/x."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-04
---

To integrate the function $\frac{\ln(x)}{x}$, we can utilize the substitution method. We start by letting 

$$
u = \ln(x).
$$ 

From this substitution, we can determine the derivative:

$$
\frac{du}{dx} = \frac{1}{x}.
$$ 

Rearranging this expression, we find:

$$
dx = x \, du.
$$ 

Now we can substitute these expressions into the integral. Thus, we have:

$$
\int \frac{\ln(x)}{x} \, dx = \int u \, du.
$$ 

Integrating $u$ with respect to $u$ yields:

$$
\int u \, du = \frac{u^2}{2} + C,
$$ 

where $C$ is the constant of integration. However, we need to express our result in terms of $x$. We substitute back $u = \ln(x)$ into the equation:

$$
\int \frac{\ln(x)}{x} \, dx = \frac{(\ln(x))^2}{2} + C.
$$ 

Thus, the integral of $\frac{\ln(x)}{x}$ is 

$$
\frac{(\ln(x))^2}{2} + C,
$$ 

where $C$ represents the constant of integration.

It is important to note that the domain of the function $\frac{\ln(x)}{x}$ is $(0, \infty)$, as $\ln(x)$ is undefined for $x \leq 0$. Additionally, as $x$ approaches $0$, $\ln(x)$ tends toward negative infinity, which indicates that the integral diverges at $x = 0$.
    