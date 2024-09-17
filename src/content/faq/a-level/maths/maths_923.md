---
title: "How to integrate tan^2(x)?"
summary: "To integrate tan^2(x), use the identity 1 + tan^2(x) = sec^2(x) and substitution."
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-07-20
---

To integrate $ \tan^2(x) $, we can employ the trigonometric identity 

$$ 
1 + \tan^2(x) = \sec^2(x). 
$$ 

By rearranging this identity, we find that 

$$ 
\tan^2(x) = \sec^2(x) - 1. 
$$ 

Next, we can make the substitution $ u = \cos(x) $, which gives us $ du = -\sin(x) \, dx $. Utilizing the identity $ \sec^2(x) = \frac{1}{\cos^2(x)} $, we can rewrite the integral as follows:

$$ 
\int \tan^2(x) \, dx = \int (\sec^2(x) - 1) \, dx 
= \int \left(\frac{1}{\cos^2(x)} - 1\right) \, dx 
= \int \left(\frac{1}{u^2} - 1\right) \left(-\frac{du}{\sin(x)}\right). 
$$

Since $ \sin(x) = \sqrt{1 - u^2} $ when $ u = \cos(x) $, we can simplify the integral further:

$$ 
= \int \left(\frac{1}{u^2} - 1\right) du. 
$$

Now, we can integrate term by term:

$$ 
= \int \frac{1}{u^2} \, du - \int 1 \, du 
= -\frac{1}{u} - u + C. 
$$

Substituting back $ u = \cos(x) $, we get:

$$ 
= -\frac{1}{\cos(x)} - \cos(x) + C. 
$$

Thus, the integral of $ \tan^2(x) $ is 

$$ 
-\frac{1}{\cos(x)} - \cos(x) + C. 
$$
    