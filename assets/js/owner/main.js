
function iniciar() {
	
	function btnMobileActive(e) {
		this.classList.toggle('activo');
	}
	const btnMobile = document.getElementById('menuBoxMobile');
	btnMobile.addEventListener('click', btnMobileActive);


	//Activar acordeon
	//const lista = document.getElementsByClassName("box");
	function acordeonFuntionToggle(e) {
		e.target.parentNode.classList.toggle('activo');
		const info = e.target.nextElementSibling;
		if(e.target.parentNode.classList.contains('activo')){ info.style["max-height"] = info.scrollHeight + "px"; } else { info.style["max-height"] = "0px"; }
	}

	const lista = document.querySelectorAll(".box h4");
	lista.forEach((l) =>{
		l.addEventListener("click", acordeonFuntionToggle);
	});

}



//codigo para avtivar el correo
const codigo = "bWFpbHRvOmNvbnRhY3RvQHRwLWFib2dhZG9zLmNvbQ==";
function openMailer(element) {
	const mail = atob(codigo);
	element.setAttribute("href", mail);
	element.setAttribute("onclick", "");
};







// iniciar la solicitud de los modulos y la ejecucion inicial del sistema.
//importamos los archivos y librerias necesarios
requirejs.config({
	baseUrl: "assets/js/owner",
	paths: { a: "../animaciones", l: "../librerias", n: "/node_modules"},
});
requirejs(["l/modernizr", "l/precarga", "validaciones", "alertas", "peticiones", "l/brands.min", "l/solid.min", "l/fontawesome"], iniciar);

