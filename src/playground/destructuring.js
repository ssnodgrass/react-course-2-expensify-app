//
// Object Destructuring
//

const person = {
  name: 'Scott',
  age: 24,
  location: {
    city: 'Fremont',
    temp: 35
  }
};

// Can assign a default value to destructured object variable
const {name = 'Anonymous', age} = person
console.log(`${name} is ${age}.`);

// Can change the name of a destructured object property
const {city, temp: temperature} = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`)
}

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// Matched by index position in array. Can leave off items by removing them, but keeping the comma
const [, city2, state = 'New York'] = address;

console.log(`You are in ${city2} ${state}.`)

//
// Destructuring action generators
//

 const add = ({ a, b }, c) => {
   return a + b + c;
 }

 console.log(add({ a:1, b: 12}, 100));