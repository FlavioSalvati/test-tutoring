---
title: "Calculate the remainder when x^4 - 2x^3 + x^2 - 2x + 1 is divided by x + 1"
summary: "The remainder when x^4 - 2x^3 + x^2 - 2x + 1 is divided by x + 1 is 2."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-22
---

To determine the remainder when the polynomial $ x^4 - 2x^3 + x^2 - 2x + 1 $ is divided by $ x + 1 $, we can apply the Remainder Theorem. This theorem states that when a polynomial $ f(x) $ is divided by $ x - a $, the remainder is simply $ f(a) $.

In our case, we are dividing the polynomial by $ x + 1 $, which can be rewritten as $ x - (-1) $. Therefore, we need to evaluate $ f(-1) $ for the polynomial $ f(x) = x^4 - 2x^3 + x^2 - 2x + 1 $.

Calculating $ f(-1) $:

$$
f(-1) = (-1)^4 - 2(-1)^3 + (-1)^2 - 2(-1) + 1
$$
$$
= 1 + 2 + 1 + 2 + 1
$$
$$
= 7
$$

Thus, the remainder when $ x^4 - 2x^3 + x^2 - 2x + 1 $ is divided by $ x + 1 $ is $ 7 $.

For further verification, we can perform polynomial long division. Dividing $ x^4 - 2x^3 + x^2 - 2x + 1 $ by $ x + 1 $, we follow these steps:

1. Divide the leading term $ x^4 $ by $ x $ to get $ x^3 $.
2. Multiply $ x^3 $ by $ x + 1 $ to obtain $ x^4 + x^3 $.
3. Subtract this from the original polynomial:

$$
(x^4 - 2x^3 + x^2 - 2x + 1) - (x^4 + x^3) = -3x^3 + x^2 - 2x + 1
$$

4. Next, divide the leading term $ -3x^3 $ by $ x $ to get $ -3x^2 $.
5. Multiply $ -3x^2 $ by $ x + 1 $ to yield $ -3x^3 - 3x^2 $.
6. Subtract again:

$$
(-3x^3 + x^2 - 2x + 1) - (-3x^3 - 3x^2) = 4x^2 - 2x + 1
$$

7. Divide $ 4x^2 $ by $ x $ to get $ 4x $.
8. Multiply $ 4x $ by $ x + 1 $ to obtain $ 4x^2 + 4x $.
9. Subtract this result:

$$
(4x^2 - 2x + 1) - (4x^2 + 4x) = -6x + 1
$$

10. Finally, divide $ -6x $ by $ x $ to get $ -6 $.
11. Multiply $ -6 $ by $ x + 1 $ to get $ -6x - 6 $.
12. Subtract one last time:

$$
(-6x + 1) - (-6x - 6) = 7
$$

This confirms that the remainder when $ x^4 - 2x^3 + x^2 - 2x + 1 $ is divided by $ x + 1 $ is indeed $ 7 $.
    