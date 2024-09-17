---
title: "How are negative numbers represented using two's complement in binary?"
summary: "Negative numbers in binary are represented using two's complement, achieved by inverting the bits of the positive number and adding one to the result."
author: "Dr. Sarah Collins"
degree: "MSc in Finance and Economics, University of Edinburgh"
tutor_type: "A-Level Economics Tutor"
date: 2024-03-16
---

Negative numbers are represented in binary using a method called two's complement, which involves inverting the bits of the positive equivalent of the number and then adding one.

To understand two's complement, it's essential to first grasp how positive numbers are represented in binary. Binary numbers operate in base 2, where each digit can either be a $0$ or a $1$. For instance, the decimal number $5$ is represented in binary as $101$.

To represent a negative number using two's complement, follow these steps:

1. Begin with the binary representation of the positive version of the number.
2. Invert the bits: change all $1$s to $0$s and all $0$s to $1$s. This operation is referred to as obtaining the one's complement.
3. Finally, add $1$ to the result.

For example, to represent $-5$ in binary using two's complement:

1. Start with the binary representation of $5$, which is $101$.
2. Invert the bits, yielding $010$.
3. Add $1$ to this result: $$010 + 001 = 011$$.

Thus, $-5$ is represented as $011$ in binary using two's complement.

It's important to recognize that the leftmost bit of a two's complement number is known as the sign bit. If the sign bit is $0$, the number is positive; if it is $1$, the number is negative. This is why inverting the bits of a positive number results in a negative number.

Two's complement is widely utilized in computing because it allows for straightforward addition and subtraction operations. When adding or subtracting two's complement numbers, the arithmetic behaves similarly to operations with positive numbers, which simplifies the design of computer hardware.
    