/**
 * 1. The Ternary Operator
 */
let x = 5;
const answer = x > 10 ? "greater than 10" : "less than 10";
console.log(answer,'\n');

/**
 * 2. Short-circuit Evaluation
 */
let var1
const var2 = var1 || 'new';
console.log(var2,'\n');

/**
 * 3. Declaring Variables
 */

let a, b, c=3;

/**
 * 4. JavaScript For Loop
 */

const fruits = ['mango', 'peach', 'banana'];
for (const iterator of fruits) {
    console.log(iterator, " ");
}
console.log('\n');
for (const index in fruits) {
    console.log(index, " ");
}
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + Object.keys(element), array);
  }
[{ 'name': 'sajan'}, { 'name': 'vishal'}].forEach(logArrayElements);
fruits.forEach(logArrayElements);


let word = 'sajan';
console.log(Object.keys(word).map((e,i)=>`${word[e]}ajan`))

/**
 * 5. Decimal Base Exponents
 */

 // All the below will evaluate to true
console.log(1e0 === 1);
console.log(1e1 === 10);
console.log(1e2 === 100);
console.log(1e3 === 1000);
console.log(1e4 === 10000);
console.log(1e5 === 100000);

/**
 * 6. Object Property - variable name is the same as the object key, you can take advantage of the shorthand notation.
 */

let obj = {
    a, b, c
}

/**
 * 10. Implicit Return
 * Arrow functions with a single statement will implicitly return the result its evaluation
 * @param {number} diameter 
 */
const calcCircumference = diameter => (Math.PI * diameter,'no')
console.log(calcCircumference(3))