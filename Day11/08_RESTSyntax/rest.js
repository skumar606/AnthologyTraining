// function add(...nums) {
//     let total = 0;

//     for (const n of nums) {
//         total += n;
//     }
//     return total;
// }


// function add(a, ...nums) {
//     let total = 0;

//     console.log(a);
//     console.log(nums);
//     for (const n of nums) {
//         total += n;
//     }
//     return total;


// }

// function add(a, b, ...nums) {
//     let total = 0;

//     console.log(a);
//     console.log(b);
//     console.log(nums);
//     for (const n of nums) {
//         total += n;
//     }
//     return total;


// }

//array destructuring
function add(...[a, b, c]) {
    let total = 0;

    console.log(a);
    console.log(b);
    console.log(c);



}

//cannot put parameter after the rest
const result = add(5, 10, 20);
console.log(result)