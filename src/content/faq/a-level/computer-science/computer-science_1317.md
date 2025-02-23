---
title: "How does the HyperText Transfer Protocol Secure (HTTPS) encrypt data?"
summary: "HTTPS encrypts data by using Secure Sockets Layer (SSL) or Transport Layer Security (TLS) protocols to provide secure communication."
author: "Dr. Olivia Green"
degree: "PhD in Machine Learning, University of Bristol"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-07-16
---

HTTPS secures data transmission through the use of Secure Sockets Layer (SSL) or Transport Layer Security (TLS) protocols, ensuring safe communication over networks.

HTTPS, which stands for HyperText Transfer Protocol Secure, is an extension of the HyperText Transfer Protocol (HTTP) designed for secure communication across computer networks, primarily on the Internet. The primary goals of HTTPS are to authenticate the websites being visited and to safeguard the privacy and integrity of the data exchanged. It accomplishes these objectives through encryption protocols, specifically SSL and TLS.

When a user connects to a website using HTTPS, the session is secured with a digital SSL/TLS certificate. A user can identify a secure connection if the website URL begins with 'https://' instead of 'http://'. SSL/TLS employs a combination of public key and symmetric key encryption to establish a secure connection between two entities, typically a web or mail server and the client machine, whether communicating over the Internet or within a private network.

During the initial 'handshake' process, the SSL/TLS client and server collaboratively determine the version of the protocol to use, select cryptographic algorithms, exchange random values, and conduct a key exchange. The server presents its digital certificate to the client for authentication purposes. Additionally, the client may request a digital certificate from the server, after which both parties proceed to the key exchange phase.

In the key exchange, a symmetric key is generated and shared. The client uses the public key from the server's digital certificate to encrypt a random number and sends it to the server. The server then decrypts this number with its private key, resulting in a symmetric key that both the client and server now possess, while remaining unknown to any outside observer.

This symmetric key is utilized throughout the session to encrypt and decrypt HTTP messages exchanged between the client and server. As a result, the data shared between the user and the website is kept secure, protecting it from eavesdropping, tampering, or message forgery.
    