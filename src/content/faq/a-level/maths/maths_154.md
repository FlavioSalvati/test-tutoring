---
title: "How to calculate the exponential of a complex number?"
summary: "To compute the exponential of a complex number, apply Euler's formula along with the properties of exponents for accurate results."
author: "Dr. Emily Clark"
degree: "PhD in Mathematics, University of Edinburgh"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-29
---

To compute the exponential of a complex number, we can utilize Euler's formula along with the properties of exponents.

Euler's formula states that 

$$
e^{ix} = \cos(x) + i \sin(x)
$$ 

where $i$ is the imaginary unit. To find the exponential of a complex number in the form $e^{a + bi}$, we can express it as 

$$
e^{a + bi} = e^a \cdot e^{bi}.
$$ 

Using Euler's formula, we can rewrite $e^{bi}$ as 

$$
e^{bi} = \cos(b) + i \sin(b).
$$ 

Consequently, we have:

$$
e^{a + bi} = e^a \cdot (\cos(b) + i \sin(b)).
$$ 

For instance, to compute $e^{2 + 3i}$, we have:

$$
e^{2 + 3i} = e^2 \cdot (\cos(3) + i \sin(3)).
$$ 

Using a calculator, we find that 

$$
\cos(3) \approx -0.99 \quad \text{and} \quad \sin(3) \approx 0.14.
$$ 

Thus, we can express $e^{2 + 3i}$ as:

$$
e^{2 + 3i} \approx e^2 \cdot (-0.99 + 0.14i).
$$ 

To simplify expressions involving complex exponentials, we can apply the properties of exponents. For example, the product of two complex exponentials can be expressed as:

$$
e^{(a + bi)} \cdot e^{(c + di)} = e^{(a + c) + (b + d)i}.
$$ 

This means that when multiplying two complex exponentials, we add their real parts and their imaginary parts separately.

As an example, let's find the product $e^{2 + 3i} \cdot e^{4 - 2i}$. We can first calculate each exponential separately as shown earlier. Then, we can use the aforementioned property:

$$
e^{(2 + 3i)} \cdot e^{(4 - 2i)} = e^{(2 + 4) + (3 - 2)i} = e^{6 + i}.
$$ 

In summary, to calculate the exponential of a complex number, we employ Euler's formula and the properties of exponents effectively.
    