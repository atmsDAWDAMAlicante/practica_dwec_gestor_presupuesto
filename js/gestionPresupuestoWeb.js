import * as miModulo from "./gestionPresupuesto.js"

function mostrarDatoEnId(){
let coche = new miModulo.CrearGasto("Coche",4,"2021/02/01","ITV")
alert(coche.valor)
}

function mostrarGastoWeb(){

}

function mostrarGastosAgrupadosWeb(){

}




export {
    
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb

}