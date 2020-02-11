function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);

}

console.log(generateRandomAlphaNum(10))

function getRandomNumber(min = 0, max = 9) {
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Random number in range ${min} - ${max}`,x);
}

getRandomNumber();


// The classic trim function of Java, C#, PHP and many other language that remove whitespace from 
// a string doesn’t exist in JavaScript, so we could add it to the String object.
String.prototype.trim = function(){return this.replace(/^s+|s+$/g, "");};  


// Rounding number to N decimal place
var num =2.443242342;
num = num.toFixed(4);