let name = 'Petr';
let age = 29;
let hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return 'Name is '
        + userName +
        ', age is '
        + userAge +
        ' and the user has hobbies: '
        + userHasHobby;
}

console.log(summarizeUser(name, age, hasHobbies));

const person = {
    name: 'Petr',
    age: 29,
    greet () {
        console.log(summarizeUser(this.name, this.age));
    }
};

person.greet();

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));
console.log(hobbies);

hobbies.push('Programming');

// Spread Operator
const copiedArray = [...hobbies];
console.log(copiedArray);

// Rest operator
const toArray = (...args) => {
    return args
}

console.log(toArray(1, 2, 3, 4));

// Destructuring
const {name: personName, age: personAge} = person;

console.log(personName + ' ' + personAge);

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);