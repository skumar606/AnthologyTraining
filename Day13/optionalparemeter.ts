function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(3, 2, 4));
console.log(multiply(5, 2));

// function multiply(a: number, b?: number, c: number): number {

//     if (typeof c !== 'undefined') {
//         return a * b * c;
//     }
//     return a * b;
// }