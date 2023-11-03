let output;

// Deprecated property to get all the elements of the document
output = document.all;
output = document.all[0];
output = document.all.length;

// Get the whole document
output = document.documentElement;

// You can access just the head or body of the document
output = document.head;
output = document.body;

// You can also access the children of the head or body of the document
output = document.head.children;
output = document.body.children;

// Access doctype, domain, URL, charset, contentType
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Access the html collection of the forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// // Can also change the id of the form
// document.forms[0].id = 'new-id';

// // Acces the html collection of the links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].id = "google-link";
// output = document.links[0].className = "google-class";
// output = document.links[0].classList;

// Access images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Will not work as forms is a collection! Convert to array first:
// document.forms.forEach((form) => console.log(form));
const forms = Array.from(document.forms);
forms.forEach(form => console.log(form));

console.log(output);