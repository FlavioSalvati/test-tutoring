---
title: "How is the HAVING clause used with the GROUP BY clause in SQL?"
summary: "The HAVING clause in SQL is used with the GROUP BY clause to filter the results of the grouping."
author: "Dr. Ava Johnson"
degree: "PhD in Software Development, University of Nottingham"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-01-19
---

The 'HAVING' clause in SQL serves as a filtering mechanism that operates alongside the 'GROUP BY' clause, enabling you to refine the results of your grouped data.

In SQL, the 'GROUP BY' clause is utilized to aggregate rows that share the same values in specified columns. This clause is frequently paired with aggregate functions such as 'COUNT', 'MAX', 'MIN', 'SUM', and 'AVG' to perform calculations on each group of rows. However, there are instances when you may wish to filter the results of your aggregated data, which is where the 'HAVING' clause becomes essential.

The 'HAVING' clause was introduced to SQL because the 'WHERE' clause cannot be employed with aggregate functions. The 'WHERE' clause filters rows before any grouping and aggregation take place, while the 'HAVING' clause filters results after the data has been grouped and aggregated. This distinction makes the 'HAVING' clause particularly valuable when you need to apply conditions based on aggregate calculations.

For instance, consider a table containing sales data where you want to determine the total sales for each salesperson, but only for those who have achieved total sales exceeding £1000. You would first use the 'GROUP BY' clause to group the sales data by salesperson and apply the 'SUM' function to compute each salesperson's total sales. Subsequently, you would use the 'HAVING' clause to exclude salespeople whose total sales are below £1000.

An example SQL statement illustrating this scenario could look like this:

'''sql
SELECT Salesperson, SUM(Sales) AS TotalSales
FROM SalesData
GROUP BY Salesperson
HAVING SUM(Sales) > 1000;
'''

In this SQL statement, the 'GROUP BY' clause groups the sales data by the 'Salesperson', the 'SUM' function calculates the total sales for each individual, and the 'HAVING' clause filters out those salespeople with total sales less than £1000.

In summary, the 'HAVING' clause in SQL is a powerful feature that allows you to filter the results of your 'GROUP BY' clause based on specific conditions. It is especially useful when dealing with aggregated data and when you want to apply filters that involve aggregate functions.
    