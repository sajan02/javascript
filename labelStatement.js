loopBlock4: {
    console.log('Hi');
    break loopBlock4;
    console.log('Bye');
}

forLoop1:
for (let i = 0; i < 10; i++) {
    forLoop2:
    for (let j = 0; j < 2; j++) {
        if (i*j%2 !== 0) {
            console.log(`${i}*${j} is odd`, i*j);
            continue forLoop1;
        }
        else {
            console.log('let it go');
        }
    }
}