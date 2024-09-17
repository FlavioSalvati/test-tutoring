---
title: "How does the HyperText Transfer Protocol Secure (HTTPS) encrypt data?"
summary: "HTTPS encrypts data by using Secure Sockets Layer (SSL) or Transport Layer Security (TLS) protocols to provide secure communication."
author: "Prof. Daniel White"
degree: "PhD in Human-Computer Interaction, University of Leeds"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-06-16
---

HTTPS is a protocol that secures data transmission by employing Secure Sockets Layer (SSL) or Transport Layer Security (TLS) protocols, ensuring secure communication over a network.

HTTPS, which stands for HyperText Transfer Protocol Secure, is an extension of the standard HyperText Transfer Protocol (HTTP). It is widely utilized for secure communication on the Internet. The primary goals of HTTPS are to authenticate the visited website and to safeguard the privacy and integrity of the data exchanged between the user and the website. This is achieved through the use of encryption protocols, specifically SSL and TLS.

When a user connects to a website via HTTPS, the session is encrypted using a digital SSL/TLS certificate. Users can identify a secure connection by noticing that the website's URL begins with 'https://' instead of 'http://'. SSL/TLS employs both public key and symmetric key encryption to establish a secure connection between two parties, typically a web or mail server and a client machine, whether over the Internet or an internal network.

During the initial 'handshake' process, the SSL/TLS client and server negotiate the protocol version they will use, select cryptographic algorithms, exchange random values, and perform a key exchange. The server sends its digital certificate to the client for authentication purposes. The client may also request a digital certificate from the server, after which both parties proceed to the key exchange phase.

The key exchange is crucial because it involves generating and exchanging a symmetric key. The client, using the public key from the server's digital certificate, encrypts a randomly generated number and sends it to the server. The server then decrypts this number using its private key, resulting in a symmetric key that both the client and server share, while keeping it confidential from any third parties.

This symmetric key is utilized for the duration of the session to encrypt and decrypt HTTP messages exchanged between the client and the server. By doing so, HTTPS ensures that the data transmitted between the user and the website remains secure, protecting it from eavesdropping, tampering, or message forgery.
    