---
title: "Prove De Moivre's theorem"
summary: De Moivre's theorem states that for any complex number $z$ and any positive integer $n$, $(\cos \theta + i \sin \theta)^n = \cos n\theta + i \sin n\theta$.
author: "Prof. Sophia Clark"
degree: "PhD in Nuclear Physics, University of Leeds"
tutor_type: "A-Level Maths Tutor"
date: 2024-03-22
---

De Moivre's theorem asserts that for any complex number $ z $ represented in polar form and for any positive integer $ n $, the following equation holds:

$$
(\cos \theta + i \sin \theta)^n = \cos(n\theta) + i \sin(n\theta).
$$

To establish the validity of De Moivre's theorem, we will utilize mathematical induction. We begin by proving the base case for $ n = 1 $:

$$
(\cos \theta + i \sin \theta)^1 = \cos(1\theta) + i \sin(1\theta).
$$

This simplifies to:

$$
\cos \theta + i \sin \theta = \cos \theta + i \sin \theta.
$$

Since this statement is evidently true, the base case holds.

Next, we assume that De Moivre's theorem is true for some positive integer $ k $:

$$
(\cos \theta + i \sin \theta)^k = \cos(k\theta) + i \sin(k\theta).
$$

Now we must demonstrate that it also holds for $ k + 1 $:

$$
(\cos \theta + i \sin \theta)^{k+1} = (\cos \theta + i \sin \theta)^k \cdot (\cos \theta + i \sin \theta).
$$

Substituting our induction hypothesis into this expression, we get:

$$
(\cos(k\theta) + i \sin(k\theta)) \cdot (\cos \theta + i \sin \theta).
$$

Using the distributive property and applying the trigonometric identities, we can expand this to:

$$
\cos(k\theta) \cos \theta - \sin(k\theta) \sin \theta + i(\sin(k\theta) \cos \theta + \cos(k\theta) \sin \theta).
$$

This can be recognized as:

$$
\cos((k+1)\theta) + i \sin((k+1)\theta),
$$

which confirms that:

$$
(\cos \theta + i \sin \theta)^{k+1} = \cos((k+1)\theta) + i \sin((k+1)\theta).
$$

Thus, we have demonstrated that if the theorem holds for $ k $, it also holds for $ k + 1 $. By the principle of mathematical induction, we conclude that De Moivre's theorem is valid for all positive integers $ n $.

Understanding the underlying trigonometric identities is essential, as highlighted in the accompanying notes. Moreover, the applications of these identities within the realm of complex numbers warrant further exploration. For a more detailed examination of the induction proof, additional resources are available.
    