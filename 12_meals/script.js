const gomb = document.getElementById("fetch")
const tarolo = document.getElementById("tarolo")
gomb.addEventListener("click", betoltes)
const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
async function betoltes(){
    tarolo.innerHTML = ""
    const val = await fetch(URL)
    const adat = await val.json()
    val.categories.forEach(kard => {
        const card = document.createElement("div")
        card.className = "card"
        const img = document.createElement("img")
        img.src = kard.strCategoryThumb
        img.alt = kard.strCategory
        const div2 = document.createElement("div")
        div2.className = "card-title"
        div2.textContent = `Kategória: ${kard.strCategory}`
        card.append(img)
        card.append(div2)
        tarolo.append(card)
    })
}