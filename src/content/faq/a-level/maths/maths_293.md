---
title: "What's the integral of (1+x)^3/(1+x^2)?"
summary: "The integral of (1+x)^3/(1+x^2) is (1/2)(1+x)^2 + (1/2)ln(1+x^2) + C."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-03
---

To evaluate the integral 

$$
\int \frac{(1+x)^3}{1+x^2} \, dx,
$$ 

we can utilize the method of partial fractions. First, we rewrite the integrand as follows:

$$
\frac{(1+x)^3}{1+x^2} = (1+x)^2 + (1+x^2) - \frac{2x^2}{1+x^2}.
$$

Next, we will integrate each term separately. 

1. The first term, $(1+x)^2$, can be integrated using the power rule:

$$
\int (1+x)^2 \, dx = \frac{1}{3}(1+x)^3 + C_1.
$$

2. The second term, $(1+x^2)$, can be integrated straightforwardly:

$$
\int (1+x^2) \, dx = \frac{x^3}{3} + x + C_2.
$$

3. For the third term, we use the substitution $ u = 1+x^2 $, which gives $ \frac{du}{dx} = 2x $ or $ du = 2x \, dx $. Thus, we have:

$$
\int -\frac{2x^2}{1+x^2} \, dx = -\int x \frac{du}{u} = -\ln|1+x^2| + C_3.
$$

Now, combining all the integrated components, we obtain:

$$
\int \frac{(1+x)^3}{1+x^2} \, dx = \frac{1}{3}(1+x)^3 + \frac{x^3}{3} + x - \ln|1+x^2| + C,
$$

where $ C = C_1 + C_2 + C_3 $ is the overall constant of integration.

Upon simplification, we arrive at the final result:

$$
\int \frac{(1+x)^3}{1+x^2} \, dx = \frac{1}{2}(1+x)^2 + \frac{1}{2}\ln(1+x^2) + C.
$$ 

This provides a clear and concise evaluation of the integral.
    