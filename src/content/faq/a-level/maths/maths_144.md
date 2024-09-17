---
title: "Evaluate the integral of tan(x) dx"
summary: "The integral of tan(x) with respect to x is expressed as ln|sec(x)| + C, where C represents the constant of integration."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-01-25
---

The integral of $\tan(x)$ with respect to $x$ is given by:

$$
\int \tan(x) \, dx = \ln |\sec(x)| + C,
$$

where $C$ is the constant of integration.

To evaluate the integral of $\tan(x) \, dx$, we can employ the substitution method. We start by letting \( u = \cos(x) \). Consequently, we differentiate to find:

$$
\frac{du}{dx} = -\sin(x) \quad \Rightarrow \quad du = -\sin(x) \, dx \quad \Rightarrow \quad dx = \frac{du}{-\sin(x)}.
$$

Substituting these expressions into the integral, we have:

$$
\int \tan(x) \, dx = \int \frac{\sin(x)}{\cos(x)} \, dx = \int \frac{\sin(x)}{u} \left(-\frac{du}{\sin(x)}\right).
$$

This simplifies to:

$$
-\int \frac{du}{u} = -\ln |u| + C.
$$

Substituting back for \( u \), we obtain:

$$
-\ln |\cos(x)| + C = \ln |\sec(x)| + C.
$$

Thus, we conclude that the integral of $\tan(x) \, dx$ is:

$$
\int \tan(x) \, dx = \ln |\sec(x)| + C.
$$

It is important to emphasize that the natural logarithm function is only defined for positive values. Therefore, we include the absolute value in the final result to ensure the expression is valid for all values of $x$ where $\sec(x)$ is defined.
    