---
title: "How do you model a one-to-one relationship in a database?"
summary: "A one-to-one relationship in a database is modelled by linking two tables through a primary key-foreign key relationship."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-05-13
---

A one-to-one relationship in a database is represented by linking two tables through a primary key-foreign key relationship.

In a relational database, a one-to-one relationship occurs when a record in one table is associated with exactly one record in another table. This is facilitated by establishing a primary key-foreign key relationship between the two tables. The primary key serves as a unique identifier for records in the first table, while the foreign key in the second table refers to the corresponding record in the first table.

To effectively model a one-to-one relationship, you must first identify the two entities involved. For instance, consider a database used by a school. A student has a single record in the 'Student' table, which corresponds to a record in the 'StudentDetails' table. The 'Student' table might include fields such as StudentID (the primary key), Name, and Age. In contrast, the 'StudentDetails' table could contain fields like StudentID (the foreign key), Address, and ContactNumber.

In this case, the StudentID in the 'StudentDetails' table acts as a foreign key that links back to the StudentID in the 'Student' table. This establishes a one-to-one relationship between the two tables. Each student has a unique set of details, and each set of details corresponds to one specific student.

It is essential to ensure that the foreign key in a one-to-one relationship is also unique. This guarantees that each record in the first table is linked to exactly one record in the second table. If the foreign key is not unique, this could lead to a situation where a single record in the first table corresponds to multiple records in the second table, thereby creating a one-to-many relationship instead.

In summary, a one-to-one relationship in a database is modeled by identifying two related entities, establishing a primary key in the first table, and then creating a unique foreign key in the second table. This approach links the tables together, ensuring that each record in the first table corresponds to exactly one record in the second table.
    