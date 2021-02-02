window.addEventListener('load', function() {
    const form = document.querySelector('form');

   /* form.addEventListener('blur', function(event) {
        if(event.target.value.isAlpha){
            console.log('error')
        }
    }) */
    

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let input = document.querySelectorAll('input');
        for (let i = 0; i < input.length; i++){
            if(input[i].value == ""){
                input[i].style.borderColor = "red"
            } else {
                input[i].style.borderColor = ""
            }
        }


})
});