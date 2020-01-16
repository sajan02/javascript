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

/**
 * 11. Spread Operator
 */

const { a1, b1, ...z } = { a1: 1, b1: 2, c1: 3, d1: 4 };
console.log(a1) // 1
console.log(b1) // 2
console.log(z) // { c: 3, d: 4 }

/**
 * 12. Mandatory Parameter
 */

const mandatory = () => {
    throw new Error('Missing parameter!');
}
const foo = (bar = mandatory()) => {
    return bar;
}

try {
    foo();
} catch (error) {
    console.log(error.message);
}
console.log(foo('Hii'));

/**
 * 13. Object[key]
 */

 // object validation rules
const schema = {
    first: {
      required:true
    },
    last: {
      required:true
    }
}
// universal validation function
const validate = (schema, values) => {
  for(field in schema) {
    if(schema[field].required) {
      if(!values[field]) {
        return false;
      }
    }
  }
  return true;
}
console.log(validate(schema, {first:'Bruce'})); // false
console.log(validate(schema, {first:'Bruce',last:'Wayne'})); // true

/**
 * 14. Bitwise IndexoOf
 */
arr = [ 1, 2 , 3]
item = 4
if(~arr.indexOf(item)) { // Confirm item IS found
    console.log(`item ${item} found!`);
}
if(!~arr.indexOf(item)) { // Confirm item IS NOT found
    console.log(`item ${item} not found!`);
}