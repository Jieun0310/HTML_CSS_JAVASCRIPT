const onePrice = document.querySelector('#price')
const minuse = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const count = document.querySelector('.count')
const totalPrice = document.querySelector('.total span')

const unit_price = 30000
let num = 1
onePrice.textContent = unit_price.toLocaleString()
count.textContent = num

plus.addEventListener('click',function(){
    num++ 
    if(num >  10){
        alert('최대 주문수량은 10개입니다.')
        num = 10
    } 
    count.textContent = num
    paintTotal()
})

minuse.addEventListener('click',function(){
    num--
    if(num <  1){
        alert('최소 주문수량은 1개입니다.')
        num = 1
    } 
    count.textContent = num
    paintTotal()
})

function paintTotal(){
    totalPrice.textContent = (unit_price * num).toLocaleString()
}

paintTotal()