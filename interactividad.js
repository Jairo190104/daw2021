function limpiarFormulario(){
	document.getElementById("miForm").reset();
}
var may=function(n1, n2, n3){
	var numero1 = parseInt(document.getElementById("numero1").value);
	var numero2 = parseInt(document.getElementById("numero2").value);
	var numero3 = parseInt(document.getElementById("numero3").value);
	
if (numero1<numero2 && numero3) {
	alerta="El numero menor es: " + numero1;
}
else{
	if (numero2<numero1 && numero3) {
		alerta="El numero menor es: " + numero2;
	}
	else{
		if (numero3<numero1 && numero2) {
			alerta="El numero menor es: " + numero3;
		}
	}
}
return alerta;
}


var cm=function(n1){ 
	var centimetros = parseFloat(document.getElementById("centimetros").value);
    resultado = centimetros * 0.393701;
    return "Son: " + resultado + " pulgadas";
}


var ya= function(n1){
	var metros = parseFloat(document.getElementById("metros").value);
    resultadom= metros*1.09361;
	return "Son: " + resultadom + " metros";
}