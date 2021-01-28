window.addEventListener('load', function() {
    const form = document.querySelector('form');

   /* form.addEventListener('blur', function(event) {
        if(event.target.value.isAlpha){
            console.log('error')
        }
    }) */
    
    console.log(form)

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let input = document.querySelectorAll('input');
        for (let i = 0; i < input.length; i++){
            if(input[i].value == ""){
                console.log("no se puede enviar")
            }
        }


})
});