// hello.toUpperCase();
// console.log('AFTER ERROR');

// try {
//     hello.toUpperCase();
// }
// catch
// {
//     console.log('ERROR');
// }

// console.log('AFTER ERROR');

function yell(msg) {
    try {

        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) {

        console.log(e);
        console.log("Please pass a string");
    }
}