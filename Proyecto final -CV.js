// Archivo de JS del Proyecto final del curso de Programación Web

// Mi idea acá es hacer algo tipo lo que se ve en las páginas webs de compra venta en las cuales el número del vendedor te sale solo si hacer click pero con las referencias de mi CV

document.getElementById('boton1').addEventListener('click', function() {
	console.log("Hola mundo desde EventListener");
	document.getElementById("referencias").innerHTML = "Edith Kordon (Investigadora Principal) ekordon@gmail.com +54 1159796812 Angela Lara (PostDoc a cargo) angelalaramt@gmail.com +54 1126440002"
});

document.getElementById('boton2').addEventListener('click', function() {
	console.log("Hola mundo desde EventListener");
	document.getElementById("referencia").innerHTML = "Eduardo Soto (Jefe) edumsoto@gmail.com +54 1169457978"
});