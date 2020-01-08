function Bike(model, color) {
    this.model = model;
    this.color = color;

    this.getDetails = () => {
        return `Bike model - ${this.model}, color - ${this.color}`;
    }
}

// Do not override the function def
Bike.prototype.getDetails = () => {
    this.modal = '';
    this.color = '';
    return 'Done!'
}

const b1 = new Bike('BMW 360d', 'Red');
console.log(b1.getDetails());
// console.log(b1.resetDetails());
const b2 = new Bike('BMW x10', 'black');
console.log(b1.getDetails());
// console.log(b1.resetDetails());
