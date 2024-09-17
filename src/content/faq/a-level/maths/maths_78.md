---
title: "Describe the process of the bisection method for root finding"
summary: "The bisection method is a numerical algorithm designed to locate the root of a function by iteratively narrowing down the interval containing the root."
author: "Prof. Peter Brown"
degree: "PhD in Mathematics, University of Warwick"
tutor_type: "IB Maths Tutor"
date: 2024-04-06
---

The bisection method is a numerical algorithm designed to find the root of a function.

To utilize the bisection method, we first need a function \( f(x) \) for which we wish to determine the root. Additionally, we must select two initial guesses, \( a \) and \( b \), such that \( f(a) \) and \( f(b) \) have opposite signs. This condition indicates that there is at least one root of the function within the interval \( [a, b] \).

The procedure of the bisection method involves repeatedly dividing the interval \( [a, b] \) in half and identifying which half contains the root. We begin by calculating the midpoint:

$$
c = \frac{a + b}{2}.
$$

Next, we evaluate the sign of \( f(c) \). If \( f(c) \) shares the same sign as \( f(a) \), it implies that the root lies within the interval \( [c, b] \). Conversely, if \( f(c) \) has the same sign as \( f(b) \), the root must be in the interval \( [a, c] \). This process is then repeated using the new interval until we achieve the desired level of accuracy.

The bisection method is guaranteed to converge to a root of the function, provided that the function is continuous and changes sign over the interval \( [a, b] \). However, it's important to note that the method may converge slowly, especially when dealing with functions that are steep or have multiple roots.

The algorithm can be summarized in the following steps:

1. Choose initial guesses \( a \) and \( b \) such that \( f(a) \) and \( f(b) \) have opposite signs.
2. Set an error tolerance, for example, \( 0.0001 \).
3. While the interval \( [a, b] \) is larger than the error tolerance:
   a. Calculate the midpoint \( c = \frac{a + b}{2} \).
   b. If \( f(c) \) has the same sign as \( f(a) \), set \( a = c \). Otherwise, set \( b = c \).
4. Return the midpoint \( c \) as the approximate root of the function.
    