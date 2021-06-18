const mydiv = document.querySelector("#mydiv");

mydiv.addEventListener("mOver", function () {
    mydiv.innerHTML = "Hello", true
});

mydiv.addEventListener("mOut", function () {
    mydiv.innerHTML = "Mouse Over Me", true
});