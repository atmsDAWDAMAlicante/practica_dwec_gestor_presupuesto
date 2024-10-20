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
    this.fecha = fecha;
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

}

function listarGastos(){
    return gastos;
} 



function anyadirGasto(gasto){
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
} 



function borrarGasto(idAborrar){
    console.log("Gasto a borrar nº " + gastos[idAborrar].valor)
for (let unGasto of gastos){

    if (unGasto.id == idAborrar){
        console.log(`Borramos el gasto ${unGasto.id}`)
        gastos.splice(idAborrar,1);
        console.log(`quedan ${gastos.length}`)
    }
}
}  



function calcularTotalGastos(){
let resultado = 0;
for (let unGasto of gastos){
    resultado += unGasto.valor;
}
return resultado;
} 



function calcularBalance(){

} 



let miGasto1 = new CrearGasto("Hola1", 4,"03/08/02", "una", "dos", "tres");
let miGasto2 = new CrearGasto("Hola2", 3,"03/08/02", "una", "dos", "tres");
let miGasto3 = new CrearGasto("Hola3", 3,"03/08/02", "una", "dos", "tres");
anyadirGasto(miGasto1);
anyadirGasto(miGasto2);
anyadirGasto(miGasto3);
console.log(calcularTotalGastos());
/*
for (let etiqueta of miGasto1.etiquetas)
{
    console.log(etiqueta);
}
*/
console.log("Mi gasto: " + miGasto2.id)
borrarGasto(0);
borrarGasto(2);
borrarGasto(3);
/*
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
