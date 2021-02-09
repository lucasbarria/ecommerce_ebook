window.addEventListener('load', function(){
    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('pass');
    const password2 = document.getElementById('pass2');
    const date = document.getElementById('date');
    const genre = document.getElementsByName('genre');


    function setError(input, message) {
        const div = input.parentElement;
        input.style.borderColor = '#FF2020';
        const error = div.querySelector('p');
        error.innerText = message;
        error.className = 'error-activo';
    }

    function setSucces(input){
        const div = input.parentElement;
        const error = div.querySelector('p');
        input.style.borderColor = '#10DF0D';
        error.className = 'error';
    }

    function checkInputs() {
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        const dateValue = date.value;

        if(nameValue === ""){
            setError(name, 'El nombre esta vacio');
        } else {
            setSucces(name);
        }

        if(emailValue === ""){
            setError(email, "El email esta vacio");
        } else if (!isEmail(emailValue)){
            setError(email, "Email invalido");
        } else {
            setSucces(email);
        }

        if(passwordValue === ""){
            setError(password, 'La contraseña esta vacia');
        } else if (passwordValue.length < 8){
            setError(password, 'La contraseña debe tener al menos 8 caracteres');
        } else {
            setSucces(password);
        }

        if(password2Value === ""){
            setError(password2, 'La contraseña esta vacia');
        } else if (password2Value !== passwordValue){
            setError(password2, 'Las contrasñeas no coinciden');
        } else {
            setSucces(password2);
        }

        if(dateValue === ""){
            setError(date, 'La fecha esta incompleta');
        } else {
            setSucces(date);
        }
        
    } 

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        checkInputs();
    });

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});
