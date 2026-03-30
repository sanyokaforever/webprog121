const galeria = document.getElementById('gallery')
const kartya = document.querySelector('.card')
console.log(galeria, kartya)
window.addEventListener("DOMContentLoaded", betoltes)
async function betoltes() {
    try {
        let tomb = []
        const URL = "http://nodejs1.dszcbaross.edu.hu:21003/api/allPictures"
        const res = fetch(URL)
        console.log(res);
        tomb = await res
        console.log(tomb);
    } catch (error) {
        console.log("ERROR");
    }
}