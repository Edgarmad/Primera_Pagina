 function funcion_sesion(){
 	let usuario = document.getElementById('usuario').value;
 	let pass = document.getElementById('pass').value;
 	if (usuario == "usuario" && pass == "123") {
 		window.location.href = "D:/Documentos/Parcial 1/inicio.html";
 	}
 	else
 	{
 		alert("Nombre de usuario y contraseña no validos");
 	}
 }
 function close_session(){
 	window.location.href = "D:/Documentos/Parcial 1/index.html";
 }
 function generateQuizz(){
 	let question1 = document.getElementById('pregunta1').value;
 	localStorage.setItem("pregunta1",question1);
 	let question2 = document.getElementById('pregunta2').value;
 	localStorage.setItem("pregunta2",question2);
 	let question3 = document.getElementById('pregunta3').value;
 	localStorage.setItem("pregunta3",question3);
 	let question4 = document.getElementById('pregunta4').value;
 	localStorage.setItem("pregunta4",question4);
 	let question5 = document.getElementById('pregunta5').value;
 	localStorage.setItem("pregunta5",question5);
 	let question6 = document.getElementById('pregunta6').value;
 	localStorage.setItem("pregunta6",question6);
 	let question7 = document.getElementById('pregunta7').value;
 	localStorage.setItem("pregunta7",question7);
 	let question8 = document.getElementById('pregunta8').value;
 	localStorage.setItem("pregunta8",question8);
 	let question9 = document.getElementById('pregunta9').value;
 	localStorage.setItem("pregunta9",question9);
 	let question10 = document.getElementById('pregunta10').value;
 	localStorage.setItem("pregunta10",question10);
 	window.location.href = "D:/Documentos/Parcial 1/resultado.html";
 }

function active(){
	let prueba;
	var p1;
		console.log("funciona");
			for (var i = 1; i <= 10; i++) {
			prueba = localStorage.getItem("pregunta" + i);
			p1 = document.getElementById("q"+i);
			p1.innerHTML = ("<br/>Pregunta No. "+ i + " " + prueba + "<br/> ");
	}
}