const path = require('path')

console.log(path.basename(__filename));//Base file name

console.log(path.dirname(__filename));// Directory name

console.log(path.extname(__filename));//file extension

console.log(path.parse(__filename));//path object creation

//concat path
console.log(path.join(__dirname,'test','haha.js'));