const logo = document.querySelector('#logo');
const menuOptions = document.querySelector('#menuOptions');
const btnMenu = document.querySelector('#btnMenu');
const nav = document.querySelector('.nav');
let open = false;

function openCloseMenu(){
    if(open == false){
        logo.classList.add('remove');
        menuOptions.classList.add('active');
        nav.classList.add('active');
        btnMenu.innerHTML = ` <i class="fas fa-times"></i>`
        open = true;
    } else{
        logo.classList.remove('remove');
        menuOptions.classList.remove('active');
        nav.classList.remove('active');
        btnMenu.innerHTML = ` <i class="fas fa-bars"></i>`
        open = false;
    }
}

