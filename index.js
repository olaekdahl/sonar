console.log('Hello!');

 // noncompliant code
 // a user can craft an HTTP request with malicious content
document.location = document.location.hash.slice(1);
