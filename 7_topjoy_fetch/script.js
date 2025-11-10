const messages = [];
const messagebox = document.querySelector('#massagebox');
const messagebutton = document.querySelector('#massageB');
window.addEventListener('DOMContentLoaded', async () => {
   try {
    const uzik = await fetch('./uzik.csv')
    console.log(uzik)
   } catch (error) {
    console.error(error)    
   }
});