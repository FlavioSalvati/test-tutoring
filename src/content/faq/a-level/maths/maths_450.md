---
title: "What's the integral of e^(2x)?"
summary: "The integral of e^(2x) is (1/2)e^(2x) + C, where C is the constant of integration."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-09-10
---

Here's an enhanced version of your content for clarity and readability:

The integral of $ e^{2x} $ can be expressed as 

$$ 
\int e^{2x} \, dx = \frac{1}{2} e^{2x} + C 
$$ 

where $ C $ represents the constant of integration.

To compute the integral of $ e^{2x} $, we typically rely on the power rule of integration, which states that 

$$ 
\int x^n \, dx = \frac{1}{n+1} x^{n+1} + C 
$$ 

However, since $ e^{2x} $ does not match the form $ x^n $, we will employ a different technique: substitution.

We can let $ u = 2x $. Then, we differentiate to find $ \frac{du}{dx} = 2 $, which implies that 

$$ 
dx = \frac{1}{2} \, du. 
$$ 

By substituting these into the integral, we have:

$$ 
\int e^{2x} \, dx = \int e^u \left( \frac{1}{2} \, du \right) 
= \frac{1}{2} \int e^u \, du 
= \frac{1}{2} e^u + C 
= \frac{1}{2} e^{2x} + C.
$$ 

In summary, to find the integral of $ e^{2x} $, we perform a substitution by letting $ u = 2x $. This transforms the integral into 

$$ 
\frac{1}{2} \int e^u \, du, 
$$ 

which is straightforward to evaluate. The final result is 

$$ 
\frac{1}{2} e^{2x} + C, 
$$ 

where $ C $ is a constant of integration. This method illustrates how substitution can effectively simplify and solve integrals that do not conform to standard forms.
    