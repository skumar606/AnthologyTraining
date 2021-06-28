// ES5: Without arrow function  
var getResult = function (username: string, points: number) {
    return username + ' scored ' + points + ' points!';
};

// ES6: With arrow function  
var getResultArr = (username: string, points: number): string => {
    return `${username} scored ${points} points!`;
}

console.log(getResult('Sam', 9));
console.log(getResultArr('Tyson', 10));

//Function to calculate square of a number
//Function to convert ft to m
//Function to convert pounds to kilograms
//Function to convert fahrenheit to celsius