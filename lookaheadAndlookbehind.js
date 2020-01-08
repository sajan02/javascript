// Lookahead
let testString = "MangoJuice, VanillaShake, GrapeJuice";
let testRegExp = /[a-zA-Z]+(?=Juice)/g;
let matches = testString.match( testRegExp );
console.log( matches )


// Lookbehind
testString = "FrozenBananas, DriedApples, FrozenFish";
testRegExp = /(?<=Frozen)[a-zA-Z]+/g;
matches = testString.match( testRegExp );
console.log( matches );