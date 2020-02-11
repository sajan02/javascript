const promise = new Promise((res, rej) => {
    res('Passed!');
    rej('Failed');
});

promise
    .then( d => console.log(d))
    .catch(e => console.log(e))
