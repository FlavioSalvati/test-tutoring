---
title: "How to integrate x^4/(1+x^4)?"
summary: "To integrate x^4/(1+x^4), use partial fractions and substitution."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-08
---

To evaluate the integral 

$$ 
\int \frac{x^4}{1 + x^4} \, dx, 
$$ 

we can use partial fractions and substitution.

**Step 1: Factor the Denominator**

First, we rewrite the denominator:

$$ 
1 + x^4 = (x^2 + 1)^2 - 2x^2. 
$$ 

**Step 2: Decompose into Partial Fractions**

Next, we express the integrand using partial fractions as follows:

$$ 
\frac{x^4}{1 + x^4} = \frac{A(x^2 + 1)}{(x^2 + 1)^2} + \frac{B(x^2 + 1)}{(x^2 + 1)^2} - \frac{2C x}{(x^2 + 1)^2}, 
$$ 

where $A$, $B$, and $C$ are constants to be determined.

**Step 3: Simplify and Solve for Constants**

We simplify the fractions and equate the numerators:

$$ 
x^4 = A(x^2 + 1) + B(x^2 + 1) - 2Cx. 
$$ 

By comparing coefficients, we find:

- For $x^4$: $A + B = 1$,
- For $x^2$: $A + B = 0$,
- For $x^1$: $-2C = 0$.

From these equations, we can solve for $A$, $B$, and $C$:

- Letting $A = \frac{1}{2}$ and $B = \frac{1}{2}$, we find $C = \frac{1}{4}$.

**Step 4: Substitute and Change Variables**

Next, we substitute $u = x^2 + 1$, which gives us $du = 2x \, dx$. Rewriting the integral in terms of $u$, we have:

$$ 
\int \frac{1/2}{u - 2\sqrt{u} + 2} \, du + \int \frac{1/2}{u + 2\sqrt{u} + 2} \, du - \int \frac{1/4}{(u - 2\sqrt{u} + 2)^2} \, du. 
$$ 

**Step 5: Further Substitution**

We can perform another substitution for the first two integrals by letting $v = \sqrt{u} - 1$, which results in $dv = \frac{1}{2} u^{-1/2} \, du$. This transforms the integrals into:

$$ 
\int \frac{1/4}{(v - 1)^2} \, dv + \int \frac{1/4}{(v + 1)^2} \, dv.
$$ 

**Step 6: Integrate Using the Power Rule**

We will now integrate each of these expressions using the power rule:

$$ 
\int \frac{1}{(v - 1)^2} \, dv = -\frac{1}{v - 1} + C, 
$$ 

and 

$$ 
\int \frac{1}{(v + 1)^2} \, dv = -\frac{1}{v + 1} + C.
$$ 

Thus, the combined result is:

$$ 
-\frac{1}{4(v - 1)} - \frac{1}{4(v + 1)} = -\frac{1}{2(\sqrt{u} - 1)} + \frac{1}{2(\sqrt{u} + 1)}.
$$ 

**Step 7: Integrate the Third Integral**

For the third integral, using the substitution $w = \sqrt{u} - 1$ again, we find:

$$ 
\int \frac{1/4}{w^2 + 1} \, dw = \frac{1}{4} \arctan(w) = \frac{1}{4} \arctan(\sqrt{u} - 1).
$$ 

**Step 8: Substitute Back and Simplify**

Finally, we substitute back for $u$ and simplify:

$$ 
-\frac{1}{2(\sqrt{u} - 1)} + \frac{1}{2(\sqrt{u} + 1)} + \frac{1}{4} \arctan(\sqrt{u} - 1).
$$ 

Replacing $u$ with $x^2 + 1$, we obtain:

$$ 
-\frac{1}{2(\sqrt{x^2 + 1} - 1)} + \frac{1}{2(\sqrt{x^2 + 1} + 1)} + \frac{1}{4} \arctan(\sqrt{x^2 + 1} - 1) + C,
$$ 

where $C$ is the constant of integration.
    