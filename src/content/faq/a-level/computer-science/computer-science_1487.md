---
title: "What is the function of the COUNT command in SQL?"
summary: "The COUNT command in SQL is used to return the number of rows that matches a specified criterion."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-01-27
---

The 'COUNT' command in SQL is a powerful tool used to determine the number of rows that meet a specified condition.

More specifically, the 'COUNT' command is an aggregate function that counts the number of rows in a table that satisfy the conditions defined in an SQL query. This command is particularly useful when you need to ascertain how many records in a table fulfill certain criteria.

For instance, consider a table of students. If you want to find out how many students are in Year $13$, you can utilize the 'COUNT' command in your SQL query. The command would be structured as follows:

$$
\text{SELECT COUNT(*) FROM students WHERE year = 13;}
$$

This SQL statement will return the total number of students currently in Year $13$.

The 'COUNT' command can be employed with or without the 'WHERE' clause. When used without the 'WHERE' clause, it returns the total number of rows in the table. For example:

$$
\text{SELECT COUNT(*) FROM students;}
$$

This command retrieves the overall count of students in the table.

There are three primary variations of the 'COUNT' function: 

1. 'COUNT(*)': Counts all rows in the target table, regardless of whether they contain null values.
2. 'COUNT(expression)': Counts only those rows where the specified expression is not null.
3. 'COUNT(DISTINCT expression)': Counts only the distinct (unique) non-null values of the specified expression.

In summary, the 'COUNT' command in SQL serves as an essential tool for data analysis within a database. It enables you to swiftly and efficiently determine the number of rows that meet specific criteria, which is invaluable when working with extensive datasets.
    