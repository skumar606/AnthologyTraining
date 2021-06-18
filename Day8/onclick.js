const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You clicke me!!");
    console.log("hope it worked");
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('dblclick', function () {
    alert("dbl clicked")
});