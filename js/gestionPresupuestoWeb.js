import * as miModulo from "./gestionPresupuesto.js"
let coche = new miModulo.CrearGasto("Coche",4,"2021/02/01","ITV")

//const idElemento = document.querySelector("#idElemento");
//const valor = document.querySelector("#valor");

function mostrarDatoEnId(idElemento, valor){
    
    let elemento = document.getElementById(idElemento);
    return elemento.textContent = valor;
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

    // Insertar el div principal en el contenedor
    contenedor.appendChild(divGranGasto);
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){
    let contenedor = document.getElementById(idElemento);

 // Div principal con la clase 'agrupacion'
 let divAgrupacion = document.createElement("div");
 divAgrupacion.classList.add("agrupacion");

 // Título con período 
 let titulo = document.createElement("h1");
 titulo.textContent = `Gastos agrupados por ${periodo}`;
 divAgrupacion.appendChild(titulo);

 // Bucle para recorrer el objeto 'agrup' para crear los elementos clave-valor
 for (let clave in agrup) {
     if (agrup.hasOwnProperty(clave)) {
         // Div contenedor de cada dato
         let divDato = document.createElement("div");
         divDato.classList.add("agrupacion-dato");

         // span para la clave (nombre de la propiedad)
         let spanClave = document.createElement("span");
         spanClave.classList.add("agrupacion-dato-clave");
         spanClave.textContent = clave;

         // Crear el span para el valor (cantidad de gastos)
         let spanValor = document.createElement("span");
         spanValor.classList.add("agrupacion-dato-valor");
         spanValor.textContent = agrup[clave];

        //Al final: añadir todo

        // Añadir todos los elementos al divDato
         divDato.appendChild(spanClave);
         divDato.appendChild(spanValor);

         // Añadir el divDato a la agrupación principal divAgrupacion
         divAgrupacion.appendChild(divDato);
     }
 } // ojo, esto está cerrando el bucle clave in agrup

 // ULTIMO PASO: EL CONTENEDOR: 
 // a) Limpiar contenido anterior
 // b) agregar el nuevo divAgrupacion al contenedor
 contenedor.innerHTML = "";
 contenedor.appendChild(divAgrupacion);

}


// FUNCIONES QUE SE AÑADEN CON EL EJERCICIO "EVENTOS"

function repintar(){

// 1º repintar: Mostrar el presupuesto en div#presupuesto 
// (funciones mostrarPresupuesto y mostrarDatoEnId)

// Mostrar los gastos totales en div#gastos-totales 
// (funciones calcularTotalGastos y mostrarDatoEnId)


// 3º repintar: Mostrar el balance total en div#balance-total 
// (funciones calcularBalance y mostrarDatoEnId)

// 4º repintar: Borrar el contenido de div#listado-gastos-completo, 
// para que el paso siguiente no duplique la información. INNERHTML

// 5º repintar: Mostrar el listado completo de gastos en div#listado-gastos-completo 
// (funciones listarGastos y mostrarGastoWeb)




    return;
} // Cierre de la función repintar


function actualizarPresupuestoWeb(){
    let presupuesto = parseFloat(prompt("Introduce un nuevo presupuesto"));
    miModulo.actualizarPresupuesto(presupuesto)
    repintar();
}
const actualizarpresupuesto = document.querySelector("#actualizarpresupuesto");
actualizarpresupuesto.addEventListener("click",actualizarPresupuestoWeb)



export {
    
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
    repintar, 
    actualizarPresupuestoWeb

}