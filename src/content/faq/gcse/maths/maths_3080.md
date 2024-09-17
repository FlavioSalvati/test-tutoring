---
title: "What is the method to find quartiles from a cumulative frequency table?"
summary: "To find quartiles from a cumulative frequency table, locate the positions using cumulative frequencies and interpolate if necessary."
author: "Prof. Alan Smith"
degree: "PhD in Physics, University of Cambridge"
tutor_type: "A-Level Physics Tutor"
date: 2024-07-01
---

To determine quartiles from a cumulative frequency table, you must identify their positions using cumulative frequencies and interpolate when necessary.

### Understanding Quartiles

Quartiles are statistical measures that divide your dataset into four equal parts. Specifically:
- The first quartile (Q1) represents the value below which 25% of the data falls.
- The second quartile (Q2), also known as the median, is the value below which 50% of the data falls.
- The third quartile (Q3) indicates the value below which 75% of the data falls.

### Steps to Find Quartiles from a Cumulative Frequency Table

1. **Identify the Total Frequency ($N$)**: This is the sum of all the frequencies listed in your cumulative frequency table.

2. **Calculate the Positions**:
   - For Q1, compute the position as $\frac{N}{4}$.
   - For Q2 (the median), compute the position as $\frac{N}{2}$.
   - For Q3, compute the position as $\frac{3N}{4}$.

3. **Locate These Positions in the Cumulative Frequency Column**: Search for the cumulative frequency that is equal to or just exceeds the calculated positions for Q1, Q2, and Q3.

4. **Interpolate If Necessary**: If the exact position does not correspond to a cumulative frequency, interpolation is required. This process involves determining the precise value within the class interval containing the quartile. Use the following formula for interpolation:

$$
Q = L + \left(\frac{\frac{N}{4} - F}{f}\right) \times w
$$

Where:
- $L$ is the lower boundary of the class interval containing the quartile.
- $F$ is the cumulative frequency of the class preceding the quartile class.
- $f$ is the frequency of the quartile class.
- $w$ is the width of the class interval.

By following these steps, you can accurately identify the quartiles from a cumulative frequency table, thereby gaining a clearer understanding of the distribution of your data.
    