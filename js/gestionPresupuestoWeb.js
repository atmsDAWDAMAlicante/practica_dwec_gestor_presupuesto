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
    let contenedor = document.getElementById(idElemento);

 // Crear el div principal con la clase 'agrupacion'
 let divAgrupacion = document.createElement("div");
 divAgrupacion.classList.add("agrupacion");

 // Crear el título con el período correspondiente
 let titulo = document.createElement("h1");
 titulo.textContent = `Gastos agrupados por ${periodo}`;
 divAgrupacion.appendChild(titulo);

 // Recorrer el objeto 'agrup' para crear los elementos clave-valor
 for (let clave in agrup) {
     if (agrup.hasOwnProperty(clave)) {
         // Crear el div contenedor de cada dato
         let divDato = document.createElement("div");
         divDato.classList.add("agrupacion-dato");

         // Crear el span para la clave (nombre de la propiedad)
         let spanClave = document.createElement("span");
         spanClave.classList.add("agrupacion-dato-clave");
         spanClave.textContent = clave;

         // Crear el span para el valor (cantidad de gastos)
         let spanValor = document.createElement("span");
         spanValor.classList.add("agrupacion-dato-valor");
         spanValor.textContent = agrup[clave];

         // Añadir clave y valor al div dato
         divDato.appendChild(spanClave);
         divDato.appendChild(spanValor);

         // Añadir el div dato a la agrupación principal
         divAgrupacion.appendChild(divDato);
     }
 }

 // Limpiar contenido anterior y agregar la nueva estructura
 contenedor.innerHTML = "";
 contenedor.appendChild(divAgrupacion);

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