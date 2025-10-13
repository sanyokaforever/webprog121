const ertek = document.getElementById("MoodSlider");
const kep = document.getElementById("MoodImg");
kep.src = `./img/${ertek.value}.png `
/*window.addEventListener('DOMContentLoaded', ()=>{
kep.src = `./img/${ertek.value}.png `
})*/
ertek.addEventListener('input', ()=>{
    const csuszkaertek = parseInt(ertek.value) +1;
    console.log(csuszkaertek);
    kep.src = `./img/${csuszkaertek}.png `
})