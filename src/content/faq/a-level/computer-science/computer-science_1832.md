---
title: "What are the functions of the INNER JOIN and FULL JOIN in SQL?"
summary: "The INNER JOIN in SQL returns records that have matching values in both tables, while FULL JOIN returns all records from both tables."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-09-16
---

The 'INNER JOIN' and 'FULL JOIN' are both types of joins in SQL that are used to combine records from two or more tables based on related columns. However, they have distinct behaviors when it comes to matching records.

The 'INNER JOIN' retrieves records that have matching values in both tables. It only returns rows where there is a match between the specified columns in Table A and Table B. This type of join is the most commonly used in SQL. For instance, if you have a table of students and a separate table of courses, and you wish to find out which students are enrolled in which courses, you would use an 'INNER JOIN'. The result would be a list of students along with the courses they are enrolled in, but it would only include students who are actively enrolled. Consequently, any student not enrolled in a course would be excluded from the results.

In contrast, the 'FULL JOIN' fetches all records from both Table A and Table B, regardless of whether there are matching values in the specified columns. If there are no matches, the resulting rows will contain 'NULL' for the missing side. Using the same example of students and courses, a 'FULL JOIN' would return a comprehensive list of all students alongside all courses. If a student is not enrolled in any course, they would still appear in the results, but the course information for that student would be 'NULL'. Similarly, if a course has no students enrolled, it would still be included in the results, with the student information for that course marked as 'NULL'.

In summary, the key difference between 'INNER JOIN' and 'FULL JOIN' lies in their output. The 'INNER JOIN' returns only those rows that have matching values in both tables, while the 'FULL JOIN' returns all rows from both tables, filling in 'NULL' where matches do not exist.
    