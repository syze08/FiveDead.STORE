const h1 = document.querySelector('#h1')
const h2 = document.querySelector('#h2')
const h3 = document.querySelector('#h3')
const h4 = document.querySelector('#h4')
const h5 = document.querySelector('#h5')

const h = document.querySelector('#hrs3')
const d = document.querySelector('#d1')
const dd = document.querySelector('#d7')
const m = document.querySelector('#m1')
const lf = document.querySelector('#lf')

function primeiro (){
    h1.classList.remove('sumir')
    h2.classList.add('sumir')
    h3.classList.add('sumir')
    h4.classList.add('sumir')
    h5.classList.add('sumir')
}
h.addEventListener('click', primeiro)


function segundo (){
    h2.classList.remove('sumir')
    h1.classList.add('sumir')
    h3.classList.add('sumir')
    h4.classList.add('sumir')
    h5.classList.add('sumir')
}
d.addEventListener('click',segundo )

function terceiro(){
    h3.classList.remove('sumir')
    h1.classList.add('sumir')
    h2.classList.add('sumir')
    h4.classList.add('sumir')
    h5.classList.add('sumir')
}
dd.addEventListener('click',terceiro )

function quarto(){
    h4.classList.remove('sumir')
    h1.classList.add('sumir')
    h2.classList.add('sumir')
    h3.classList.add('sumir')
    h5.classList.add('sumir')
}
m.addEventListener('click',quarto)


function quinto(){
    h5.classList.remove('sumir')
    h1.classList.add('sumir')
    h2.classList.add('sumir')
    h3.classList.add('sumir')
    h4.classList.add('sumir')
}
lf.addEventListener('click',quinto)