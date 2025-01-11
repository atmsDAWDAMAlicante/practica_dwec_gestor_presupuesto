import * as miModulo from "./gestionPresupuesto.js"
let coche = new miModulo.CrearGasto("Coche",4,"2021/02/01","ITV")

const idElemento = document.querySelector("#idElemento");
const valor = document.querySelector("#valor");

function mostrarDatoEnId(valorIdElemento, valorEnValor){
    // Primero pongo las dos constantes como globales
    idElemento.innerHTML = valorIdElemento;
    valor.innerHTML = valorEnValor;
}

function mostrarGastoWeb(idElemento, gasto){

    // El div envolvente
    const divGranGasto = document.createElement("div");
    divGranGasto.className = "gasto";

    // El div de la descripción
    const divDescripcion = document.createElement("div");
    divDescripcion.className = "gasto-descripcion";
    divDescripcion.textContent = gasto.descripcion;

    // El div de la fecha
    const divFecha = document.createElement("div");
    divFecha.className = "gasto-fecha";
    divFecha.textContent = gasto.fecha;

    const divEtiquetas = document.createElement("div");
    divEtiquetas.className = "gasto-etiquetas";

    // Si hay etiquetas, las añadimos
    gasto.etiquetas.forEach(etiqueta => {
        const cadaEtiqueta = document.createElement("span");
        cadaEtiqueta.className = "gasto-etiquetas-etiqueta";
        cadaEtiqueta.textContent = etiqueta;
        divEtiquetas.appendChild(cadaEtiqueta);
        });

    return
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){
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