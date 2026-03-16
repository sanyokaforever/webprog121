window.addEventListener("DOMContentLoaded", fetchData)
async function fetchData(){
    try {
        let tombocske = []
        const URL = 'https://akabab.github.io/starwars-api/api/all.json'
        const res = await fetch(URL)
        //console.log(res)
        tombocske = await res.json()
        //console.log(tombocske);
        loadAuthors(tombocske)
        loadImages(tombocske)
    } catch (error) {
        console.log(error)
    }
}
function loadImages(tombocske) {
    const tarolo = document.querySelector('#tarolo')
    tarolo.innerHTML = ''
    tombocske.forEach(image => {
        const card = document.createElement('div')
        card.classList.add('card')
        const cardinner = document.createElement('div')
        cardinner.classList.add('card-inner')
        const img = document.createElement('img')
        img.classList.add('img')
        img.alt = image.author
        img.src = image.image
        const p = document.createElement('h3')
        p.textContent = image.name
        p.classList.add('author')
        cardinner.append(img)
        cardinner.append(p)
        card.append(cardinner)
        tarolo.append(card) 
    })
    //console.log(tarolo);
}
function loadAuthors(tombocske) {
    const szerzok = document.querySelector('#szerzok')
    //console.log(szerzok);
    szerzok.innerHTML = ""
    const elsoopcio = document.createElement('option')
    elsoopcio.value = ''
    elsoopcio.textContent = 'all'
    szerzok.append(elsoopcio)
    const authors = tombocske.map(x => x.gender)
    //console.log(authors); 
    const unique = new Set(authors)
    //console.log(unique);
    unique.forEach(auth => {
    const elsoopcio = document.createElement('option')
    elsoopcio.value = auth
    elsoopcio.textContent = auth
    szerzok.append(elsoopcio)
    })
    szerzok.addEventListener('change', () => authFiter(tombocske, szerzok))
}
function authFiter(tombocske, szerzok){
    const value = szerzok.value
    if( value === ' ' || !value ){ 
        return loadImages(tombocske) 
    }
    const filterLista =  tombocske.filter((x) => x.gender === value)
    //console.log(filterLista);
    loadImages(filterLista)
}