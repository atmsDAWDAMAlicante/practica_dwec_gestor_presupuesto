import * as gestionPresupuesto from './gestionPresupuesto.js';
import * as gestionPresupuestoWeb from './gestionPresupuestoWeb.js';

// 1º Actualizar el presupuesto a 1500€ (función actualizarPresupuesto)
gestionPresupuesto.actualizarPresupuesto(1500);

// 2º Mostrar el presupuesto en el div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
const presupuesto = gestionPresupuesto.mostrarPresupuesto();
gestionPresupuestoWeb.mostrarDatoEnId('presupuesto', presupuesto);

// 3º Crear los siguientes gastos (función crearGasto): 
let gasto1 = new gestionPresupuesto.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let gasto2 = new gestionPresupuesto.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida"); 
let gasto3 = new gestionPresupuesto.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte"); 
let gasto4 = new gestionPresupuesto.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina"); 
let gasto5 = new gestionPresupuesto.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros"); 
let gasto6 = new gestionPresupuesto.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

// 4º Añadir los gastos creados (función anyadirGasto)
gestionPresupuesto.anyadirGasto(gasto1);
gestionPresupuesto.anyadirGasto(gasto2);
gestionPresupuesto.anyadirGasto(gasto3);
gestionPresupuesto.anyadirGasto(gasto4);
gestionPresupuesto.anyadirGasto(gasto5);
gestionPresupuesto.anyadirGasto(gasto6); 

// 5º Mostrar los gastos totales en div#gastos-totales (funciones calcularTotalGastos y mostrarDatoEnId)
// 6º Mostrar el balance total en div#balance-total (funciones calcularBalance y mostrarDatoEnId)

const totalGastos = gestionPresupuesto.calcularTotalGastos();
const balanceTotal = gestionPresupuesto.calcularBalance();

gestionPresupuestoWeb.mostrarDatoEnId('gastos-totales', totalGastos);
gestionPresupuestoWeb.mostrarDatoEnId('balance-total', balanceTotal);

// 7º Mostrar el listado completo de gastos en div#listado-gastos-completo (funciones listarGastos y mostrarGastoWeb)
const listadoGastos = gestionPresupuesto.listarGastos();
listadoGastos.forEach((gasto) =>{
    gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-completo', gasto); 
})


// 8º Mostrar el listado de gastos realizados en septiembre de 2021 en div#listado-gastos-filtrado-1 (funciones filtrarGastos y mostrarGastoWeb)

const gastosDeSeptiembre2021 = gestionPresupuesto.filtrarGastos({ fechaDesde: '2021-09-01', fechaHasta: '2021-09-30' });
gastosDeSeptiembre2021.forEach((gasto) => {
    const elementoId = 'listado-gastos-filtrado-1';
    gestionPresupuestoWeb.mostrarGastoWeb(elementoId, gasto);
  });

// 9º Mostrar el listado de gastos de más de 50€ en div#listado-gastos-filtrado-2 (funciones filtrarGastos y mostrarGastoWeb)

const gastosMasDe50Euros = gestionPresupuesto.filtrarGastos({ valorMinimo: 50 });
gastosMasDe50Euros.forEach((gasto) => {
    const elementoId = 'listado-gastos-filtrado-2';
    gestionPresupuestoWeb.mostrarGastoWeb(elementoId, gasto);
  });

// 10º Mostrar el listado de gastos de más de 200€ con etiqueta seguros en div#listado-gastos-filtrado-3 (funciones filtrarGastos y mostrarGastoWeb)


const gastosSegurosMasDe200Euros = gestionPresupuesto.filtrarGastos({ conLaEtiqueta: ['seguros'], valorMinimo: 200 });
gastosSegurosMasDe200Euros.forEach((gasto) => {
    const elementoId = 'listado-gastos-filtrado-3';
    gestionPresupuestoWeb.mostrarGastoWeb(elementoId,gasto); 
}); 

// 11º Mostrar el listado de gastos que tengan las etiquetas comida o transporte de menos de 50€ en div#listado-gastos-filtrado-4 (funciones filtrarGastos y mostrarGastoWeb)

const gastosComidaTransporteMenosDe50Euros = gestionPresupuesto.filtrarGastos({ conLaEtiqueta: ['comida', 'transporte'], valorMaximo: 50 });
gastosComidaTransporteMenosDe50Euros.forEach((gasto) => {
    const elementoId = 'listado-gastos-filtrado-4';
    gestionPresupuestoWeb.mostrarGastoWeb(elementoId, gasto ); 
}); 


// 12º Mostrar el total de gastos agrupados por día en div#agrupacion-dia (funciones agruparGastos y mostrarGastosAgrupadosWeb)

const TotalDeGastosAgrupadosPorDia = gestionPresupuesto.agruparGastos('dia');
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-dia', TotalDeGastosAgrupadosPorDia, 'día');

// 13º Mostrar el total de gastos agrupados por mes en div#agrupacion-mes (funciones agruparGastos y mostrarGastosAgrupadosWeb)

const TotalDeGastosAgrupadosPorMes = gestionPresupuesto.agruparGastos('mes');
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-mes', TotalDeGastosAgrupadosPorMes, 'mes');

// 14º Mostrar el total de gastos agrupados por año en div#agrupacion-anyo (funciones agruparGastos y mostrarGastosAgrupadosWeb)

const TotalDeGastosAgrupadosPorAnyo = gestionPresupuesto.agruparGastos('anyo');
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-anyo', TotalDeGastosAgrupadosPorAnyo, 'año');







export * from './generarDatosEstaticos.js';