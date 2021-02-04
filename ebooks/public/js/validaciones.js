window.addEventListener('load', function() {
    const form = document.querySelector('form');
    const input = document.querySelectorAll('input');

    input.addEventListener('blur', function(e){
        switch (e.target.name) {
            case "name":
                
        }
    })

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        for (let i = 0; i < input.length; i++){
            if(input[i].value == ""){
                input[i].style.borderColor = "red"
            } else {
                input[i].style.borderColor = ""
            }
        }
})
});