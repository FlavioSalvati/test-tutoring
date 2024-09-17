---
title: "How to integrate x/(1+x^4)?"
summary: "To integrate the function x/(1+x^4), apply the substitution u = x^2, simplifying the integral for easier computation."
author: "Prof. David Martin"
degree: "PhD in Physics, University of Birmingham"
tutor_type: "A-Level Physics Tutor"
date: 2024-03-02
---

To evaluate the integral 

$$
\int \frac{x}{1+x^4} \, dx,
$$ 

we will use the substitution \( u = x^2 \).

First, we find the differential \( du \) in terms of \( dx \):

$$
\frac{du}{dx} = 2x \quad \Rightarrow \quad du = 2x \, dx \quad \Rightarrow \quad dx = \frac{du}{2x}.
$$

Now, we can substitute \( u \) and \( dx \) into the integral:

$$
\int \frac{x}{1+x^4} \, dx = \int \frac{x}{1+(x^2)^2} \, dx = \int \frac{x}{1+u^2} \cdot \frac{du}{2x} = \frac{1}{2} \int \frac{u}{1+u^2} \, du.
$$

Next, we will perform another substitution. Let \( v = 1 + u^2 \). Then, we compute the differential \( dv \):

$$
\frac{dv}{du} = 2u \quad \Rightarrow \quad du = \frac{dv}{2u}.
$$

Substituting \( u \) and \( du \) into the integral, we get:

$$
\frac{1}{2} \int \frac{u}{1+u^2} \, du = \frac{1}{2} \int \frac{u}{v} \cdot \frac{dv}{2u} = \frac{1}{4} \int \frac{1}{v} \, dv.
$$

This integral can be evaluated as follows:

$$
\frac{1}{4} \int \frac{1}{v} \, dv = \frac{1}{4} \ln|v| + C.
$$

Now, substituting back for \( v \) gives:

$$
\frac{1}{4} \ln|1+u^2| + C.
$$

Since \( u = x^2 \), we can rewrite this as:

$$
\frac{1}{4} \ln|1+x^4| + C.
$$

Thus, the integral of \( \frac{x}{1+x^4} \) is:

$$
\int \frac{x}{1+x^4} \, dx = \frac{1}{4} \ln(1+x^4) + C.
$$ 

Therefore, we conclude that the integral is 

$$
\int \frac{x}{1+x^4} \, dx = \frac{1}{4} \ln(1+x^4) + C.
$$
    