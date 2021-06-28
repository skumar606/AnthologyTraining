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
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    var msg = 'hi';
}
console.log(radius);
console.log(msg);
console.log(PI);

//Lexical scope
function bankRobbery() {
    const heroes = ["Superman", "Batwoman", "Spiderman"];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`Please help us ${hero}`);
        }
    }
    cryForHelp();
}

bankRobbery();