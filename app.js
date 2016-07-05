$(document).ready(function() {
    //making the button pull a random gif
    $('button').on('click', function() {
        $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC")
            .then(function(response) {
                var gif = response.data;
                var gifimg = response.data.image_url;
                //this should append the gif to the page
                $('#gifhere').html("<img src=" + gifimg + "></img>");
                console.log(gifimg);
            });
    });
});
