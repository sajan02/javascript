const greeet = () => {
    if (!greeet.locale) {
        console.log('Hello');
    } else if (greeet.locale === 'Bae') {
        console.log('Hello Bae');
    } else if (greeet.local === 'Me') {
        console.log('Hello self');
    }
    else {
        console.log('Not Define');
    }
}

const staticFunction = () => {
    if (staticFunction.counter === undefined) {
        staticFunction.counter = 0;
    }
    return staticFunction.counter++;
}

greeet();
greeet.locale = 'Bae';
greeet();

let x = staticFunction;
console.log(x());
console.log(x());

let y = staticFunction;
console.log(y());
console.log(y());
