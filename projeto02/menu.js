var menuItem = document.querySelectorAll(".item-menu")

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativa')
    )
    this.classList.add('ativa')

}

menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click',function(){
    menuSide.classList.toggle('expandir')

})