const user = {
    firstName: 'Sajan',
    lastName: 'Kashi',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set age(value) {
        if(isNaN(value)) throw Error('Age has to be a number')
        this._age = value;
    },
    get age() {
        return this._age;
    }
}

console.log(user.fullName);
try {
    user.age = 'asda'
} catch(e) {
    console.log(e.message);
}

user.age = 21;
console.log(user.age);
