---
title: "What is the purpose of a cross join in SQL?"
summary: "A cross join in SQL is used to combine all rows from two or more tables, without any condition."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-08-08
---

A cross join in SQL is a method used to combine all rows from two or more tables without any conditions.

To elaborate, a cross join, also referred to as a Cartesian product, is a specific type of join operation in SQL that pairs each row from the first table with each row from the second table. This operation results in a new table that includes all possible combinations of rows from the original tables. Notably, a cross join does not require a join condition. If a join condition is introduced, the operation transforms into an inner join or another type of join.

Cross joins can be particularly useful in scenarios where you need to generate every possible combination between two sets of data. For instance, if you have a table of colors and a table of sizes, performing a cross join would yield a table that contains all potential combinations of colors and sizes. This is especially valuable in a retail context, where understanding all possible variations of a product is important.

However, caution is advised when using cross joins, as they can produce a significant number of rows in the output, particularly if the input tables are large. This can lead to performance issues. Therefore, it is crucial to verify that a cross join is the most suitable type of join for your specific requirements before implementing it.

In terms of syntax, a cross join in SQL is executed using the keywords 'CROSS JOIN'. For example, if you have two tables named 'table1' and 'table2', you can perform a cross join as follows:

$$
\text{SELECT * FROM table1 CROSS JOIN table2;}
$$

This query will return a new table containing all possible combinations of rows from 'table1' and 'table2'.
    