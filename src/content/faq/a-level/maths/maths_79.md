---
title: "How to calculate the common logarithm of a complex number?"
summary: "To find the common logarithm of a complex number, it must first be converted into polar form."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-05-19
---

To compute the common logarithm of a complex number, we first need to convert it into polar form.

Start by expressing the complex number in the standard form \( a + bi \), where \( a \) and \( b \) are real numbers and \( i \) is the imaginary unit. Next, we calculate the modulus \( r \) and the argument \( \theta \) of the complex number using the following formulas:

$$
r = \sqrt{a^2 + b^2}
$$

$$
\theta = \tan^{-1}\left(\frac{b}{a}\right)
$$

After determining \( r \) and \( \theta \), we can represent the complex number in polar form as:

$$
r \left( \cos \theta + i \sin \theta \right)
$$

Finally, we can find the common logarithm of the complex number using the formula:

$$
\log(z) = \log(r) + i\theta
$$

**Example:**

Let's find the common logarithm of the complex number \( 2 + 3i \):

1. Calculate the modulus \( r \):

$$
r = \sqrt{2^2 + 3^2} = \sqrt{4 + 9} = \sqrt{13}
$$

2. Next, calculate the argument \( \theta \):

$$
\theta = \tan^{-1}\left(\frac{3}{2}\right) \approx 56.31^\circ
$$

Thus, the complex number in polar form is:

$$
\sqrt{13} \left( \cos(56.31^\circ) + i \sin(56.31^\circ) \right)
$$

Using the logarithm formula, we can compute the common logarithm:

$$
\log(2 + 3i) = \log(\sqrt{13}) + i \cdot 56.31^\circ
$$

To express \( \log(\sqrt{13}) \):

$$
\log(\sqrt{13}) = \frac{1}{2} \log(13) \approx 0.1139
$$

Therefore, we obtain:

$$
\log(2 + 3i) \approx 0.1139 + i \cdot 56.31^\circ
$$

To express the argument in terms of natural logarithm:

$$
\log(2 + 3i) = 0.1139 + i \cdot \frac{56.31^\circ}{\log(10)} \approx 0.1139 + i \cdot 0.8686
$$

Thus, the common logarithm of \( 2 + 3i \) is approximately:

$$
0.1139 + i \cdot 0.8686
$$
    