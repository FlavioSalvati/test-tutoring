---
title: "How are floating-point numbers represented in binary?"
summary: "Floating-point numbers in binary are represented using a system similar to scientific notation, comprising a sign, exponent, and mantissa."
author: "Prof. Charles Hughes"
degree: "MSc in Economic Policy, University of Nottingham"
tutor_type: "A-Level Economics Tutor"
date: 2024-06-08
---

Floating-point numbers in binary are represented using a system similar to scientific notation, comprising a sign, exponent, and mantissa.

In more detail, a floating-point number is typically represented in a computer using three components: the sign, the exponent, and the mantissa (also known as the significand or the fraction). This representation is based on the concept of 'scientific notation' that you might have come across in mathematics.

The sign is a single bit that indicates whether the number is positive or negative. If the sign bit is 0, the number is positive; if it's 1, the number is negative.

The exponent is used to represent the magnitude of the number. It's a binary number that signifies the power to which the base (usually 2 in computers) is raised. The exponent can also be positive or negative, allowing for very large or very small numbers to be represented. However, to avoid having to represent the sign of the exponent, a bias is usually added to the actual exponent in order to make it always positive. For example, in a single-precision floating-point number (which uses 8 bits for the exponent), the bias is 127.

The mantissa represents the actual digits of the number. It's a binary fraction in most systems. For normalised numbers, it's always assumed that there is a '1' before the decimal point. Therefore, this '1' is not stored, and the mantissa actually represents the fraction part after the decimal point. This allows for more precision.

For example, the decimal number -14.75 can be represented as -1.84375 x 2^3 in binary floating-point. Here, the sign is 1 (as the number is negative), the exponent is 3 (with the bias added, it becomes 130 in single-precision), and the mantissa is .84375 (in binary, it's .11011).

This system allows for a wide range of values to be represented with a high degree of precision, but it's not perfect. There can be rounding errors, and not all decimal numbers can be exactly represented.
    