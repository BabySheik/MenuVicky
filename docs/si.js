import data from "./data.js";

const divMenu = document.getElementById ("Menu")

data.map ((elemento) => {
    divMenu.innerHTML += `<div class="flex">
        <img src="${elemento.img}">   
        <h2>${elemento.title}</h2>
        <h4>${elemento.price}$</h4>
        <p>${elemento.desc}</p>
        <hr>
    </div>`
})

const B1 = document.getElementById ("B1")

const B2 = document.getElementById ("B2")

const B3 = document.getElementById ("B3")

const B4 = document.getElementById ("B4")

B1.addEventListener ('click', Todos)

B2.addEventListener ('click', Platillo)

B3.addEventListener ('click', Bebida)

B4.addEventListener ('click', Postres)

function Todos(evento){
    divMenu.innerHTML = ""

    data.map ((elemento) => {
        divMenu.innerHTML += `<div class="flex">
            <img src="${elemento.img}">   
            <h2>${elemento.title}</h2>
            <h4>${elemento.price}$</h4>
            <p>${elemento.desc}</p>
            <hr>
        </div>`
    })
}
function Platillo(evento){
    divMenu.innerHTML = ""
let categoryFiltrada =  `platillo`;
 let flitrados = data.filter((data) => data.category === categoryFiltrada);

 flitrados.forEach( (elemento) => {
    divMenu.innerHTML += `<div class="flex">
    <img src="${elemento.img}">   
    <h2>${elemento.title}</h2>
    <h4>${elemento.price}$</h4>
    <p>${elemento.desc}</p>
    <hr>
</div>`
 })
}
function Postres(evento){
    divMenu.innerHTML = ""
let categoryFiltrada =  `postre`;
 let flitrados = data.filter((data) => data.category === categoryFiltrada);

 flitrados.forEach( (elemento) => {
    divMenu.innerHTML += `<div class="flex">
    <img src="${elemento.img}">   
    <h2>${elemento.title}</h2>
    <h4>${elemento.price}$</h4>
    <p>${elemento.desc}</p>
    <hr>
</div>`
 })
}

function Bebida(evento){
    divMenu.innerHTML = ""
let categoryFiltrada =  `bebida`;
 let flitrados = data.filter((data) => data.category === categoryFiltrada);

 flitrados.forEach( (elemento) => {
    divMenu.innerHTML += `<div class="flex">
    <img src="${elemento.img}">   
    <h2>${elemento.title}</h2>
    <h4>${elemento.price}$</h4>
    <p>${elemento.desc}</p>
    <hr>
</div>`
 })
}


