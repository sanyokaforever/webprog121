const messages = [];
const messagebox = document.querySelector('#massagebox');
const messagebutton = document.querySelector('#massageB');
window.addEventListener('DOMContentLoaded', async () => {
   try {
    const uzik = await fetch('./uzik.csv');
    const UzikText = (await uzik.text()).split('\n').map((elem) => elem.trim());
    UzikText.forEach(uzi => {
      messages.push(uzi);
    });
    console.log(messages)
    messagebutton.addEventListener("click", () =>{ const randomindex = messages[Math.floor(Math.random() * messages.length)]; messagebox.textContent = randomindex; console.log(randomindex);})
   } catch (error) {
    console.error(error)    
   }
});