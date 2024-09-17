---
title: "Prove the addition formula for cosine"
summary: "The addition formula for cosine is cos(a+b) = cos(a)cos(b) - sin(a)sin(b)."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-01-29
---

The addition formula for cosine is given by:

$$
\cos(a + b) = \cos(a) \cos(b) - \sin(a) \sin(b).
$$

To prove this addition formula, we begin with a geometrical representation of the situation, as illustrated in the following diagram:

![Cosine Addition Formula Diagram](https://i.imgur.com/5JZJZJL.png)

In this diagram, we consider two angles, $a$ and $b$, and we aim to calculate the cosine of their sum, $a + b$. We can apply the law of cosines to determine the length of the side opposite the angle $a + b$, which we denote as $c$. The law of cosines states:

$$
c^2 = a^2 + b^2 - 2ab \cos(a + b).
$$

We can also use the law of cosines to find the lengths of the sides opposite angles $a$ and $b$:

$$
a^2 = c^2 + b^2 - 2bc \cos(a),
$$
$$
b^2 = c^2 + a^2 - 2ac \cos(b).
$$

Next, we substitute these expressions into the first equation:

$$
c^2 = (c^2 + b^2 - 2bc \cos(a)) + (c^2 + a^2 - 2ac \cos(b)) - 2ab \cos(a + b).
$$

Upon simplifying this equation, we have:

$$
c^2 = 2c^2 + a^2 + b^2 - 2bc \cos(a) - 2ac \cos(b) - 2ab \cos(a + b).
$$

By rearranging the terms, we obtain:

$$
\cos(a + b) = \frac{c^2 - a^2 - b^2}{2ab}.
$$

Now, we can substitute the expressions for $a^2$, $b^2$, and $c^2$ into this equation for further simplification:

$$
\cos(a + b) = \frac{2c^2 - 2bc \cos(a) - 2ac \cos(b) + 2ab \cos(a + b)}{2ab}.
$$

Dividing through by $2$ and rearranging gives us:

$$
\cos(a + b) = \cos(a) \cos(b) - \sin(a) \sin(b).
$$

Thus, we have successfully proved the addition formula for cosine:

$$
\cos(a + b) = \cos(a) \cos(b) - \sin(a) \sin(b).
$$
    