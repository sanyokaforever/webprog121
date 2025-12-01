const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('#szoveg');
const tarolo = document.querySelector('.tarolo');
let zarva = true;
const uzik = [];
window.addEventListener('DOMContentLoaded', async () => {
    
   try {
    const valasz = await fetch('./uzik.csv');
    const text = await valasz.text();
    const sorok = text.split('\n').map(sor => sor.trim());
    sorok.forEach(sor =>{
        uzik.push(sor);
    })
   } catch (error) {
    console.error(error)    
   }
});
console.log(uzik);
const kupakanimacio = async(start, stop) => {
    const lepes = start < stop ? 1 : -1;
    for(let index = start; index !== stop + lepes; index += lepes){
        await new Promise(resolve => setTimeout(resolve, 20));
        kupak.src = `./images/bottlecap_${index}.png`;
    }
}
tarolo.addEventListener('click', async() =>{
    if(zarva){
        await kupakanimacio(0,10);
        szoveg.textContent = uzik[Math.floor(Math.random()*uzik.length)]
        szoveg.positi
        zarva = false;
    }
    else{
        szoveg.textContent = "";
        await kupakanimacio(10,0);
        zarva = true;
    }
})
