---
title: "What's the relationship between an assembler and a linker?"
summary: "An assembler translates assembly language into machine code, while a linker combines multiple object files into a single executable program."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-09-16
---

An assembler is responsible for translating assembly language into machine code, while a linker plays a crucial role in combining multiple object files into a single executable program. 

Both the assembler and the linker are integral components in the process of transforming high-level programming languages into executable programs, each fulfilling distinct functions. The assembler's primary task is to convert assembly language—a low-level programming language—into machine code. Machine code represents the most fundamental level of programming language, consisting of binary instructions that can be directly executed by the computer's hardware.

The translation performed by the assembler occurs in a two-step process. In the first step, known as the "first pass," the assembler scans the entire assembly program and maps all labels to their corresponding memory locations. In the subsequent step, referred to as the "second pass," the assembler translates the assembly language instructions into machine code. During this pass, it replaces all symbolic references with the memory locations determined in the first pass.

Conversely, the linker is a program that takes one or more object files generated by a compiler and merges them into a single executable program. Object files are intermediate files that contain machine code but are not yet executable; they are produced by the compiler after translating the high-level source code.

The primary role of the linker is to resolve all symbolic references between object files. For instance, if a function in one object file calls a function in another object file, the linker locates the memory address of the second function and substitutes the symbolic reference with this address. Additionally, the linker consolidates all the object files into a single executable file, which is then ready to be run on the computer.

In summary, both the assembler and the linker are essential in the process of converting high-level programming languages into executable programs. The assembler translates assembly language into machine code, while the linker combines multiple object files, resolves symbolic references, and produces a single executable program.
    