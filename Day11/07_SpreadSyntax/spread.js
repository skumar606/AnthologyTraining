//In Function calls
// console.log(Math.min(1, 34, 52, 5, -4));

// //NaN
// let temperatures = [35, 38, 41, 4, -7];
// console.log(Math.min(temperatures));

// //Using Spread
// console.log(Math.min(...temperatures));

// //In Arrays
// const parents = ["Jane", "Adam", "Steve"];
// const kids = ["Angel", "Sam"];

// console.log(parents);
// console.log(kids);
// const fullFamily = [parents, kids];
// console.log(fullFamily[0].length);
// console.log(fullFamily[1].length);

// //Using spread operator now 
// console.log(...kids, ...parents);

// const dogs = ["Max", "Flame"];
// console.log(...kids, "ME", ...dogs, ...parents, "Bozo the parrot");

// //Copying arrays . Remember they are reference types
// const originals = ["RV1", "RV2", "RV3"];
// const copies = originals;
// copies.push("RV4");
// console.log(originals);
// console.log(copies);

// //Copying arrays using spread
// const originals1 = ["RV1", "RV2", "RV3"];
// const copies1 = [...originals1];
// copies1.push("RV4");
// console.log(originals1);
// console.log(copies1);

//In Object Literals
const mainColors = { brightRed: "#e55039", waterfallBlue: "#38ada9" };
const accentColors = { lightGrey: "#778ca3", swanWhite: "#f7f1e3" };

const fullPalette = { ...mainColors, ...accentColors };
//{brightRed: "#e55039", waterfallBlue: "#38ada9", lightGrey: "#778ca3", swanWhite: "#f7f1e3"}
console.log(fullPalette);

const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };
const hybrid = { name: "Gryphon", ...lion, ...eagle };
console.log(hybrid);


const todos = [
    { user: "Brick", completed: false, task: "Upload Video" },
    { user: "Lilith", completed: true, task: "Rob Bank" }
]

function addTodo(newTodo) {
    return [...todos, { ...newTodo, completed: false }]
}

const newTodos = addTodo({ user: "Mordecai", task: "Feed Bloodwing" });
console.log(newTodos);


