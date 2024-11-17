const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["batman","superman","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);   [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

//const both_hero=marvel_heroes.concat(dc_heroes)

//console.log(both_hero);  [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]

const allNewHeroes=[...marvel_heroes,...dc_heroes]  //spred operator
console.log(allNewHeroes);


const newArray=[1,2,3,[4,5,6],[7,8,[1,3]]]
const correctArray=newArray.flat(Infinity)
console.log(correctArray);

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
const x=Array.from("Ritesh")
console.log(x);
console.log(x.indexOf("t"));


