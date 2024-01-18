const backBtn = document.getElementById("back");
const resetBtn = document.getElementById("reset");
const forthBtn = document.getElementById("forth");
const countLabel = document.getElementById("countLabel");
let counter = 0;

forthBtn.onclick = function(){
    counter++;
    countLabel.textContent = counter;
}

backBtn.onclick = function(){
    counter--;
    countLabel.textContent = counter;
}

resetBtn.onclick = function(){
    counter = 0;
    countLabel.textContent = counter;
}