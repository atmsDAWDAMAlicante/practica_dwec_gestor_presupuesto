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

        //resultado += `Fecha: ${this.fecha.toLocaleString('es-ES')}\n`
        // DESDE LUEGO A ESTA SOLUCIÓN HE LLEGADO COMO ENCONTRÓ FLEMING LA PENICILINA!!!!!!!!
        let fechaEnTimeStamp = this.fecha;
        let fechaNormal = new Date(fechaEnTimeStamp).toLocaleString();
        resultado += `Fecha: ${fechaNormal}\n`

        let concatenarEtiquetas = "Etiquetas:\n";
        for (let unaEtiqueta of this.etiquetas){
            concatenarEtiquetas += `- ${unaEtiqueta}\n`
        }

        resultado += concatenarEtiquetas;
        return resultado;
    }

    function validarFecha(fecha){ // FUNCIÓN AUXILIAR QUE LUEGO VERÉ QUÉ HAGO CON ELLA
        let resultado = new Date();
        resultado = fecha.toLocaleString();
        return resultado;
    }

    this.actualizarFecha = function(fechaPasada){

        let fechaLegibleSinVerificar = Date.parse(fechaPasada);
        if (!(isNaN(fechaSinVerificar)))
            { 
                return fechaSinVerificar;
            } 
    }

    this.anyadirEtiquetas = function(...nuevasEtiquetas){
        console.log(nuevasEtiquetas.length)
        let aIntroducirObjeto = "";
        for (let etiquetaNueva of nuevasEtiquetas){ // bucle for que recorrerá todo el array de las nuevasEtiquetas
            //console.log(`etiquetaNueva: ${etiquetaNueva}`) compruebo que es cada etiqueta

            aIntroducirObjeto = this.etiquetas.find( // debe recoger undefined si no está
                (elemento) => {
                    //console.log(`Elemento: ${elemento}`) para comprobar el valor que toma cada elemento
                    return elemento == etiquetaNueva; 
                })
            // console.log(`aIntroducirObjeto: ${aIntroducirObjeto}`) para comprobar que es undefined

            // Esta es la clave: si es undefined entra en el array etiquetaNueva (la del bucle)
            if (aIntroducirObjeto == undefined){
                this.etiquetas.push(etiquetaNueva);
            } else {
                console.log("Sí que está.");
            }

        }
            // impresión por consola del resultado en ejecución
            /*console.log(this.etiquetas.length)
            for (let etiqu of this.etiquetas){
                console.log(`- ${etiqu}`);
            }*/

    }

    this.borrarEtiquetas = function(...etiquetasAborrar){
        // 1º recorrer el array que entra 'etiquetasAborrar'
        let IndiceDeLaEtiquetaABorrar = ""; // Variable que recoge el índice de la etiqueta a borrar
        for (let etiquetaAborrar of etiquetasAborrar){ //busco el índice con findIndex
            IndiceDeLaEtiquetaABorrar = this.etiquetas.findIndex((elemento)=>{
                return elemento == etiquetaAborrar;
            });
            if (IndiceDeLaEtiquetaABorrar >= 0){ // Recordar, importante: o >=0 o >-1
                console.log(`Voy a borrar: ${this.etiquetas[IndiceDeLaEtiquetaABorrar]}`) // esto me dice qué etiqueta se va a borrar
                this.etiquetas.splice(IndiceDeLaEtiquetaABorrar,1);
            }

        } // fin del bucle que recorre el array etiquetasAborrar
        console.log(`Después del borrado, elementos que quedan: ${this.etiquetas.length}`)
    }

} // Cierre del objeto


// FUNCIONALIDAD DEL PROGRAMA:
// Código de ejemplo para ejecutar los métodos anyadirEtiquetas y borrarEtiquetas
//let objeto = new CrearGasto("Coche",23,"10/12/2023","ITV","Gasolina");
//console.log(objeto.descripcion);
//console.log(objeto.anyadirEtiquetas("Impuestos","IVA","ITV","Mecánico", "Gasolina"));
//objeto.borrarEtiquetas("Impuestos","ITV","Mecánico", "Gasolina", "ITV")



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
