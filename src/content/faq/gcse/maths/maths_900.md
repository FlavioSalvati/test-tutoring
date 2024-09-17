---
title: "How do you find the nth term of 2, 6, 14, 30?"
summary: The nth term of the sequence 2, 6, 14, 30 is given by the formula $ a_n = 2^n + 2^{n-1} $.
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-04-13
---

To determine the $ n $th term of the sequence $ 2, 6, 14, 30 $, we can use the formula 

$$ a_n = 2^n + 2^{n-1}. $$

Let’s analyze this step by step. First, we observe the sequence: $ 2, 6, 14, 30 $. The growth of these numbers is quite rapid, hinting at an exponential nature. To uncover the underlying pattern, we can examine the differences between consecutive terms:

$$
6 - 2 = 4, \quad 14 - 6 = 8, \quad 30 - 14 = 16.
$$

The differences $ 4, 8, 16 $ can be expressed as powers of 2: $ 2^2, 2^3, 2^4 $. This observation suggests that the sequence is indeed connected to powers of 2.

Next, let’s represent each term in the sequence using powers of 2:

- The 1st term $ 2 $ can be expressed as $ 2^1 + 2^0 $.
- The 2nd term $ 6 $ can be expressed as $ 2^2 + 2^1 $.
- The 3rd term $ 14 $ can be expressed as $ 2^3 + 2^2 $.
- The 4th term $ 30 $ can be expressed as $ 2^4 + 2^3 $.

From these representations, we can discern a clear pattern: the $ n $th term $ a_n $ is defined by the formula 

$$ a_n = 2^n + 2^{n-1}. $$ 

This formula effectively combines two consecutive powers of 2 to yield each term in the sequence.

Thus, to find any term in the sequence, you simply substitute the desired value of $ n $ into the formula $ a_n = 2^n + 2^{n-1} $. For instance, to calculate the 5th term, you would compute:

$$ 2^5 + 2^4 = 32 + 16 = 48. $$ 

This method provides an efficient way to generate the terms of the sequence.
    