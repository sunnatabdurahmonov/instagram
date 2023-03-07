window.addEventListener('DOMContentLoaded',function(){
        window.addEventListener('scroll',function(){
        const header =document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0)
    })
})
const menu_btn = document.querySelector ('.menu_btn');
const navigation = document.querySelector ('.navigation');


menu_btn .addEventListener('click', ()=> {
    menu_btn .classList.toggle('active')
    navigation .classList.toggle('active')
})