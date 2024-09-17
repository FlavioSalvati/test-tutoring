---
title: "Prove the addition formula for tangent"
summary: "The addition formula for tangent is tan(x+y) = (tanx + tany)/(1-tanx*tany)."
author: "Dr. Michael Green"
degree: "PhD in Condensed Matter Physics, University of Bristol"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-13
---

The addition formula for the tangent function is given by:

$$
\tan(x+y) = \frac{\tan x + \tan y}{1 - \tan x \tan y}.
$$

To prove this addition formula, we begin with the well-known trigonometric identities for the sine and cosine of a sum:

$$
\sin(x+y) = \sin x \cos y + \cos x \sin y,
$$

$$
\cos(x+y) = \cos x \cos y - \sin x \sin y.
$$

Now, we can derive the tangent of the sum by dividing the sine identity by the cosine identity:

$$
\tan(x+y) = \frac{\sin(x+y)}{\cos(x+y)} = \frac{\sin x \cos y + \cos x \sin y}{\cos x \cos y - \sin x \sin y}.
$$

Next, we utilize the relationships $\tan x = \frac{\sin x}{\cos x}$ and $\tan y = \frac{\sin y}{\cos y}$. To simplify the expression, we can rewrite $\sin x$ and $\sin y$ in terms of $\tan x$ and $\tan y$:

$$
\sin x = \tan x \cos x \quad \text{and} \quad \sin y = \tan y \cos y.
$$

Substituting these into our expression gives:

$$
\tan(x+y) = \frac{\tan x \cos x \cos y + \cos x \tan y \cos y}{\cos x \cos y - \tan x \tan y \cos x \cos y}.
$$

Factoring out $\cos x \cos y$ from both the numerator and denominator results in:

$$
\tan(x+y) = \frac{\tan x + \tan y}{1 - \tan x \tan y}.
$$

Thus, we have successfully derived the addition formula for the tangent function, confirming that:

$$
\tan(x+y) = \frac{\tan x + \tan y}{1 - \tan x \tan y}.
$$ 

This completes the proof of the addition formula for tangent.
    