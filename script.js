let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let ul = document.querySelector('.header__ul');
let header = document.querySelector('.header');
let link = document.getElementsByTagName('a');
let button = document.querySelector('.button');
let form = document.querySelector('.form');
let formZone = document.querySelector('.form-zone');
let modal = document.querySelector('.modal');

let modalAppear = function (){
    if(window.innerWidth >1000){
        setTimeout("modal.style.display = 'flex'", 2000);
        
    }
    
    
};
modalAppear();
let modalClose = function (){
    setTimeout("modal.style.display = 'none'", 10000);
    
};
modalClose();


burger.addEventListener('click', ()=> {
    burger.classList.toggle('is__active');
    menu.classList.toggle('is__active-menu');
    ul.classList.toggle('is__active-menu-list');
    header.classList.toggle('is__active-background');
    
    

for (let i = 0; i < link.length; i++) {
    link[i].classList.toggle('is__active-link')
    
}

})


button.addEventListener('click', ()=>{
    form.classList.toggle('is__active-form');
    
    
})

document.addEventListener('click', (e)=>{
    if(e.target === form||e.target === formZone){
        form.classList.remove('is__active-form');
        form.style.transition = '0.5s all'
        
    }
})