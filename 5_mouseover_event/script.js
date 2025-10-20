const demo = document.getElementById('demo');
let IsImageDisplayed = false;
demo.addEventListener('mouseover', (event)=>{
    if (!IsImageDisplayed && event.target === demo) {
        const img = document.createElement('img');
        img.src = `./img/kep.jpg`;
        img.alt = 'kep';
        demo.replaceChildren(img)
        IsImageDisplayed = true;
    }
});
demo.addEventListener('mouseout', (event)=>{
    if (IsImageDisplayed && event.target === demo) {
        const p = document.createElement('p');
        p.textContent = "Hanyasra értékellek?";
        demo.replaceChildren(p);
        IsImageDisplayed = false;
    }
});