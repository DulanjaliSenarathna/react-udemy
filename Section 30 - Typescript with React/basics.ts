//Primitives: number, string,boolean
// More complex : arrays, objects
// Function types, parameters

//Primitives
let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor:boolean;
isInstructor = true;

//More complex types
let hobbies: string[];

hobbies = ['h1','h2']

let person: {
    name: string,
    age: number
}

person = {
    name: 'Roy',
    age: 25
}

let person1: {
    name: string,
    age: number
}[];

// Type inference

let course = 'React';

// Using Union Types

let country : string | number = 'Srilanka';

country = 12;