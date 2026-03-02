window.addEventListener("DOMContentLoaded", fetchData)
async function fetchData(){
    try {
        let tombocske = []
        const URL = 'https://picsum.photos/v2/list'
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
        img.src = `https://picsum.photos/id/${image.id}/600/400`
        const p = document.createElement('h3')
        p.textContent = `📷 ${image.author}`
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
    elsoopcio.textContent = 'Összes'
    szerzok.append(elsoopcio)
    const authors = tombocske.map(x => x.author)
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
    const filterLista =  tombocske.filter((x) => x.author === value)
    //console.log(filterLista);
    loadImages(filterLista)
}