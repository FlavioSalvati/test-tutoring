---
title: "How do you calculate the slope of the line of best fit?"
summary: To calculate the slope of the line of best fit, use the formula; slope = $\frac{\Sigma(xy) - n(\bar{y})(\bar{x})}{\Sigma(x^{2}) - n(\bar{x})^{2}}$.
author: "Dr. Angela Davis"
degree: "MSc in Mathematics, University of Bristol"
tutor_type: "GCSE Maths Tutor"
date: 2024-07-31
---

To calculate the slope of the line of best fit, commonly referred to as the regression line, you can use the following formula:

$$
\text{slope} = \frac{\Sigma(xy) - n(\bar{y})(\bar{x})}{\Sigma(x^2) - n(\bar{x})^2}
$$

The slope represents how much the variable $y$ changes for each unit change in the variable $x$. To compute this slope, follow these steps:

1. **Gather Data Points**: Collect your data points.
2. **Calculate Means**: Compute the mean of the $x$-values, denoted as $\bar{x}$, and the mean of the $y$-values, denoted as $\bar{y}$.
3. **Compute the Products**: For each data point, multiply the corresponding $x$-value by the $y$-value. Sum these products to find $\Sigma(xy)$.
4. **Square the $x$-Values**: Square each $x$-value and sum these squares to obtain $\Sigma(x^2)$.

Next, determine the number of data points, denoted as $n$. With all the required values at hand, you can substitute them into the slope formula:

$$
\text{slope} = \frac{\Sigma(xy) - n(\bar{y})(\bar{x})}{\Sigma(x^2) - n(\bar{x})^2}
$$

This formula effectively measures the covariance of $x$ and $y$ (indicating how they vary together) divided by the variance of $x$ (showing how much $x$ varies).

### Example Calculation

Consider the data points $(1, 2)$, $(2, 3)$, and $(3, 5)$. We will compute the slope step by step:

1. **Calculate Means**:
   - For $x$: 
     $$\bar{x} = \frac{1 + 2 + 3}{3} = 2$$
   - For $y$: 
     $$\bar{y} = \frac{2 + 3 + 5}{3} = 3$$

2. **Compute $\Sigma(xy)$**:
   - $$\Sigma(xy) = (1 \cdot 2) + (2 \cdot 3) + (3 \cdot 5) = 2 + 6 + 15 = 23$$

3. **Compute $\Sigma(x^2)$**:
   - $$\Sigma(x^2) = 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$$

4. **Count Data Points**:
   - Here, $n = 3$.

Now, substitute these values into the slope formula:

$$
\text{slope} = \frac{23 - 3 \cdot 3 \cdot 2}{14 - 3 \cdot 2^2} = \frac{23 - 18}{14 - 12} = \frac{5}{2} = 2.5
$$

Thus, the slope of the line of best fit for the given data points is $2.5$.
    