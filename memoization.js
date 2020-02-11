/**
 * Memoization is a programming technique that attempts to increase a function’s 
 * performance by caching its previously computed results.
 * Memoization is the programmatic practice of making long recursive/iterative functions run much faster.
 * It’s best to implement memoization on functions that are pure and involve heavy, repetitive calculations.
 * @function memo
 * @param {function} func - Pure function that involve heavy, repetitive calc.
 */

function memo(func) {
    var cache = {};
    return function () {
        var key = JSON.stringify(arguments);
        if (cache[key]) {
            return cache[key];
        } else {
            let value = func.apply(this, arguments);
            cache[key] = value;
            return value;
        }
    }
}

var fab = memo(function(n){
    if (n < 2) {
        return 1;
    } else {
        console.log('....loading!');
        return fab(n-1) + fab(n-2);
    }
})

console.log(fab(40));
console.log(fab(9));
console.log(fab(5));

var dataHandler = memo2();
console.log(dataHandler('sajan','sajan'));
console.log(dataHandler('anjali','anjali'));

