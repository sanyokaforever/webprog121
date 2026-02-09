const karakter = document.querySelector('#karakterek')
// // console.log(karakter);
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
        const card = document.createElement('div')
        const p = document.createElement('p')
        const image = document.createElement('img')
        const div2 = document.createElement('div')
        const h3 = document.createElement('h3')
        card.className = 'card'
        image.src = fixImageUrl(char.image) 
        image.alt = char.name
        div2.className = 'content'
        h3.textContent = char.name
        p.innerHTML = `Ház: ${char.house}<br> Születési év: ${char.yearOfBirth}<br> Színész: ${char.actor}`
        div2.append(h3)
        div2.append(p)
        card.append(image)
        card.append(div2)
        karakter.append(card)
        console.log(card)
    });
}
function fixImageUrl(url){
    if (!url) {
        return ''
    }
    return url.replace('http://hp-api.herokuapp.com', 'https://hp-api.onrender.com').replace('http://', 'https://')
}