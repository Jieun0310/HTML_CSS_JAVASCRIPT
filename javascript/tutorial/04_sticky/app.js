const header = document.querySelector('.header')


window.addEventListener('scroll',function(){
    header.classList.toggle('active',window.scrollY > 0) //window.scrollY > 0 스크롤이 일어날때 발생
})