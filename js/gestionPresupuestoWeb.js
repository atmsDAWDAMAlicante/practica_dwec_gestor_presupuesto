import * as miModulo from "./gestionPresupuesto.js"
let coche = new miModulo.CrearGasto("Coche",4,"2021/02/01","ITV")

//const idElemento = document.querySelector("#idElemento");
//const valor = document.querySelector("#valor");

function mostrarDatoEnId(idElemento, valor){ // Se invoca en el nº 1 de la función repintar
    
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

const presupuesto = miModulo.mostrarPresupuesto();
  mostrarDatoEnId('presupuesto', presupuesto); // esta función está más arriba

// 2º Mostrar los gastos totales en div#gastos-totales
// (funciones calcularTotalGastos y mostrarDatoEnId)
// Esta operación, en principio no se refleja en el test
const gastosTotales = miModulo.calcularTotalGastos();
mostrarDatoEnId('gastos-totales', gastosTotales);
console.log(gastosTotales); // para ver por consola que se ejecuta, pero no se actualiza porque
// aún no se ha modificado ningún gasto/dato

// 3º repintar: Mostrar el balance total en div#balance-total 
// (funciones calcularBalance y mostrarDatoEnId)
// Esta operación, en principio no se refleja en el test
const balanceTotal = miModulo.calcularBalance();
mostrarDatoEnId('balance-total', balanceTotal);
console.log(balanceTotal); // para ver por consola que se ejecuta, pero no se actualiza porque
// aún no se ha modificado ningún gasto/dato

// 4º repintar: Borrar el contenido de div#listado-gastos-completo, 
// para que el paso siguiente no duplique la información. INNERHTML

let listadoGastsoCompleto = document.getElementById('listado-gastos-completo'); 
listadoGastsoCompleto.innerHTML = ""; 

// 5º repintar: Mostrar el listado completo de gastos en div#listado-gastos-completo 
// (funciones listarGastos y mostrarGastoWeb)
listadoGastsoCompleto = miModulo.listarGastos(); // Listar gastos devuelve un array que
// se ha ido llenando con anyadirGasto(gasto) push... en la siguiente línea se itera un bucle
listadoGastsoCompleto.forEach((cadaGasto) => {
    mostrarGastoWeb('listado-gastos-completo', cadaGasto);
    console.log(cadaGasto); // esto mostrará por consola los objetos que en el HTML se muestran en el listado
 });


    return;// Este return no tengo muy claro que hace aquí
} // Cierre de la función repintar


// ESTA YA LA HABÍA HECHO LA PRIMERA

function actualizarPresupuestoWeb(){
    let presupuesto = parseFloat(prompt("Introduce un nuevo presupuesto"));
    miModulo.actualizarPresupuesto(presupuesto)
    repintar();
}
const actualizarpresupuesto = document.querySelector("#actualizarpresupuesto");
actualizarpresupuesto.addEventListener("click",actualizarPresupuestoWeb);



// FUNCIÓN QUE YA INTERVIENE EN EL TEST
// Función nuevoGastoWeb y botón anyadirgasto

function nuevoGastoWeb(){

    // aquí va un prompt a lo grande
    let descripcion = prompt("Introduce la descripción: "); 
    let cantidad = parseFloat(prompt("Introduce la cantidad: "));
    let fecha = prompt ("Introduce la fecha en formato AAAA-MM-DD: "); 
    let etiquetas = prompt('Introduce etiquetas separadas por comas: '); 
    let arrEtiquetas = etiquetas.split(', '); 

    
    // hay que crear un objeto gasto

    let nuevoGasto = new miModulo.CrearGasto(descripcion, cantidad, fecha, arrEtiquetas); 
    miModulo.anyadirGasto(nuevoGasto); // esto lo añade al array de objetos
    // ESTA LÍNEA DE ABAJO ES DE MI COSECHA PARA RECORDAR CÓMO SE ITERAN LOS OBJETOS
    for (let i in miModulo.gastos){console.log(miModulo.gastos[i]["descripcion"])}
    repintar();
}
const anyadirgasto = document.querySelector("#anyadirgasto");
anyadirgasto.addEventListener("click",nuevoGastoWeb);


function EditarHandle(){ // A VER ESTO QUE ES UNA FUNCIÓN CONSTRUCTORA
    return;
}

function BorrarHandle(){ // A VER ESTO QUE ES UNA FUNCIÓN CONSTRUCTORA
    return;
}

function BorrarEtiquetasHandle(){ // A VER ESTO QUE ES UNA FUNCIÓN CONSTRUCTORA
    return;
}


// LLEGADO AQUÍ, HAY QUE Modificación de la función mostrarGastoWeb


export {
    
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
    repintar, 
    actualizarPresupuestoWeb,
    nuevoGastoWeb,
    EditarHandle,
    BorrarHandle,
    BorrarEtiquetasHandle

}