import * as miModulo from "./gestionPresupuesto.js"
let coche = new miModulo.CrearGasto("Coche",4,"2021/02/01","ITV")
function mostrarDatoEnId(){
    const idElemento = document.querySelector("#idElemento");
    const valor = document.querySelector("#valor");
    idElemento.innerHTML = miModulo.calcularBalance();
    valor.innerHTML =miModulo.mostrarPresupuesto();
}

function mostrarGastoWeb(){
    return
}

function mostrarGastosAgrupadosWeb(){
    return
}


const boton = document.querySelector("#boton");
boton.addEventListener("click",function(){

    mostrarDatoEnId();
});
/*
const boton = document.querySelector("#boton");
boton.addEventListener("click",function(){
let coche = new miModulo.CrearGasto("Coche",4,"2021/02/01","ITV")
    alert(coche.descripcion)
});
*/

export {
    
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb

}