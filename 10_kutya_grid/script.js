{/* 
    <div class="card">
        <img src="./img/bulldog.jpg" alt="dog2"/>
        <div class="content">
            <h3>KutyaKettő</h3>
           <p>bulldog.jpg</p>
       </div>
    </div>
 */}
const cards = document.querySelector('#cards')
console.log(cards);
const LISTA_URL = 'src/kepek.txt'
const IMG_MAPPA = 'img/'
window.addEventListener('DOMContentLoaded', loadCards)


async function loadCards(){
    try {
        const res = await fetch(LISTA_URL)
        // console.log(res);
        if(!res.ok){
            return alert('Nem sikerult betolteni a faljt')
        }
        const text = await res.text()
        const files = text.split('\n').map(x => x.trim()).filter(x => x.length > 0)
        // console.log(text);
        // console.log(files);
        if(files.length === 0){
            return alert('A Lista Üres')
        }
        files.forEach((fileName, index)=>{
            cards.appendChild(createCard(fileName, index))
        })
    } catch (error) {
        alert(`hiba: ${error} `)
    }
}
function createCard(fileName, index){
    const card = document.createElement('div')
    card.className = 'card'
    const image = document.createElement('img')
    image.src = `${IMG_MAPPA}${fileName}`
    image.alt = `Kutya Kép${index+1}`
    const div2 = document.createElement('div')
    div2.className = 'content'
    const h3 = document.createElement('h3')
    h3.textContent = `Kutya #${(index+1)}`
    const p = document.createElement('p')
    p.textContent = `${fileName}`
    div2.append(h3)
    div2.append(p)
    card.append(image)
    card.append(div2)
    console.log(card)
    return card
}