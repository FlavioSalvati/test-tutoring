---
title: "How to calculate the nth root of a complex number?"
summary: "To calculate the nth root of a complex number, use De Moivre's Theorem and polar form."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-12
---

To compute the $n$th root of a complex number, we utilize De Moivre's Theorem along with the polar form of complex numbers.

De Moivre's Theorem states that for any complex number $z = r(\cos \theta + i \sin \theta)$, the $n$th root of $z$ can be expressed as:

$$
z^{1/n} = r^{1/n} \left[ \cos\left(\frac{\theta}{n} + \frac{2\pi k}{n}\right) + i \sin\left(\frac{\theta}{n} + \frac{2\pi k}{n}\right) \right]
$$

where $k = 0, 1, 2, \ldots, n-1$.

To determine the $n$th root of a complex number given in rectangular form, we first convert it into polar form using the following equations:

$$
r = |z| = \sqrt{x^2 + y^2}
$$

$$
\theta = \text{arg}(z) = \tan^{-1}\left(\frac{y}{x}\right)
$$

Here, $x$ and $y$ represent the real and imaginary parts of the complex number $z$, respectively.

After obtaining the polar form, we can then apply De Moivre's Theorem to find the $n$th root.

### Example: Finding the Cube Roots of $z = 8 + 8i$

1. **Convert $z$ to Polar Form:**

   First, we calculate the magnitude $r$:

   $$
   r = |z| = \sqrt{8^2 + 8^2} = \sqrt{64 + 64} = \sqrt{128} = 8\sqrt{2}
   $$

   Next, we determine the angle $\theta$:

   $$
   \theta = \text{arg}(z) = \tan^{-1}\left(\frac{8}{8}\right) = \tan^{-1}(1) = \frac{\pi}{4}
   $$

   Thus, we can express $z$ in polar form:

   $$
   z = 8\sqrt{2} \left( \cos\left(\frac{\pi}{4}\right) + i \sin\left(\frac{\pi}{4}\right) \right)
   $$

2. **Applying De Moivre's Theorem:**

   Now we will find the cube roots of $z$. According to De Moivre's Theorem, the cube roots are given by:

   $$ 
   z^{1/3} = (8\sqrt{2})^{1/3} \left[ \cos\left(\frac{\pi/4}{3} + \frac{2\pi k}{3}\right) + i \sin\left(\frac{\pi/4}{3} + \frac{2\pi k}{3}\right) \right] 
   $$

   for $k = 0, 1, 2$.

   - For $k = 0$:

   $$
   z^{1/3} = (8\sqrt{2})^{1/3} \left[ \cos\left(\frac{\pi}{12}\right) + i \sin\left(\frac{\pi}{12}\right) \right]
   $$

   - For $k = 1$:

   $$
   z^{1/3} = (8\sqrt{2})^{1/3} \left[ \cos\left(\frac{5\pi}{12}\right) + i \sin\left(\frac{5\pi}{12}\right) \right]
   $$

   - For $k = 2$:

   $$
   z^{1/3} = (8\sqrt{2})^{1/3} \left[ \cos\left(\frac{3\pi}{4}\right) + i \sin\left(\frac{3\pi}{4}\right) \right]
   $$

3. **Simplifying the Results:**

   We can simplify $(8\sqrt{2})^{1/3}$:

   $$
   (8\sqrt{2})^{1/3} = 2\sqrt[3]{4} = 2 \cdot 2^{2/3} = 2 \cdot 2^{2/3} = 2^{1 + 2/3} = 2^{5/3}
   $$

   Therefore, the cube roots can be expressed as:

   - For $k = 0$:

   $$
   z^{1/3} = 2 \left( \cos\left(\frac{\pi}{12}\right) + i \sin\left(\frac{\pi}{12}\right) \right)
   $$

   - For $k = 1$:

   $$
   z^{1/3} = 2 \left( \cos\left(\frac{5\pi}{12}\right) + i \sin\left(\frac{5\pi}{12}\right) \right)
   $$

   - For $k = 2$:

   $$
   z^{1/3} = 2 \left( \cos\left(\frac{3\pi}{4}\right) + i \sin\left(\frac{3\pi}{4}\right) \right)
   $$

This process demonstrates how to find the $n$th roots of a complex number using De Moivre's Theorem and polar coordinates effectively.
    