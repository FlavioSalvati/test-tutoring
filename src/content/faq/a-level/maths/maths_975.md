---
title: "How to find saddle point in a game matrix?"
summary: "To find a saddle point in a game matrix, we need to use the row minimum and column maximum method."
author: "Dr. Lucas Harris"
degree: "PhD in High-Energy Physics, University of Nottingham"
tutor_type: "A-Level Maths Tutor"
date: 2024-06-04
---

To identify a saddle point in a game matrix, we can apply the row minimum and column maximum method.

First, we will determine the minimum value in each row of the matrix. Consider the following example matrix:

$$
\begin{array}{|c|c|c|c|}
\hline
 & A & B & C \\
\hline
1 & 2 & 4 & 3 \\
\hline
2 & 1 & 5 & 2 \\
\hline
3 & 3 & 2 & 1 \\
\hline
\end{array}
$$

In this matrix, the minimum values for each row are as follows:
- For row 1, the minimum is $2$.
- For row 2, the minimum is $1$.
- For row 3, the minimum is $1$.

Next, we will find the maximum value in each column of the matrix. In our example, the maximum values for the columns are:
- For column A, the maximum is $3$.
- For column B, the maximum is $5$.
- For column C, the maximum is $3$.

Now, we will search for any values in the matrix that are both a row minimum and a column maximum. In this case, the value $2$ located at cell $(2,1)$ is the only value that satisfies both conditions, making it the saddle point of the matrix.

If no value meets both criteria, then it can be concluded that the matrix lacks a saddle point.

In summary, to find a saddle point in a game matrix, one must first calculate the row minimums and column maximums, and then identify any values that fulfill both conditions.
    