---
title: "What's the integral of sin^4(2x)?"
summary: "The integral of sin^4(2x) is (3x/8) - (sin(4x)/32) + (sin(8x)/128) + C."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-04-26
---

The integral of sin^4(2x) is (3x/8) - (sin(4x)/32) + (sin(8x)/128) + C.

To solve this integral, we can use the identity sin^2(x) = (1-cos(2x))/2. We can then rewrite sin^4(2x) as (sin^2(2x))^2, and substitute in the identity to get ((1-cos(4x))/2)^2. We can then expand this using the binomial theorem to get (1/16) - (1/4)cos(4x) + (3/8)cos^2(4x) - (1/4)cos^3(4x) + (1/16)cos^4(4x).

We can then integrate each term separately. The integral of (1/16) is (x/16). The integral of (1/4)cos(4x) is (sin(4x)/16). The integral of (3/8)cos^2(4x) is (3x/32) + (sin(8x)/64). The integral of (1/4)cos^3(4x) is (-1/32)cos^4(4x). The integral of (1/16)cos^4(4x) is (1/64)cos^5(4x).

Putting all of these integrals together, we get the final answer of (3x/8) - (sin(4x)/32) + (sin(8x)/128) - (1/32)cos^4(4x) + (1/64)cos^5(4x) + C.
    