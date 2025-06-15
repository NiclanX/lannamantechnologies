document.addEventListener('DOMContentLoaded', setTheme);

const clicker = document.getElementById('clicker');

const closeBtn = document.querySelector('.close-btn');
const formCtrl = document.querySelector('.form-bg');
const overlay = document.querySelector('.overlay');

const mode = document.querySelectorAll('#mode');




const sideBar = document.querySelector('.sideBar');
const menu = document.querySelector('#mobileMenu');



console.log(sideBar);


mode.forEach(btn => {
    btn.addEventListener('click', () => {
        const body = document.querySelector('body');
        const icon = document.querySelector('#icon');
        body.classList.toggle('lightMode');

        if (body.classList.contains('lightMode')) {
            icon.innerHTML = `dark_mode`;
            localStorage.setItem('theme', 'lightMode');
        } else {
            icon.innerHTML = `light_mode`;
            localStorage.removeItem('theme');
        }

    })
});



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



function setTheme() {

    if (!localStorage.getItem('theme')) {
        return
    }

    theme = localStorage.getItem('theme');    
    document.querySelector('body').classList.add(theme);

    
}


function closeMe() {
    sideBar.classList.remove('open');
}

function openMenu() {
    sideBar.classList.add('open');
}
