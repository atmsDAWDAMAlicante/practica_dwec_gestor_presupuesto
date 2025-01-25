import * as miModulo from "./gestionPresupuesto.js"
let coche = new miModulo.CrearGasto("Coche",4,"2021/02/01","ITV")

//const idElemento = document.querySelector("#idElemento");
//const valor = document.querySelector("#valor");

function mostrarDatoEnId(idElemento, valor){
    
    let elemento = document.getElementById(idElemento);
    elemento.innerHTML = valor;
}

function mostrarGastoWeb(idElemento, gasto){

    let contenedor = document.getElementById(idElemento);

    // El div envolvente
    const divGranGasto = document.createElement("div");
    //divGranGasto.className = "gasto";
    divGranGasto.classList.add("gasto");

    // El div de la descripción
    const divDescripcion = document.createElement("div");
    //divDescripcion.className = "gasto-descripcion";
    divDescripcion.classList.add("gasto-descripcion");
    divDescripcion.textContent = gasto.descripcion;

    // El div de la fecha
    const divFecha = document.createElement("div");
    //divFecha.className = "gasto-fecha";
    divFecha.classList.add("gasto-fecha");
    divFecha.textContent = gasto.fecha;

     // El div del valor -- este lo había olvidado
     const divValor = document.createElement("div");
     //divFecha.className = "gasto-valor";
     divValor.classList.add("gasto-valor");
     divValor.textContent = gasto.valor;

    const divEtiquetas = document.createElement("div");
    //divEtiquetas.className = "gasto-etiquetas";
    divEtiquetas.classList.add("gasto-etiquetas");

    // Si hay etiquetas, las añadimos
    gasto.etiquetas.forEach(etiqueta => {
        const cadaEtiqueta = document.createElement("span");
        //cadaEtiqueta.className = "gasto-etiquetas-etiqueta";
            cadaEtiqueta.classList.add("gasto-etiquetas-etiqueta");
            cadaEtiqueta.textContent = etiqueta;
            divEtiquetas.appendChild(cadaEtiqueta);
        });

    //Al final: añadir todo

    // Añadir todos los elementos al div principal
    divGranGasto.appendChild(divDescripcion);
    divGranGasto.appendChild(divFecha);
    divGranGasto.appendChild(divValor);
    divGranGasto.appendChild(divEtiquetas);

    // Insertar el nuevo elemento en el contenedor
    contenedor.appendChild(divGranGasto);
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