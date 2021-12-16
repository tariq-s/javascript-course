console.log("Asssignments")

// LECTURE: Values and Variables

let country = "India";
let continent = "Asia";
let population = 160;

console.log(country, continent, population)

// LECTURE: Data Types

let isIsland = false;
let language;

console.log(
    typeof isIsland,
    typeof population,
    typeof country,
    typeof language
);

// LECTURE: let, const and var

language = 'Urdu';


// LECTURE: Basic Operators

console.log("half population", population / 2);
population += 1;
console.log("population incremented", population);

let finlandPopulation = 6;
if(population > finlandPopulation) {
    console.log("population more than Finland");
} else {
    console.log("population less than Finland");
}

let avgPopullation = 33;
if(population > avgPopullation) {
    console.log("population more than average");
} else {
    console.log("population less than average");
}

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description)

// LECTURE: Strings and Template Literals

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description)

// LECTURE: Taking Decisions: if / else Statements

if(population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}

// LECTURE: Type Conversion and Coercion

4
"617"
23
false
1143

// LECTURE: Equality Operators: == vs. ===

// let numNeighbours = prompt('How many neighbour countries does your country have?');

// if(numNeighbours == 1) {
//     console.log('Only one border');
// } else if(numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// if(numNeighbours === 1) {
//     console.log('Only one border');
// } else if(numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }


// numNeighbours = Number(numNeighbours)

// if(numNeighbours === 1) {
//     console.log('Only one border');
// } else if(numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// LECTURE: Logical Operators

if(language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`)
} else {
    console.log(`${country} does not meet your criteria`)
}

// LECTURE: The switch Statement

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'Urdu':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoke language');
        break;
    default:
        console.log("Great language too");
}

// LECTURE: The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33 ? "greater": "lower"} than average`);