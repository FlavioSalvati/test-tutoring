---
title: "How does a composite key differ from a primary key?"
summary: "A composite key is a combination of two or more columns in a table that can be used to uniquely identify each row, unlike a primary key which is a single column."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-05-07
---

A composite key is defined as a combination of two or more columns in a database table that collectively serve to uniquely identify each row. This is distinct from a primary key, which consists of a single column.

To elaborate, a primary key functions as a unique identifier for a record within a database table. It comprises a single column that contains unique values, ensuring that no two rows can have the same value in that column. The primary key is essential for maintaining data integrity and managing relationships between tables in a relational database. It represents a foundational concept in database design, critical for efficient data storage and quick retrieval.

Conversely, a composite key, also referred to as a compound key or concatenated key, consists of two or more columns. The combination of these columns is used to uniquely identify a row in the table. While individual columns within a composite key may contain duplicate values, the overall combination of values across all columns in the key must remain unique.

For instance, consider a table that records the grades of students across various subjects. This table may include columns such as 'StudentID', 'Subject', and 'Grade'. In this scenario, neither 'StudentID' nor 'Subject' could serve as a primary key independently because a student may enroll in multiple subjects, and multiple students can take the same subject. However, the combination of 'StudentID' and 'Subject' could effectively function as a composite key since each student is recorded for each subject only once.

In summary, a primary key is a singular column that uniquely identifies a record, while a composite key consists of two or more columns that together uniquely identify a record. Both types of keys are instrumental in preserving data integrity within a database and enhancing the efficiency of data retrieval.
    