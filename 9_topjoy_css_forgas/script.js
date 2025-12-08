const tarolo = document.querySelector('.tarolo')
const kupak = document.querySelector('#kupak')
const szoveg = document.querySelector('#szoveg')
const uzik=[];
let zart = true; 
window.addEventListener('DOMContentLoaded', async () => {
    
    try {
     const valasz = await fetch('./uzik.csv');
     const text = await valasz.text();
     const sorok = text.split('\n').map(sor => sor.trim()).filter(sor=>sor.length > 0);
     sorok.forEach(sor =>{
         uzik.push(sor);
     })
    } catch (error) {
     console.log(error)    
    }
});
tarolo.addEventListener('click', ()=>{
    if(zart){
        tarolo.classList.remove('zar')
        tarolo.classList.add('nyit');
        zart = false;
        setTimeout(()=>{ szoveg.textContent = uzik[Math.floor(Math.random()*uzik.length)]}, 500)
    }  else{
        szoveg.textContent = "";
        tarolo.classList.remove('nyit')
        tarolo.classList.add('zar');
        zart = true;
    }
})