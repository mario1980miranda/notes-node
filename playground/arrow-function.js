var square = (x) => {
    var result = x * x;
    return result;
};
console.log(square(9));

var square_arrow = (x) => x * x;
console.log(square_arrow(9));

var user = {
    name: 'Mario',
    sayHi: () => { //this will not work as expected, 'couse arrow function here returns as undefined
        console.log(arguments); 
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () { // now it will works as we want, but, no arrow-function, 'cause it references itself (this)
        console.log(arguments); 
        console.log(`Hi. I'm ${this.name}`);
    }
};
console.log('User method example.');
console.log('****************************');
user.sayHi(1,2,3);
console.log('****************************');
user.sayHiAlt(1,2,3);