---
title: "How does Cross-Origin Resource Sharing (CORS) work in web development?"
summary: "Cross-Origin Resource Sharing (CORS) is a mechanism that allows many resources on a web page to be requested from another domain."
author: "Prof. Lucas Scott"
degree: "PhD in Network Security, University College London"
tutor_type: "A-Level Computer Science Tutor"
date: 2024-05-08
---

Cross-Origin Resource Sharing (CORS) is a mechanism that enables web pages to request resources from different domains.

CORS operates as a protocol by utilizing additional HTTP headers to inform browsers that a web application operating from one origin is permitted to access specific resources from a server located at a different origin. A web application initiates a cross-origin HTTP request when it seeks a resource from a domain, protocol, or port that differs from the one where the current document originated.

For instance, consider a web application hosted at $http://mydomain.com$ that uses AJAX to request data from $http://yourdomain.com$. Due to security concerns, browsers impose restrictions on cross-origin HTTP requests initiated by scripts, such as AJAX. CORS was developed to alleviate these security limitations, allowing various resources (such as fonts and JavaScript files) on a web page to be accessed from a domain distinct from that of the originating resource.

The process works as follows: when a browser makes a request, it adds an 'Origin' header that includes the domain from which the request originated. The server then examines this header and decides whether to respond based on its CORS policy. If the server permits the request, it sends back an 'Access-Control-Allow-Origin' header that matches the 'Origin' value from the request. Subsequently, the browser determines whether to permit the request to proceed based on the contents of the 'Access-Control-Allow-Origin' header.

If the server chooses not to respond to the request—perhaps due to not recognizing the requesting domain—it can either omit the 'Access-Control-Allow-Origin' header entirely or set it to a value that does not correspond to the 'Origin' header from the request. In either situation, the browser will block the request from completing.

In conclusion, CORS is a vital security feature that empowers servers to regulate which domains are allowed to access their resources. It provides a means to relax the same-origin policy, which generally prohibits web pages from making requests to a domain different from that of the web page itself, while still maintaining oversight over which entities can access server resources.
    