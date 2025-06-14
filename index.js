
const clicker = document.getElementById('clicker');
// const displayer = document.querySelector('.crm-form');
const closeBtn = document.querySelector('.close-btn');
const formCtrl = document.querySelector('.form-bg');
const overlay = document.querySelector('.overlay');

const mode = document.getElementById('mode');

mode.addEventListener('click', () => {
    const body = document.querySelector('body');
    const icon = document.querySelector('#icon');
    body.classList.toggle('lightMode');

    if (body.classList.contains('lightMode')) {
        icon.innerHTML = `dark_mode`;
        localStorage.setItem('theme', 'lightMode');
    } else {
        icon.innerHTML = `light_mode`;
        localStorage.setItem('theme', 'darkMode');
    }

})


clicker.addEventListener('click', () => {
    
    // displayer.classList.toggle('show');
    formCtrl.classList.toggle('show');
    overlay.classList.add('show');

});

closeBtn.addEventListener('click', ()=>{
    if (formCtrl.classList.contains('show')) {
        formCtrl.classList.toggle('show');
        overlay.classList.toggle('show');
    }
})

document.addEventListener('DOMContentLoaded', setTheme);

function setTheme() {

    if (!localStorage.getItem('theme')) {
        alert('No Theme');
        return
    }

    theme = localStorage.getItem('theme');    
    document.querySelector('body').classList.add(theme);

    
}

