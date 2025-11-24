const kupak = document.querySelector('#kupak');
const szoveg = document.querySelector('#szoveg');
const tarolo = document.querySelector('.tarolo');
let zarva = true;
const uzik = [];
window.addEventListener('DOMContentLoaded', async () => {
    
   try {
    const valasz = await fetch('./uzik.csv');
    const text = await valasz.text();
    const sorok = text.split('\n').map(x => x.trim());
    sorok.forEach(sor =>{
        uzik.push(sor);
    })
   } catch (error) {
    console.error(error)    
   }
});
console.log(uzik);