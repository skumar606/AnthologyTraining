//scope outside the function largeAnimals
// let largeAnimal = "Blue Whale";
function largeAnimals() {
    //scope only inside the function
    var largeAnimal = "White Whale";
    console.log("Inside the function " + largeAnimal);
}
console.log("Before calling function " + largeAnimal);
largeAnimals();
console.log("After calling function" + largeAnimal);
//Block Scope
var radius = 8;
if (radius > 0) {
    var PI = 3.14159;
    var msg = 'hi';
}
console.log(radius);
console.log(msg);
console.log(PI);
//Lexical scope
function bankRobbery() {
    var heroes = ["Superman", "Batwoman", "Spiderman"];
    function cryForHelp() {
        for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
            var hero = heroes_1[_i];
            console.log("Please help us " + hero);
        }
    }
    cryForHelp();
}
bankRobbery();
