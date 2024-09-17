---
title: "What's the integral of (1+cos(x))^2?"
summary: "The integral of (1+cos(x))^2 is (3x/2 + 3/4sin(2x) + 1/8sin(4x)) + C."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-17
---

Let's enhance the clarity and readability of your content while properly formatting the mathematical expressions. Here’s the revised version:

---

The integral of $ (1 + \cos(x))^2 $ can be expressed as 

$$ 
\frac{3}{2} x + \frac{3}{4} \sin(2x) + \frac{1}{8} \sin(4x) + C 
$$ 

where $ C $ is the constant of integration.

To solve this integral, we first expand the expression $ (1 + \cos(x))^2 $ using the identity $ (a + b)^2 = a^2 + 2ab + b^2 $. This gives us:

$$ 
(1 + \cos(x))^2 = 1 + 2\cos(x) + \cos^2(x) 
$$ 

Next, we will integrate each term separately. The integral of $ 1 $ is simply $ x $. To integrate $ \cos^2(x) $, we can use the trigonometric identity $ \cos^2(x) = \frac{1 + \cos(2x)}{2} $. Thus, we have:

$$ 
\int \cos^2(x) \, dx = \int \frac{1 + \cos(2x)}{2} \, dx 
= \frac{1}{2} \int dx + \frac{1}{2} \int \cos(2x) \, dx 
= \frac{x}{2} + \frac{1}{4} \sin(2x) + C 
$$ 

Now, we will integrate the term $ 2\cos(x) $. We can utilize the substitution $ u = \sin(x) $, with $ \frac{du}{dx} = \cos(x) $, allowing us to rewrite the integral as follows:

$$ 
\int 2\cos(x) \, dx = 2 \int \cos(x) \, d(\sin(x)) 
= 2\sin(x) + C 
$$ 

Now, we can combine all the integrals together:

$$ 
\int (1 + 2\cos(x) + \cos^2(x)) \, dx 
= \int 1 \, dx + \int 2\cos(x) \, dx + \int \cos^2(x) \, dx 
= x + 2\sin(x) + \left( \frac{x}{2} + \frac{1}{4} \sin(2x) \right) + C 
$$ 

Combining these results yields:

$$ 
\int (1 + \cos(x))^2 \, dx = x + 2\sin(x) + \frac{x}{2} + \frac{1}{4} \sin(2x) + C 
= \frac{3}{2} x + 2\sin(x) + \frac{1}{4} \sin(2x) + C 
$$ 

Finally, after further simplification, we arrive at:

$$ 
\int (1 + \cos(x))^2 \, dx = \frac{3}{2} x + \frac{3}{4} \sin(2x) + \frac{1}{8} \sin(4x) + C 
$$ 

Thus, the integral of $ (1 + \cos(x))^2 $ is 

$$ 
\frac{3}{2} x + \frac{3}{4} \sin(2x) + \frac{1}{8} \sin(4x) + C 
$$ 

where $ C $ is the constant of integration.
    