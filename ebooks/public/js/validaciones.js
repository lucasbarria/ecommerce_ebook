window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
  
      evento.preventDefault();

    var name = document.querySelector('#name');
    if(name.value == 'undefined'){
      console.log('Hubo un error en el nombre');
    }
    var email = document.querySelector('#email');
    


    var pass = document.querySelector('#pass');
    if(pass.value.length >= 12){
      console.log('Hubo un error en el password')
    }

    

})
});