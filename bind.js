function fun() {
    console.log(this.name);
}

const obj = { name : 'sajan' };

fun = fun.bind(obj);
fun()

const obj2 = { name: 'vishal'};
fun = fun.bind(obj2);
fun()       // still prints 'sajan'


function foo2() {
    console.log(this.name)
}
var man = {"name": "jack"}
foo2() // undefined
// Attach foo to man as a property
man.foo2 = foo2
man.foo2() // jack
// Copy man.foo to a new var bar
var bar = man.foo2
bar() // undefined (WTF?)

bar = foo2.bind(man);
bar();  // prints 'jack'

let car = foo2.bind({name: 'SAjan'});
car();

car = foo2.bind({name : 'Vishal'});
car();


console.dir(car)
