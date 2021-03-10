window.onload = function(){
    fetch("https://api.giphy.com/v1/gifs/search?api_key=lXvSCNWV3HP3mVAUQ6J7odGAAXfDlEtd&q=Congratulations&limit=25&offset=0&rating=g&lang=en")
    .then(function(res){
        return res.json();
    })
    .then(function(info){
        console.log(info.data);
        for(let i = 0; i < info.data.length; i++){
            info.data.length = 1
            
            let gif = "<img src=" + info.data[i].images.original.url + ">";
            document.querySelector(".gif").innerHTML +=  gif;
        }
    })
    .catch(function(e){
        alert('error!');
    })
};