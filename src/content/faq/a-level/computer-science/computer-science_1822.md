---
title: "How does the AVG function calculate the average in SQL?"
summary: "The AVG function in SQL calculates the average by summing all values in a column and dividing by the count of values."
author: "Dr. Ava Johnson"
degree: "PhD in Software Development, University of Nottingham"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-05-28
---

The AVG function in SQL is a powerful tool for calculating the average value of a numeric column within a database. It operates by summing all the values in the specified column and then dividing that sum by the total count of those values.

The syntax for using the AVG function is straightforward: 

$$
AVG(column\_name)
$$

This function is commonly employed in a SELECT statement to retrieve average values.

For instance, consider a table containing students and their respective test scores. You can utilize the AVG function to determine the average test score. The corresponding SQL statement would appear as follows:

$$
SELECT AVG(test\_score) FROM students;
$$

This query would yield the average test score for all students listed in the table.

It is crucial to remember that the AVG function is designed exclusively for numeric data types. If you attempt to apply it to a column containing non-numeric data types, an error will occur. Additionally, the AVG function automatically excludes NULL values from its calculations. Consequently, if a column contains NULL values, they will not influence the average result.

Moreover, the AVG function can be combined with the GROUP BY clause to compute averages for distinct groups within a column. For example, if you wish to calculate the average test score for each class in a school, you could execute the following SQL statement:

$$
SELECT class, AVG(test\_score) FROM students GROUP BY class;
$$

This query would return the average test score for each class within the school, providing valuable insights into student performance across different classes.
    