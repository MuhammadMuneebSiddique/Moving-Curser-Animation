"use strict";
let body = document.querySelector("#main");
let crsr = document.querySelector("#curser");
body.addEventListener("mousemove", (e) => {
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";
});
