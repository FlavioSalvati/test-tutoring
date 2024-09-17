---
title: "What are virtual and physical addresses in memory management?"
summary: "Virtual addresses are used by the CPU during a program's execution, while physical addresses refer to actual hardware memory locations."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-03
---

Virtual addresses and physical addresses serve distinct roles during a program's execution in a CPU.

A virtual address is a memory address created by the CPU while a program is running. This address operates within the context of a specific process or task and must be translated into a physical address before any actual memory access can occur. This translation is the responsibility of the memory management unit (MMU) of the CPU, which employs a technique known as paging. The use of virtual addresses allows a program to function as though it has sole access to the main memory, despite the presence of other processes that are also utilizing memory.

In contrast, a physical address refers to a location in the actual hardware memory, such as RAM. This is the address used by the memory controller on the motherboard to read from or write to the memory cells. Physical addresses are typically abstracted away from the software running on the CPU; instead, they are managed by the MMU and the memory controller.

The distinction between virtual and physical addresses is a crucial element of modern operating systems and their memory management strategies. This separation facilitates the implementation of features such as virtual memory, which utilizes disk storage to increase the available memory, and memory protection, which prevents one process from accessing the memory allocated to another. Furthermore, this architecture allows for processes to be efficiently moved in and out of memory, a technique known as swapping, which optimizes overall memory usage.

To summarize, virtual and physical addresses are foundational concepts in memory management. Virtual addresses provide an abstraction that enables software to operate as if it has exclusive access to memory, while physical addresses correspond to the actual hardware locations where data is stored. The translation between these two address types is managed by the CPU's memory management unit, supporting efficient and secure utilization of memory resources.
    