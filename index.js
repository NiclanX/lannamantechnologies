
const clicker = document.getElementById('clicker');
// const displayer = document.querySelector('.crm-form');
const closeBtn = document.querySelector('.close-btn');
const formCtrl = document.querySelector('.form-bg');
const overlay = document.querySelector('.overlay');


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

