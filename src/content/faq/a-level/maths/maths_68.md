---
title: "Describe the Rolle's theorem for polynomials"
summary: "Rolle's theorem asserts that for a continuous and differentiable polynomial function on [a,b] with equal endpoints, there is at least one point c in (a,b) where the derivative f'(c) equals zero."
author: "Prof. Richard White"
degree: "PhD in Mathematics, University of Leicester"
tutor_type: "A-Level Maths Tutor"
date: 2024-08-26
---

Rolle's Theorem states that if a polynomial function \( f(x) \) is continuous on a closed interval \([a, b]\) and differentiable on the open interval \((a, b)\), and if \( f(a) = f(b) \), then there exists at least one point \( c \) in \((a, b)\) such that \( f'(c) = 0 \).

In simpler terms, Rolle's Theorem indicates that if a polynomial function takes the same value at both endpoints of an interval, there must exist at least one point within that interval where the derivative equals zero.

To prove Rolle's Theorem, we start by assuming that \( f(x) \) is continuous on \([a, b]\) and differentiable on \((a, b)\), with the condition that \( f(a) = f(b) \). We will analyze two cases:

**Case 1:** \( f(x) \) is constant on \([a, b]\). In this scenario, since \( f(x) \) does not change, the derivative \( f'(x) = 0 \) for all \( x \) in \((a, b)\). Thus, we can select any point \( c \) in \((a, b)\) and conclude that \( f'(c) = 0 \).

**Case 2:** \( f(x) \) is not constant on \([a, b]\). In this case, we can invoke the Extreme Value Theorem, which guarantees that \( f(x) \) must attain at least one maximum or minimum value in the open interval \((a, b)\). Let \( c \) be a point in \((a, b)\) where \( f(c) \) is either a maximum or minimum. Since \( f(x) \) is differentiable on \((a, b)\), it follows that \( f'(c) = 0 \).

Thus, in either case, we have demonstrated that there exists at least one point \( c \) in \((a, b)\) such that \( f'(c) = 0\), which serves as the proof of Rolle's Theorem.

Rolle's Theorem has numerous applications, including finding the roots of polynomial functions and establishing the existence of critical points in optimization problems.
    