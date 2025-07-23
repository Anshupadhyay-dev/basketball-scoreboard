let homescore = 0
let guestscore = 0
let Hscore = document.getElementById("home-score")
let Gscore = document.getElementById("guest-score")

function add1H(){
    homescore += 1
    Hscore.textContent = homescore
}

function add2H(){
    homescore += 2
    Hscore.textContent = homescore
}

function add3H(){
    homescore += 3
    Hscore.textContent = homescore
}


function add1G() {
    guestscore += 1
    Gscore.textContent = guestscore 
}
function add2G() {
    guestscore += 2 
    Gscore.textContent = guestscore 
    
}
function add3G() {
    guestscore += 3 
    Gscore.textContent = guestscore 
}