const karakter = document.querySelector('#karakterek')
// console.log(karakter);
const URL1 =  'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json'
window.addEventListener('DOMContentLoaded', fetchCharacters)
async function fetchCharacters(){
    try {
        const res = await fetch(URL1)
        // console.log(res);
        const chars = await res.json()
        // console.log(chars);
        displayCharacters(chars)
    } catch (error) {
        alert(`hiba: ${error} `)
    }
}
function displayCharacters(chars){
    // console.log(chars);
    chars.forEach(char => {
        
    });
}