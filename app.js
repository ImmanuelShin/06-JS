'use strict'

function hello() {
    alert("Hello!");
}

function askName() {
    let name = prompt("What is your name?");
    if (name === null) {
        return;
    } else if (name === "") {
        document.getElementById("name_area").innerHTML = "Nice to meet you, lazy anonymous user! I hope you enjoyed the memes!"
    } else {
        document.getElementById("name_area").innerHTML = "Nice to meet you, " + name + "! I hope you enjoyed the memes!"
    }
}

let count = 0;

function clicker() {
    count++;
    document.getElementById("tally").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("tally").innerHTML = count;
}