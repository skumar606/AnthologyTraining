// ES5: Without arrow function  
var getResult = function (username, points) {
    return username + ' scored ' + points + ' points!';
};
// ES6: With arrow function  
var getResultArr = function (username, points) {
    return username + " scored " + points + " points!";
};
console.log(getResult('Sam', 9));
console.log(getResultArr('Tyson', 10));
