//“call” is a method on every function that allows you to invoke the function specifying in 
// what context the function will be invoked.
//  Again, call is a property on every function and the first argument you pass to it will be 
//  the context (or the focal object) in which the function is invoked. In other words, 
//  the first argument you pass to call will be what the this keyword inside that function is 
//  referencing.
// Now in order to pass arguments to a function being invoked with .call, you pass them in one 
// by one after you specify the first argument which is the context.
function greet (l1, l2, l3) {
    console.log
    (
      `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3} \n`
    );
  }

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(user, languages[0], languages[1], languages[2])

// "apply" - same as 'call' but instead of passing in arguments one by one, 
// you can pass in a single array and it will spread each element in the array out for you as 
// arguments to the function.

console.log('calling with apply');
greet.apply(user, languages);

// The last part of this rule is .bind. .bind is the exact same as .call but instead of 
// immediately invoking the function, it’ll return a new function that you can invoke at a 
// later time. So if we look at our code from earlier, using .bind, it’ll look like this


console.log('calling with bind');
const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"