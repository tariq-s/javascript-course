// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}'`;
}

const india = describeCountry('India', 160, 'Delhi');
const bangladesh = describeCountry('Bangaldesh', 12, 'Dhaka');
console.log(india, bangladesh)


// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return population * 100 / 7900;
}

const percentageOfWorld2 = function (population) {
    return population * 100 / 7900;
}

const indiaPercentage = percentageOfWorld2(160);
console.log(indiaPercentage)

// LECTURE: Arrow Functions

const percentageOfWorld3 = population => population * 100 / 7900;


// LECTURE: Functions Calling Other Functions

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

console.log(describePopulation('China', 1441))


// LECTURE: Introduction to Arrays

const populations = [160, 33, 1441, 20];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]

console.log(percentages)

// LECTURE: Basic Array Operations (Methods)

const neighbours = ['bangladesh', 'pakistan', 'srilanka'];

neighbours.push('Utopia');
console.log(neighbours)
neighbours.pop();
console.log(neighbours)

if(!neighbours.includes('Germany')) {
    console.log("probably not a central European country");
}

const idx = neighbours.indexOf('srilanka');
neighbours[idx] = 'China';
console.log(neighbours)


// LECTURE: Introduction to Objects

const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 160,
    neighbours: ['bangladesh', 'pakistan', 'srilanka'], 
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },
    checkIsIsland: function() {
        if(!this.isIsland) {
            this.isIsland = this.neighbours.length === 0
        }
        return this.isIsland;
    }
}

// LECTURE: Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population += 2;
myCountry['population'] -= 2;

// LECTURE: Object Methods

myCountry.describe()
console.log(myCountry.checkIsIsland())

// LECTURE: Iteration: The for Loop

// for(let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`)
// }

// LECTURE: Looping Arrays, Breaking and Continuing

const percentages2 = [];

for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2)

// LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`neighbours: ${listOfNeighbours[i][j]}`)
    }
}

// LECTURE: The while Loop

const percentages3 = [];
let i = 0;

while(i < populations.length) {
    percentages3[i] = percentageOfWorld1(populations[1]);
    i++;
}
console.log(percentages2)