---
title: "How does the MIN function work in SQL?"
summary: "The MIN function in SQL is used to retrieve the smallest value from a specified column in a database table."
author: "Dr. Laura Benson"
degree: "PhD in Behavioral Economics, University of Leeds"
tutor_type: "A-Level Economics Tutor"
date: 2024-09-11
---

The MIN function in SQL is designed to return the smallest value from a specified column.

As an aggregate function, MIN allows you to determine the minimum value within a particular column or expression. It is frequently used alongside the GROUP BY clause to identify the minimum value for each distinct group of values. The syntax for using the MIN function is quite simple: you write "MIN" followed by the column name or expression of interest, enclosed in parentheses.

For instance, if you have a table named 'products' with a column labeled 'price', and you want to find the lowest price among the products, you would execute the following SQL statement:

$$
\text{SELECT MIN(price) FROM products;}
$$

This query will return the minimum price found in the 'price' column.

If your goal is to find the minimum value within each group, you can incorporate the GROUP BY clause. For example, suppose you have a 'products' table that includes both 'category' and 'price' columns, and you wish to identify the cheapest product in each category. You would use the following SQL statement:

$$
\text{SELECT category, MIN(price) FROM products GROUP BY category;}
$$

This query will yield the lowest price for each unique category found in the 'category' column.

It's crucial to understand that the MIN function disregards NULL values. Therefore, if the column or expression you are examining contains NULLs, these will not be included in the minimum value calculation.

The MIN function is applicable to numeric, date, and character-based columns, though its behavior varies slightly depending on the data type. For numeric and date columns, it returns the smallest numerical value or the earliest date, respectively. For character-based columns, it retrieves the value that appears first in alphabetical order.

In summary, the MIN function in SQL is an effective tool for determining the smallest value within a column or expression. It can also be utilized with the GROUP BY clause to find the minimum value for each group of values.
    