$(document).ready(function() {
    //making the button pull a random gif
    // $('input').
    $('button').on('click', function() {
      var input = $('#input').val();
      if(input==null){
        $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC")
            .then(function(response) {
                var gif = response.data;
                var gifimg = response.data.image_url;
                //this should append the gif to the page
                $('#gifhere').html("<img src=" + gifimg + "></img>");
                console.log(gifimg);
            });
          }else{
            console.log(input);
            $.get("http://api.giphy.com/v1/gifs/search?q="+ input + "&api_key=dc6zaTOxFJmzC")
            .then(function(response){
              var gif = response.data;
              var gifimg = response.data[0].images.downsized_large.url;
              $('#gifhere').html("<img src=" + gifimg + "></img>");
              console.log(response);
              console.log(gifimg);
            });
          };
    });
});
