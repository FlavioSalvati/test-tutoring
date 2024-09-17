---
title: "How does a bootstrapping compiler get developed?"
summary: "A bootstrapping compiler starts with an initial version in another language and evolves by self-compiling subsequent versions, enabling continuous improvement and development of the compiler itself."
author: "Dr. Sarah Collins"
degree: "MSc in Finance and Economics, University of Edinburgh"
tutor_type: "A-Level Economics Tutor"
date: 2024-02-11
---

A bootstrapping compiler is created by initially developing a version in a different programming language, followed by self-compiling subsequent versions.

The journey of developing a bootstrapping compiler is both intriguing and paradoxical. The term "bootstrapping" originates from the expression "to pull oneself up by one's bootstraps," which aptly describes the function of a bootstrapping compiler: it is capable of compiling its own source code. But how does a compiler achieve this? The answer lies in a process known as bootstrapping.

The first step in constructing a bootstrapping compiler is to write an initial version of the compiler in a different programming language. This language is commonly a low-level language, such as assembly, although it could also be a high-level language. The initial compiler is referred to as the bootstrap compiler. This bootstrap compiler is utilized to compile the source code of the new compiler, which is written in the target language itself, into an executable program.

Once the bootstrap compiler successfully compiles the new compiler, the new compiler can then be employed to compile its own source code. This stage is known as self-compilation. The result of this stage is a new version of the compiler, which is subsequently used to compile the next iteration, and so forth. This iterative process can be repeated as many times as necessary until the compiler reaches full development and optimization.

The bootstrapping process offers a clever solution to the classic chicken-and-egg dilemma of compiler development. It enables developers to write the compiler in the very language it is designed to compile, thereby streamlining and enhancing the development process. Furthermore, this method allows for ongoing optimization and improvement, as each new version of the compiler can be utilized to compile the subsequent version.

In summary, the process of developing a bootstrapping compiler involves creating an initial version in a different programming language. This bootstrap compiler is then used to compile the source code of the new compiler, which can subsequently compile its own source code. This cycle continues until the compiler is fully developed and optimized.
    