function User(name) {
    const greet = (occassion) => {
        return `${occassion} ${name}!`;
    }
    return greet;
}

const myFunc = User('Sajan');
console.log(myFunc('Morning'));
