const menuToogle = document.querySelector('.menu_toogle input');

console.log(menuToogle)

const nav = document.querySelector('nav');
if(menuToogle){
    menuToogle.addEventListener('click', ()=>{
        nav.classList.toggle('show');
    })
}