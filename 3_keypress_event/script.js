const area = document.querySelector('#area');
const demo = document.querySelector('#demo');
area.addEventListener('keyup',()=>{
    demo.textContent = '*'.repeat(area.value.length);
});