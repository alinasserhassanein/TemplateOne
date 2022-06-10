let icon = document.querySelectorAll(".header .links .icon");
let active = document.querySelectorAll(".header .links ul");

icon.forEach(function (ele) {
    ele.onclick = function() {
        active.forEach(function (ele) {
            if (ele.classList != "active") {
                ele.classList.add("active");
            } else {
                ele.classList.remove("active");
            }
        })
    }
})