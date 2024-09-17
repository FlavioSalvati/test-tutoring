---
title: "How does the AVG function calculate the average in SQL?"
summary: "The AVG function in SQL calculates the average by summing all values in a column and dividing by the count of values."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-01-21
---

The AVG function in SQL is a powerful aggregate function used to compute the average of a numeric column within a database. It operates by summing all the values in the specified column and dividing the total by the number of values present.

The syntax for utilizing the AVG function is straightforward: 

$$
\text{AVG(column\_name)}
$$ 

This function is typically employed within a SELECT statement.

For instance, consider a table containing students and their respective test scores. You can use the AVG function to determine the average test score with a SQL statement like the following:

$$
\text{SELECT AVG(test\_score) FROM students;}
$$

This query will return the average test score for all students in the table.

It is essential to understand that the AVG function is applicable only to numeric data types. Attempting to use it on a column containing non-numeric data types will result in an error. Additionally, the AVG function disregards NULL values; thus, if a column contains NULL entries, these will not be factored into the average calculation.

Moreover, the AVG function can be used in conjunction with the GROUP BY statement to calculate averages for distinct groups within a column. For example, if you wish to find the average test score for each class in a school, you could execute the following SQL statement:

$$
\text{SELECT class, AVG(test\_score) FROM students GROUP BY class;}
$$

This query would yield the average test score for each class within the school.

In summary, the AVG function in SQL is a valuable tool for determining the average of a numeric column in a database. It accomplishes this by summing all the values in the column and dividing by the count of values, while also excluding any NULL values from the calculation.
    