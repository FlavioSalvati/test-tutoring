---
title: "How to integrate (x^2+1)/(x^2-1)^2?"
summary: "To integrate (x^2+1)/(x^2-1)^2, use partial fractions and substitution."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-14
---

To evaluate the integral 

$$ \int \frac{x^2 + 1}{(x^2 - 1)^2} \, dx, $$ 

we will employ the methods of partial fractions and substitution.

**Step 1: Factor the Denominator**

First, we factor the denominator:

$$ (x^2 - 1)^2 = (x - 1)^2 (x + 1)^2. $$

**Step 2: Set Up Partial Fractions**

Next, we express the integrand using partial fractions:

$$ \frac{x^2 + 1}{(x^2 - 1)^2} = \frac{A}{x - 1} + \frac{B}{(x - 1)^2} + \frac{C}{x + 1} + \frac{D}{(x + 1)^2}, $$

where $ A $, $ B $, $ C $, and $ D $ are constants that we need to determine.

**Step 3: Solve for Coefficients**

To find the coefficients $ A $, $ B $, $ C $, and $ D $, we multiply both sides by $ (x - 1)^2 (x + 1)^2 $ and evaluate at the appropriate values of $ x $.

1. **Finding $ A $**:
   Multiply both sides by $ (x - 1) $ and evaluate at $ x = 1 $:

   $$ A = \lim_{x \to 1} \frac{x^2 + 1}{(x + 1)^2} = \frac{1^2 + 1}{(1 + 1)^2} = \frac{2}{4} = \frac{1}{2}. $$

2. **Finding $ B $**:
   Multiply both sides by $ (x + 1)^2 $ and evaluate at $ x = 1 $:

   $$ B = \lim_{x \to 1} \frac{x^2 + 1}{(x + 1)^3} = \frac{1^2 + 1}{(1 + 1)^3} = \frac{2}{8} = \frac{1}{4}. $$

3. **Finding $ C $**:
   Multiply both sides by $ (x - 1)^2 $ and evaluate at $ x = -1 $:

   $$ C = \lim_{x \to -1} \frac{x^2 + 1}{(x - 1)^3} = \frac{(-1)^2 + 1}{(-1 - 1)^3} = \frac{2}{-8} = -\frac{1}{4}. $$

4. **Finding $ D $**:
   Multiply both sides by $ (x - 1)^2 $ and evaluate at $ x = -1 $:

   $$ D = \lim_{x \to -1} \frac{x^2 + 1}{(x - 1)^2} = \frac{(-1)^2 + 1}{(-1 - 1)^2} = \frac{2}{4} = \frac{1}{2}. $$

Thus, we have:

- $ A = \frac{1}{2} $
- $ B = \frac{1}{4} $
- $ C = -\frac{1}{4} $
- $ D = \frac{1}{2} $

**Step 4: Substitute Partial Fractions into the Integral**

Now we substitute these values back into the integral:

$$ \int \frac{x^2 + 1}{(x^2 - 1)^2} \, dx = \int \left( \frac{1/2}{x - 1} + \frac{1/4}{(x - 1)^2} - \frac{1/4}{x + 1} + \frac{1/2}{(x + 1)^2} \right) dx. $$

**Step 5: Integrate Each Term**

We will integrate each term separately:

1. The integral of $ \frac{1/2}{x - 1} $ is $ \frac{1}{2} \ln |x - 1| $.
2. The integral of $ \frac{1/4}{(x - 1)^2} $ is $ -\frac{1}{4(x - 1)} $.
3. The integral of $ -\frac{1/4}{x + 1} $ is $ -\frac{1}{4} \ln |x + 1| $.
4. The integral of $ \frac{1/2}{(x + 1)^2} $ is $ -\frac{1}{2(x + 1)} $.

Combining these results, we have:

$$ \int \frac{x^2 + 1}{(x^2 - 1)^2} \, dx = \frac{1}{2} \ln |x - 1| - \frac{1}{4(x - 1)} - \frac{1}{4} \ln |x + 1| - \frac{1}{2(x + 1)} + C. $$

**Final Result**

Thus, the final answer for the integral is:

$$ \int \frac{x^2 + 1}{(x^2 - 1)^2} \, dx = \frac{1}{2} \ln |x - 1| - \frac{1}{4(x - 1)} - \frac{1}{4} \ln |x + 1| - \frac{1}{2(x + 1)} + C. $$
    