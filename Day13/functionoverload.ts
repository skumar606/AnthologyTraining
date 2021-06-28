//Function with string type parameter  
function add(a: string, b: string): string;
//Function with number type parameter  
function add(a: number, b: number): number;
//Function Definition  
function add(a: any, b: any): any {
    return a + b;
}
//Result  
console.log("Addition: " + add("Hello ", "TypeScript"));
console.log("Addition: " + add(30, 20));