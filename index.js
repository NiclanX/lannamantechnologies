// alert('An Error occured');
const clicker = document.getElementById('clicker');
const displayer = document.querySelector('.crm-form');

clicker.addEventListener('click', () => displayer.classList.toggle('show'));
