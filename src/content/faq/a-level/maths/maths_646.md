---
title: What's the integral of $\sqrt{x}$?
summary: The integral of $\sqrt{x}$ is $\frac{2}{3}x^{\frac{3}{2}} + C$, where $C$ is the constant of integration.
author: "Prof. Isabella Taylor"
degree: "PhD in Quantum Computing, University College London"
tutor_type: "A-Level Maths Tutor"
date: 2024-02-09
---

Let's enhance the content for clarity and readability while maintaining mathematical rigor.

---

The integral of $ \sqrt{x} $ is given by 

$$ 
\int \sqrt{x} \, dx = \frac{2}{3} x^{\frac{3}{2}} + C, 
$$ 

where $ C $ represents the constant of integration.

To derive the integral of $ \sqrt{x} $, we can apply the power rule of integration. This rule states that the integral of $ x^n $ is 

$$ 
\int x^n \, dx = \frac{1}{n+1} x^{n+1} + C, 
$$ 

where $ C $ is again the constant of integration. In our case, we have $ n = \frac{1}{2} $. By adding $ 1 $ to $ n $, we find that 

$$ 
n + 1 = \frac{1}{2} + 1 = \frac{3}{2}. 
$$ 

Next, we compute $ \frac{1}{n+1} $:

$$ 
\frac{1}{n+1} = \frac{1}{\frac{3}{2}} = \frac{2}{3}. 
$$ 

Finally, substituting $ x^{\frac{3}{2}} $ for $ x^n $, we obtain the integral of $ \sqrt{x} $:

$$ 
\int \sqrt{x} \, dx = \frac{2}{3} x^{\frac{3}{2}} + C. 
$$ 

To verify our result, we can differentiate 

$$ 
\frac{2}{3} x^{\frac{3}{2}} + C 
$$ 

using the power rule of differentiation. This rule states that the derivative of $ x^n $ is 

$$ 
\frac{d}{dx}(x^n) = n x^{n-1}. 
$$ 

In this case, with $ n = \frac{3}{2} $, we find the derivative:

$$ 
\frac{d}{dx}\left(\frac{2}{3} x^{\frac{3}{2}}\right) = \frac{3}{2} \cdot \frac{2}{3} x^{\frac{3}{2}-1} = x^{\frac{1}{2}}. 
$$ 

This expression simplifies to $ \sqrt{x} $, confirming that our original integral is indeed correct.

In summary, the integral of $ \sqrt{x} $ is 

$$ 
\int \sqrt{x} \, dx = \frac{2}{3} x^{\frac{3}{2}} + C, 
$$ 

where $ C $ is the constant of integration. We utilized the power rule of integration to derive this result, and we verified its accuracy through differentiation.
    