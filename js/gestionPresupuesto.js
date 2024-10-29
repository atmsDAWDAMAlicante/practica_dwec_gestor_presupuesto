// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// Fundamentos de JS I (completo)

// TODO: Variable global
let presupuesto = 0;
let gastos =[];
let idGasto = 0;

function actualizarPresupuesto(nuevoPresupuesto) {
    if (isNaN(nuevoPresupuesto))
        return -1;
    else if (nuevoPresupuesto < 0)
        return -1;
    else{
        presupuesto = nuevoPresupuesto;
        return presupuesto;
    }
        
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    this.descripcion = descripcion;
    this.valor= (!(isNaN(valor)) && (valor >= 0)) ? valor : 0;
    // Apartado de la fecha
    let fechaSinVerificar = Date.parse(fecha);
    this.fecha = !isNaN(fechaSinVerificar) ? fechaSinVerificar : Date.now(); 
    //this.fecha = !isNaN(fechaSinVerificar) ? new Date(fechaSinVerificar) : new Date(); 
    // NOTAS SOBRE LA FECHA:
    // fechaSinVerificar guarda un timestamp
    // Date.now() guarda un timestamp
    // Con el operador ternario, en cualquiera de los dos casos SIEMPRE SE ALMACENARÁ UN NÚMERO (timestamp)
    // Date.parse() y Date.now -- son estáticos (no se crea objeto) y DEVUELVEN TIMESTAMP 
    this.etiquetas = etiquetas;

    this.mostrarGasto = function (){
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }

    this.actualizarDescripcion = function(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }

    this.actualizarValor = function(nuevoValor){
        if (nuevoValor >= 0)
            this.valor = nuevoValor;
    }

    this.devuelveFechaLegible = function(fecha)
    {
        return fecha.toLocaleString();
    }

    this.mostrarGastoCompleto = function()
    {
        let resultado = "";
        /*
        Gasto correspondiente a DESCRIPCION con valor VALOR €.
        Fecha: FECHA_EN_FORMATO_LOCALIZADO
        Etiquetas:
        - ETIQUETA 1
        - ETIQUETA 2
        - ETIQUETA 3
        */
        resultado += `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\n`

        resultado += `Fecha: ${this.fecha.toLocaleString('es-ES')}\n`

        let concatenarEtiquetas = "Etiquetas:\n";
        for (let unaEtiqueta of this.etiquetas){
            concatenarEtiquetas += `- ${unaEtiqueta}\n`
        }

        resultado += concatenarEtiquetas;
        return resultado;
    }

    this.actualizarFecha = function(fechaPasada){

        let fechaLegibleSinVerificar = Date.parse(fechaPasada);
        if (!(isNaN(fechaSinVerificar)))
            { 
                return fechaSinVerificar;
            } 
    }

    this.anyadirEtiquetas = function(){
        return -1;
    }

    this.borrarEtiquetas = function(){
        return -1;
    }

} // Cierre del objeto

function listarGastos(){
    return gastos;
} 



function anyadirGasto(gasto){
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
} 



function borrarGasto(idAborrar){
// Aquí hay que usar findIndex, porque find devuelve el elemento que cumple la condición
// CUIDADO CON LA FUNCIÓN FLECHA Y EL RETURN

// PRIMERO: find devuelve el ÍNDICE

let ElIDAborrar = gastos.findIndex((elementoAborrar) =>
    elementoAborrar.id == idAborrar
);
// Sin la función flecha o con las llaves {} PONER RETURN
        gastos.splice(ElIDAborrar,1);
        console.log(`quedan ${gastos.length}`)
}  



function calcularTotalGastos(){
let resultado = 0;
for (let unGasto of gastos){
    resultado += unGasto.valor;
}
return resultado;
} 



function calcularBalance(){
    let gastosTotales = calcularTotalGastos();
    return (presupuesto - gastosTotales);
} 

let miGasto1 = new CrearGasto("Hola1", 4,"03/08/02", "una", "dos", "tres");
let diaHoyTimestamp = Date.now();
let diaHoyOK = miGasto1.devuelveFechaLegible(new Date(diaHoyTimestamp));

/*
let miGasto1 = new CrearGasto("Hola1", 4,"03/08/02", "una", "dos", "tres");
let miGasto2 = new CrearGasto("Hola2", 3,"03/08/02", "una", "dos", "tres");
let miGasto3 = new CrearGasto("Hola3", 3,"03/08/02", "una", "dos", "tres");
anyadirGasto(miGasto1);
anyadirGasto(miGasto2);
anyadirGasto(miGasto3);
console.log(calcularTotalGastos());

for (let etiqueta of miGasto1.etiquetas)
{
    console.log(etiqueta);
}

console.log("Mi gasto: " + miGasto2.id)
borrarGasto(0);
borrarGasto(2);
borrarGasto(3);

for (let losGastos of gastos)
{
    console.log(losGastos.descripcion)
}

*/




// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos, 
    anyadirGasto, 
    borrarGasto, 
    calcularTotalGastos,
    calcularBalance
}
