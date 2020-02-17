/**
 * Reference: https://medium.com/javascript-in-plain-english/10-javascript-interview-questions-for-2020-697b40de9480
 */

 // Arrow functions do not have their own this and refer to the outer one:
const arrowObject = {
    a: 'b',
    // here, this refers to the root function (file itself), which has no idea about a
    doMoreStuff: () => console.log(this.a)
  };
  
  arrowObject.doMoreStuff(); // undefined