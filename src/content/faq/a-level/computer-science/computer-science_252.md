---
title: "How do you create a sequence in SQL?"
summary: "To create a sequence in SQL, use the CREATE SEQUENCE statement, specifying the sequence name and its parameters."
author: "Dr. Sarah Collins"
degree: "MSc in Finance and Economics, University of Edinburgh"
tutor_type: "A-Level Economics Tutor"
date: 2024-03-12
---

You can create a sequence in SQL using the 'CREATE SEQUENCE' statement, followed by the sequence name and its parameters.

In SQL, a sequence is a specialized database object that generates a series of integers. Sequences are commonly used to automatically produce primary key values. To create a sequence, you use the 'CREATE SEQUENCE' statement. The basic syntax is as follows:

$$
\begin{aligned}
\text{CREATE SEQUENCE sequence\_name} \\
\text{START WITH initial\_value} \\
\text{INCREMENT BY increment\_value} \\
\text{MINVALUE minimum\_value} \\
\text{MAXVALUE maximum\_value} \\
\text{CYCLE | NOCYCLE;}
\end{aligned}
$$

In this syntax:
- 'sequence_name' is the designated name for the sequence you are creating.
- The 'START WITH initial_value' clause specifies the initial value of the sequence.
- The 'INCREMENT BY increment_value' clause defines the interval between successive sequence numbers.
- The 'MINVALUE minimum_value' and 'MAXVALUE maximum_value' clauses set the boundaries of the sequence.
- The 'CYCLE' option allows the sequence to restart from the minimum value once the maximum value is exceeded, while 'NOCYCLE' prevents this behavior.

Here is an example of creating a sequence:

$$
\begin{aligned}
\text{CREATE SEQUENCE order\_id\_seq} \\
\text{START WITH 1} \\
\text{INCREMENT BY 1} \\
\text{MINVALUE 1} \\
\text{MAXVALUE 9999} \\
\text{NOCYCLE;}
\end{aligned}
$$

In this example, the sequence named 'order_id_seq' begins at $1$ and increments by $1$ each time a new number is generated. The sequence will not exceed $9999$ and will not cycle back to $1$ when it reaches the maximum value.

Once a sequence is established, you can use the 'NEXTVAL' and 'CURRVAL' functions to generate and retrieve sequence numbers. The 'NEXTVAL' function increments the sequence and returns the new value, while 'CURRVAL' returns the current value of the sequence without incrementing it.

It's important to note that sequences are persistent database objects. This means they remain available across different sessions and transactions. Even if a transaction is rolled back, the sequence number generated during that transaction is not returned to the sequence, ensuring the uniqueness of each generated number.
    