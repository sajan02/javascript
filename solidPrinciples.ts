//  Reference - https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688
// Pending - Dependency Inversion Principle

/**
 * Single Responsibility Principle - A class/component/microService should be responsible for only one thing.
 * If a class has more than one responsibility, it becomes coupled.
 * A change to one responsibility results to modification of the other responsibility.
 */

 // Example

class Animal {
    name;
    constructor(name: string){
        this.name = name || ''
     }
    getAnimalName() {
        return this.name;
     }
    makeSound() {
       return 'mute';
     }
    legCount():any {
        return 'no legs';
    };
}
class AnimalDB {
    getAnimal(a: Animal) { }
    saveAnimal(a: Animal) { }
}

/**
 * Open-Closed Principle - Software entities(Classes, modules, functions) should be open for extension, not modification.
 * Liskov Substitution Principle - A sub-class must be substitutable for its super-class
 */

 // Eaxmple

class Lion extends Animal {
    makeSound() {
        return 'roar';
    }
    legCount() {
        return 4;
    }
}
class Squirrel extends Animal {
    makeSound() {
        return 'squeak';
    }
    legCount() {
        return 4;
    }
}
class Snake extends Animal {
    makeSound() {
        return 'hiss';
    }
}

const animals: Array<Animal> = [
    new Lion('lion'),
    new Squirrel('mouse'),
    new Snake('snake'),
    new Animal('Human')
]

for(let animal of animals) {
    console.log(`Animal ${animal.getAnimalName()} makes ${animal.makeSound()}! sound and has ${animal.legCount()} legs`);
}

/**
 * Interface Segregation Principle - Make fine grained interfaces that are client specific
    Clients should not be forced to depend upon interfaces that they do not use.
 */

interface IShape {
    draw();
}

class Circle implements IShape {
    radius;
    constructor(radius) {
        this.radius = radius || 0;
    }
    draw(){
        return `Drawing circle with radius ${this.radius}`;
    }
}

class Triangle implements IShape {
    side
    constructor(side) {
        this.side = side || 0;
    }
    draw(){
        return `Drawing triangle with side ${this.side}`;
    }
}

const shapes: Array<IShape> = [
    new Circle(5),
    new Triangle(20),
]
