---
title: "Prove the formula for the area of a triangle given three sides (Heron's formula)"
summary: "Heron's formula calculates the area of a triangle using the lengths of its three sides, providing a method to determine the area without needing the height."
author: "Prof. Michael Lewis"
degree: "PhD in Physics, University of Oxford"
tutor_type: "IB Physics Tutor"
date: 2024-05-02
---

Heron's formula allows us to calculate the area of a triangle based solely on the lengths of its three sides. 

The formula is expressed as follows:

$$
\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}
$$

Here, $a$, $b$, and $c$ represent the lengths of the sides of the triangle, while $s$ denotes the semi-perimeter, defined by:

$$
s = \frac{a + b + c}{2}
$$

To derive this formula, we begin by considering a triangle with sides $a$, $b$, and $c$. We can draw an altitude from one of the vertices to the opposite side, which splits the triangle into two right triangles. Let $h$ represent the length of this altitude, and let $x$ and $y$ be the lengths of the segments of the opposite side that are adjacent to the altitude.

According to the Pythagorean theorem, we can express the relationships as follows:

$$
a^2 = h^2 + x^2
$$

$$
b^2 = h^2 + y^2
$$

By adding these two equations, we obtain:

$$
a^2 + b^2 = 2h^2 + x^2 + y^2
$$

Since we know that $x + y = c$, we can express $x$ in terms of $y$:

$$
x = c - y
$$

Substituting this expression into the earlier equation yields:

$$
a^2 + b^2 = 2h^2 + (c - y)^2 + y^2
$$

Expanding this results in:

$$
a^2 + b^2 = 2h^2 + c^2 - 2cy + y^2
$$

Rearranging the equation gives us:

$$
2h^2 = a^2 + b^2 - c^2 + 2cy - y^2
$$

Next, we substitute $h = \frac{2A}{c}$, where $A$ denotes the area of the triangle:

$$
4A^2/c^2 = a^2 + b^2 - c^2 + 2cy - y^2
$$

By multiplying both sides by $c^2$ and simplifying, we arrive at:

$$
16A^2 = 4a^2c^2 + 4b^2c^2 - 4c^4 + 8cAy - 4cy^2
$$

Finally, by dividing both sides by $16$ and taking the square root, we obtain the desired formula:

$$
A = \sqrt{s(s-a)(s-b)(s-c)}
$$

where $s = \frac{a+b+c}{2}$, confirming the validity of Heron's formula.
    