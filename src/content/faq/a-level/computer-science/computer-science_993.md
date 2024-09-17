---
title: "How does the MIN function work in SQL?"
summary: "The MIN function in SQL returns the smallest value of the selected column."
author: "Dr. Ava Johnson"
degree: "PhD in Software Development, University of Nottingham"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-02-05
---

The 'MIN' function in SQL is designed to return the smallest value from a specified column.

As an aggregate function, 'MIN' enables you to identify the minimum value in a particular column or expression. It is commonly used with the 'GROUP BY' clause to determine the minimum value for each group of data. The syntax for the 'MIN' function is simple: you write 'MIN' followed by the name of the column or expression, enclosed in parentheses.

For instance, if you have a table named 'products' with a column called 'price' and you wish to find the cheapest product, you would execute the following SQL statement:

$$
\text{SELECT MIN(price) FROM products;}
$$

This query will return the lowest price recorded in the 'price' column.

If you're interested in finding the minimum value for each group of items, you can utilize the 'GROUP BY' clause. For example, if you have a 'products' table that includes both 'category' and 'price' columns and you want to discover the cheapest product in each category, you would use the following SQL statement:

$$
\text{SELECT category, MIN(price) FROM products GROUP BY category;}
$$

This query will yield the lowest price for each distinct category listed in the 'category' column.

It's crucial to remember that the 'MIN' function disregards 'NULL' values. Therefore, if the column or expression you are evaluating contains 'NULL' entries, they will not be included in the calculation of the minimum value.

The 'MIN' function can be applied to numeric, date, and character-based columns, but its behavior varies slightly depending on the data type. For numeric and date columns, it will return the smallest numerical value or the earliest date, respectively. In contrast, for character-based columns, it will produce the value that appears first in alphabetical order.

In summary, the 'MIN' function in SQL is a powerful tool for identifying the smallest value in a column or expression. When combined with the 'GROUP BY' clause, it allows you to find the minimum value within each group of data effectively.
    