//Primera forma de hacerlo
/*function validacionNombre(){
	let nombre=document.getElementById("nombre").value;
	let tamano=nombre.length;
	if (tamano<4){
		alert("El nombre tiene menos de 4 caracteres. Introduzca un nombre con al menos 4 caracteres")
	}
}*/
//Segunda forma de hacerlo
function validacionNombre(nombre){
	let tamano=nombre.length;
	if (tamano<4){
		alert("El nombre tiene menos de 4 caracteres. Introduzca un nombre con al menos 4 caracteres");
	}
}

//Primera forma de hacerlo
/*function validacionMail(){
	let mail=document.getElementById("mail").value;
	if(validar(mail)){
		alert("El email es válido");
	}
	else{
		alert("El email no es válido");
	}
}*/
//Segunda forma de hacerlo
function validacionMail(mail){
	if(validar(mail)){
		alert("El email es válido");
	}
	else{
		alert("El email no es válido");
	}
}

function validar(mail){
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //es una expresión regular
	if(mail.match(mailformat)){
		return (true)
	}
	else{
		return (false)
	}
}

function escribirDistancia(){
//comprobamos que no existe el campo
	if(document.getElementById("distancia")==null){
		//crea el campo
		let input_distancia=document.createElement("input");
		let label_distancia=document.createElement("label");
		input_distancia.type="number";
		input_distancia.placeholder="Introduce la distancia";
		input_distancia.id="distancia";
		label_distancia.for="distancia";
		label_distancia.innerHTML="Distancia recorrida habitualmente:";
		document.getElementsByTagName("div")[0].appendChild(label_distancia);
		document.getElementsByTagName("div")[0].appendChild(input_distancia);
	}

}

function nohacorrido(){
//Comprueba que el campo existe. Si existe lo borra
	if(document.getElementById("distancia")!=null){
		document.getElementsByTagName("div")[0].removeChild(document.getElementById("distancia"));
		document.getElementsByTagName("div")[0].removeChild(document.getElementsByTagName("label")[3]);
	}

}

//Sacamos el mensaje al enviar el formulario
function mensaje(){
	let nombre=document.getElementById("nombre").value;
	let mail=document.getElementById("mail").value;
	let saludo="Te llamas "+nombre+" y tienes email: "+mail;
	let hacorrido=document.getElementById("corredor").checked;
	if(hacorrido){
		let dist=document.getElementById("distancia").value;
		alert(saludo+" y corres habitualmente una distancia de "+dist+" km");
	}
	else{
		alert(saludo);
	}
	
}