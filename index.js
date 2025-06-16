let loading = false;


document.addEventListener('DOMContentLoaded', setTheme);



const clicker = document.getElementById('clicker');
const loader = document.querySelector('.loading');
const closeBtns = document.querySelectorAll('.close-btn');
const formCtrl = document.querySelector('.form-ctrl');
const overlay = document.querySelector('.overlay');

const mode = document.querySelectorAll('#mode');




const sideBar = document.querySelector('.sideBar');
const menu = document.querySelector('#mobileMenu');


console.log(sideBar);


mode.forEach(btn => {
    btn.addEventListener('click', () => {
        const body = document.querySelector('body');
        const html = document.querySelector('html');
     
        const icon = document.querySelectorAll('#icon');
        body.classList.toggle('lightMode');
        html.classList.toggle('lightMode');

        if (body.classList.contains('lightMode')) {
            icon.forEach(icon  => {

                icon.innerHTML = `dark_mode`;
            });
            localStorage.setItem('theme', 'lightMode');
        } else {
            icon.forEach(icon  => {
                icon.innerHTML = `light_mode`;

            });
            localStorage.removeItem('theme');
        }

    })
});



clicker.addEventListener('click', () => {
    

    
    formCtrl.classList.toggle('show');
    bg = document.querySelector('.form-bg');
     bg.classList.toggle('show');

});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (formCtrl.classList.contains('show')) {
            bg = document.querySelector('.form-bg');
            bg.classList.toggle('show');
            formCtrl.classList.toggle('show');

        }
    })
})


if (!loading) {
    loader.remove();
}



function setTheme() {
    
    if (!localStorage.getItem('theme')) {
        loading = false;
        return
    }

    theme = localStorage.getItem('theme');    
    document.querySelector('body').classList.add(theme);
    document.querySelector('html').classList.add(theme);
    console.log('hi');
     loading = false;
    

    
}


function closeMe() {
    sideBar.classList.remove('open');
}

function openMenu() {
    sideBar.classList.add('open');
}
