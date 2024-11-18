
import { counter } from "./counter.js";

const numCounter = new counter();

function incr(){
    document.getElementById("counter-display").innerText = numCounter.increment().toFixed(1);
}

function decr(){
    document.getElementById("counter-display").innerText = numCounter.decrement().toFixed(1);
}

function reset(){
    document.getElementById("counter-display").innerText = numCounter.reset().toFixed(1);
}

document.getElementById("incr").addEventListener("click", incr);
document.getElementById("decr").addEventListener("click", decr);
document.getElementById("reset").addEventListener("click", reset);