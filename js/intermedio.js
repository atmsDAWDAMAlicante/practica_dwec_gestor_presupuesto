// CÓDIGO de los Controles DIV PLANTILLA UN BOTON
const txtPLANTILLAUNBOTON = document.querySelector("#txtPLANTILLAUNBOTON");
const btnPLANTILLAUNBOTON = document.querySelector("#btnPLANTILLAUNBOTON");
const parrafoPLANTILLAUNBOTON = document.querySelector("#parrafoPLANTILLAUNBOTON");

btnPLANTILLAUNBOTON.addEventListener("click",function(){
  //CÓDIGO DEL MÉTODO DE GESTIÓN PRESUPUESTO
  alert("PLANTILLA UN BOTON funciona");
  parrafoPLANTILLAUNBOTON.innerHTML = `PLANTILLA UN BOTON funciona ${txtPLANTILLAUNBOTON.value}` ;
  
}); 

// FIN CÓDIGO de los Controles DIV PLANTILLA UN BOTON