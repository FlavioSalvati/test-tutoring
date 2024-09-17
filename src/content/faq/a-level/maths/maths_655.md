---
title: "Prove the formula for the nth term of a geometric sequence"
summary: "The formula for the nth term of a geometric sequence is an = a1 * r^(n-1)."
author: "Dr. Daniel Thompson"
degree: "PhD in Relativity, University of Sheffield"
tutor_type: "A-Level Maths Tutor"
date: 2024-05-18
---

The formula for the $ n $th term of a geometric sequence is given by:

$$
a_n = a_1 \cdot r^{(n-1)}
$$

where $ a_1 $ is the first term of the sequence and $ r $ is the common ratio.

To prove this formula, we can utilize mathematical induction. First, we need to verify that the formula holds for $ n = 1 $. In a geometric sequence, the first term is $ a_1 $. Thus, when $ n = 1 $, the $ n $th term is:

$$
a_1 = a_1 \cdot r^{(1-1)} = a_1
$$

This confirms that the formula holds for $ n = 1 $.

Next, we assume that the formula is true for some arbitrary positive integer $ n $, denoted as $ k $. This means we have:

$$
a_k = a_1 \cdot r^{(k-1)}
$$

Now, we need to show that the formula also holds for $ n = k + 1 $. The $ (k + 1) $th term of the sequence can be expressed as:

$$
a_{k+1} = a_k \cdot r
$$

Substituting our assumption for $ a_k $, we get:

$$
a_{k+1} = (a_1 \cdot r^{(k-1)}) \cdot r = a_1 \cdot r^k
$$

This matches the form of the formula for the $ (k + 1) $th term, which we sought to prove. Therefore, by mathematical induction, the formula 

$$
a_n = a_1 \cdot r^{(n-1)}
$$ 

holds for all positive integers $ n $.

An alternative method to prove this formula involves the sum of a geometric series. The sum of the first $ n $ terms of a geometric sequence is given by:

$$
S_n = a_1 \cdot \frac{1 - r^n}{1 - r}
$$ 

where $ r \neq 1 $. We can rearrange this formula to solve for $ a_1 $:

$$
a_1 = S_n \cdot \frac{1 - r}{1 - r^n}
$$ 

Next, substituting this expression for $ a_1 $ into the formula for the $ n $th term, we have:

$$
a_n = \left(S_n \cdot \frac{1 - r}{1 - r^n}\right) \cdot r^{(n-1)}
$$ 

Upon simplifying this expression, we find:

$$
a_n = S_n \cdot (1 - r^{(n-1)})
$$ 

Using the previously established formula for $ S_n $, we can rewrite this as:

$$
a_n = a_1 \cdot r^{(n-1)}
$$ 

This confirms that the formula for the $ n $th term of a geometric sequence is indeed valid.
    