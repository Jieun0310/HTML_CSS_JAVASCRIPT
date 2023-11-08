const content = document.querySelectorAll('.content')


// for(let i = 0; i < content.length; i++){
//     content[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// }

// 이중 for문
for(let i = 0; i < content.length; i++){
        content[i].addEventListener('click',function(){
            for(let j = 0; j < content.length; j++){
                content[j].classList.remove('active')
            }
            this.classList.toggle('active')
        })
    }
    