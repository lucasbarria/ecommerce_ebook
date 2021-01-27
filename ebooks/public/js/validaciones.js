window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {


    var name = document.querySelector('#name');
    if(name.value == ''){
        var div = document.querySelector('div');
        
        name.innerHTML += "nombre incompleto"
        name.style.color = 'green';
        evento.preventDefault();  
    }
    var email = document.querySelector('#email');
    


    var pass = document.querySelector('#pass');
    if(pass.value.length >= 12){
      
    }

    

})
});