---
title: "How to use Greedy algorithm for activity selection problem?"
summary: "The Greedy algorithm for the activity selection problem involves sorting activities by their finish times and selecting those with the earliest finish time to maximize the number of activities."
author: "Dr. Sarah Wilson"
degree: "MSc in Physics, University College London"
tutor_type: "A-Level Physics Tutor"
date: 2024-04-06
---

To effectively apply the Greedy algorithm to the activity selection problem, we begin by sorting the activities based on their finish times, prioritizing those with the earliest finish time.

The activity selection problem aims to choose the maximum number of non-overlapping activities from a given set, each defined by a start time and a finish time. The primary objective is to maximize the number of activities that can be performed without any overlaps.

The Greedy algorithm for activity selection operates as follows:
1. Sort the activities in ascending order according to their finish times.
2. Select the first activity, which has the earliest finish time.
3. Continue selecting the next activity that finishes the earliest but does not overlap with the previously selected activity. Repeat this process until no more activities can be selected.

Let’s consider an example with the following set of activities:

- Activity 1: Start time = $1$, Finish time = $4$
- Activity 2: Start time = $3$, Finish time = $5$
- Activity 3: Start time = $0$, Finish time = $6$
- Activity 4: Start time = $5$, Finish time = $7$
- Activity 5: Start time = $3$, Finish time = $8$
- Activity 6: Start time = $5$, Finish time = $9$
- Activity 7: Start time = $6$, Finish time = $10$
- Activity 8: Start time = $8$, Finish time = $11$

Sorting these activities by their finish times yields the following order:

1. Activity 3: Start time = $0$, Finish time = $6$
2. Activity 1: Start time = $1$, Finish time = $4$
3. Activity 2: Start time = $3$, Finish time = $5$
4. Activity 5: Start time = $3$, Finish time = $8$
5. Activity 4: Start time = $5$, Finish time = $7$
6. Activity 6: Start time = $5$, Finish time = $9$
7. Activity 7: Start time = $6$, Finish time = $10$
8. Activity 8: Start time = $8$, Finish time = $11$

Next, we select the first activity with the earliest finish time, which is:

- **Activity 1**: Start time = $1$, Finish time = $4$

Following this, we look for the next activity that finishes the earliest and does not overlap with Activity 1. The next suitable choice is **Activity 4**, which has a start time of $5$ and a finish time of $7$. 

Continuing this process will lead to selecting the maximum number of compatible activities from the list. This method ensures that we efficiently utilize the available time slots and achieve an optimal solution to the activity selection problem.
    