const API_URL = 'https://nodejs118.dszcbaross.edu.hu/api/auth'
//Register id's
const regName = document.getElementById('regName')
const regEmail = document.getElementById('regEmail')
const regPsw = document.getElementById('regPsw')
const regBtn = document.getElementById('regBtn')

//Login id's
const loginEmail = document.getElementById('loginEmail')
const loginPsw = document.getElementById('loginPsw')
const loginBtn = document.getElementById('loginBtn')
const testLoginBtn = document.getElementById('testLoginBtn')
const logoutBtn = document.getElementById('logoutBtn')
//EventListener register
regBtn.addEventListener('click', register)
//EventListener login
loginBtn.addEventListener('click', login)
//EvenListener testlogin
testLoginBtn.addEventListener('click', testlogin)
//Eventlistener logout
logoutBtn.addEventListener('click', logout)
//async functions
async function register() {
    const name = regName.value
    const email = regEmail.value
    const psw = regPsw.value
    //console.log(Name,Email,Psw);
    try {
        const res = await fetch(`${API_URL}/register`, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({ name , email , psw })
        })
        const data = await res.json()
        console.log(data);
        if (!res.ok) {
            alert('hiba')
        }
        const registerMassage = document.getElementById('registerMessage')
        registerMassage.textContent = data.mmessage
    } catch (error) {
        console.log(`Nem sikerült kapcsolódni a szerverhez: ${error}`);
        
    }
}
async function login() {
    const email = loginEmail.value
    const psw = loginPsw.value
    //console.log(Name,Email,Psw);
    try {
        const res = await fetch(`${API_URL}/login`, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({  email , psw })
        })
        const data = await res.json()
        console.log(data);
        if (!res.ok) {
            alert('hiba')
        }
        const loginMessage = document.getElementById('loginMessage')
        loginMessage.textContent = data.mmessage
    } catch (error) {
        console.log(`Nem sikerült Bejelentkezni: ${error}`);
        
    }
}
async function testlogin() {
    const email = loginEmail.value
    const psw = loginPsw.value
    //console.log(Name,Email,Psw);
    try {
        const res = await fetch(`${API_URL}/login`, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            credentials: 'include',
            body:JSON.stringify({  email , psw })
        })
        const data = await res.json()
        console.log(data);
        if (!res.ok) {
            alert('hiba')
        }
        const loginMessage = document.getElementById('loginMessage')
        loginMessage.textContent = data.mmessage
    } catch (error) {
        console.log(`Nem sikerült Bejelentkezni: ${error}`);
        
    }
}
async function logout() {
    
}