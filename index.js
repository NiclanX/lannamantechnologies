
const clicker = document.getElementById('clicker');
// const displayer = document.querySelector('.crm-form');
const closeBtn = document.querySelector('.close-btn');
const formCtrl = document.querySelector('.form-bg');
const overlay = document.querySelector('.overlay');

const mode = document.getElementById('mode');

mode.addEventListener('click', ()=>{
   const body= document.querySelector('body');
   const icon = document.querySelector('#icon');
   body.classList.toggle('lightMode');

   if (body.classList.contains('lightMode')) {
    icon.innerHTML = `dark_mode`;
   } else {
    icon.innerHTML = `light_mode`;
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

