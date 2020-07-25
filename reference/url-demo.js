const url = require('url')

const myURL = new URL('http://ogaboss.com?id=13&status=active')

//Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

//Host Root Domain
console.log(myURL.host);

//Hostname without port
console.log(myURL.hostname);

//Pathname
console.log(myURL.pathname);

//Queries
console.log(myURL.search);

//Turn the Queries into objects
console.log(myURL.searchParams);

//Add params 
myURL.searchParams.append('abc',123)
console.log(myURL.searchParams);

//Loop through params
myURL.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));
