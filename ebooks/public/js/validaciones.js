window.addEventListener('load', function() {
    const formulario = document.querySelector('form');

    const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    name: false,
    password: false,
    email: false
}





    formulario.addEventListener('submit', function(evento) {
})
});