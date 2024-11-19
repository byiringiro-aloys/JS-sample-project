//Counter Program

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreasebtn");
const label = document.getElementById("myLabel");

let count=0;
decreaseBtn.onclick = function(){
    count--
    document.getElementById("myLabel").textContent = count;

}

resetBtn.onclick = function(){
    count = 0;
    document.getElementById("myLabel").textContent = count;
}

increaseBtn.onclick = function(){
    count++
    document.getElementById("myLabel").textContent = count;
}