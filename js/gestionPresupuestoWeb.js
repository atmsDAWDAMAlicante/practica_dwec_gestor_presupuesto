import * as miModulo from "./gestionPresupuesto.js"

function mostrarDatoEnId(){
    let coche = new miModulo.CrearGasto("Coche",4,"2021/02/01","ITV")
    alert(coche.descripcion)
}

function mostrarGastoWeb(){
    return
}

function mostrarGastosAgrupadosWeb(){
    return
}
const boton = document.querySelector("#boton");/*
boton.addEventListener("click",function(){
    alert("Hola");
})*/
boton.addEventListener("click",mostrarDatoEnId);

/*
export {
    
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb

}*/