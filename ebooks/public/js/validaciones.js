window.addEventListener('load', function(){
    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('pass');
    const password2 = document.getElementById('pass2');
    const date = document.getElementById('date');
    const genre = document.getElementsByName('genre');
    const inputs = document.querySelectorAll('input');

    const campos = {
        name: false,
        email: false,
        pass: false,
        pass2: false,
        date: false,
        genre: false
    }

    function setError(input, message) {
        const div = input.parentElement;
        input.style.borderColor = '#FF2020';
        const error = div.querySelector('p');
        error.innerText = message;
        error.className = 'error-activo';
        campos[input.name] = false;
    }

    function setSucces(input){
        const div = input.parentElement;
        const error = div.querySelector('p');
        input.style.borderColor = '#10DF0D';
        error.className = 'error';
        campos[input.name] = true;
    }

    function checkInputs(e) {
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        const dateValue = date.value;

        switch (e.target.name){
            case "name":
                if(nameValue === ""){
                    setError(name, 'El nombre esta vacio');
                } else if (nameValue.length < 6){
                    setError(name, 'Nombre invalido');
                } else {
                    setSucces(name);
                }
            break;

            case "email":
                if(emailValue === ""){
                    setError(email, "El email esta vacio");
                } else if (!isEmail(emailValue)){
                    setError(email, "Email invalido");
                } else {
                    setSucces(email);
                }
            break;

            case "pass":
                if(passwordValue === ""){
                    setError(password, 'La contraseña esta vacia');
                } else if (passwordValue.length < 8){
                    setError(password, 'La contraseña debe tener al menos 8 caracteres');
                } else {
                    setSucces(pass);
                }
            break;

            case "pass2":
                if(password2Value === ""){
                    setError(password2, 'La contraseña esta vacia');
                }else if (password2Value.length < 8){
                    setError(password2, 'Las contraseñas deben tener al menos 8 caracteres');
                } else if (password2Value !== passwordValue){
                    setError(password2, 'Las contrasñeas no coinciden');
                } else {
                    setSucces(pass2);
                }
            break;

            case "date":
                if(dateValue === ""){
                    setError(date, 'La fecha esta incompleta');
                } else {
                    setSucces(date);
                }
            break;
        }
    } 

    inputs.forEach(function(input){
        input.addEventListener('keyup', checkInputs);
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        for (let i = 0; i < genre.length; i++){
            if (genre[i].checked){
                campos.genre = true
            }
        }

        if(campos.name && campos.email && campos.pass && campos.pass2 && campos.date && campos.genre){
            console.log("todo ok")
        } else {
            console.log("no se envia")
        }
    });

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});
