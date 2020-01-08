const imediateCaller = (message) => {
    return (function () {
        var foo = 'foo'
        console.log(message, foo);
        return 'Bruh!'
      })();
}

let x = imediateCaller('Hello Hi!')