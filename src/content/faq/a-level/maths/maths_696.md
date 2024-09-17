---
title: "How to integrate tan^4(x)?"
summary: "To integrate tan^4(x), use the identity tan^2(x) = sec^2(x) - 1 and substitution."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-15
---

To integrate $ \tan^4(x) $, we can utilize the identity $ \tan^2(x) = \sec^2(x) - 1 $ along with substitution.

First, we rewrite $ \tan^4(x) $ as $ (\tan^2(x))^2 $. By applying the identity, we find:

$$
\tan^4(x) = (\sec^2(x) - 1)^2
$$

Next, we expand the square:

$$
\tan^4(x) = \sec^4(x) - 2\sec^2(x) + 1
$$

Now, we will use the substitution $ u = \sec(x) $. To perform the integration, we need $ \frac{du}{dx} = \sec(x)\tan(x) $, which implies:

$$
du = \sec(x)\tan(x) \, dx
$$

This leads to:

$$
\int \tan^4(x) \, dx = \int (\sec^4(x) - 2\sec^2(x) + 1) \, dx
$$

Substituting $ u $ into the integral, we have:

$$
= \int (u^4 - 2u^2 + 1) \frac{du}{u \tan(x)}
$$

To simplify the integrand, we divide through by $ u^3 \tan(x) $:

$$
\int \tan^4(x) \, dx = \int \left( u - \frac{2}{u} + \frac{1}{u^3} \right) du
$$

Now, we integrate each term separately:

$$
\int \tan^4(x) \, dx = \frac{1}{2} u^2 - 2 \ln |u| - \frac{1}{2u^2} + C
$$

Next, we substitute back for $ u $:

$$
\int \tan^4(x) \, dx = \frac{1}{2} \sec^2(x)^2 - 2 \ln |\sec(x)| - \frac{1}{2} \sec^{-2}(x) + C
$$

Finally, we simplify the expression using the identity $ \sec^2(x) = 1 + \tan^2(x) $:

$$
\int \tan^4(x) \, dx = \frac{1}{2} (1 + \tan^2(x))^2 - 2 \ln |\sec(x)| - \frac{1}{2(1 + \tan^2(x))} + C
$$

This gives us the final integrated form of $ \tan^4(x) $.
    