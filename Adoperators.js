// '+ Operator' Ever wanted to quickly convert a string to a number?
let set1 = new Set(['5000', '-4', '0xFF', '123e-5']);
set1.forEach((e) => {
    console.log(e, +e);
});


// '!! Operator' Double Bang is a neat trick to convert any expression to a Boolean value.
set1 = new Set(['', {}, [], true, 123, undefined, null]);
set1.forEach((e) => {
    console.log(e, !!e);
});

// '~ Operator' Bitwise NOT operator -(N+1)
let st = 'Sajan Kashi';
console.log(~st.indexOf('saaaaa'));
let x = 10;
console.log(~x); // prints -11

