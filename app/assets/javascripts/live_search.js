// This probably isn't exactly a live search, but I kinda(?) got this to work..

// var keyStrokeTimer;
// var typingDelay = 400;


// $(function(){
//   $('input#search').bind('keyup', function(){
//     clearTimeout(keyStrokeTimer);
//     keyStrokeTimer = setTimeout(doneTyping, typingDelay);
//   });

//   $('input#search').bind('keydown', function(){
//     clearTimeout(keyStrokeTimer);
//   });
// })

// function doneTyping(){
//   $('input[name=commit]').click();
// };


// USING AJAX

$(function(){
  $('input#search').bind('keyup', function(e){
    e.preventDefault();
    var convertedQuery = $(this).val().split(' ').join('_');

    $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + convertedQuery + "&type=video&key=AIzaSyCAvKbTw9BmO5E2r-Hqtm2pl48emybPGto&part=snippet,contentDetails,statistics,status",
      dataType: 'jsonp'
    }).done(function(serverData){
      // console.log(serverData);
      var videoCount = serverData['items'].length;
      document.getElementById("videos").innerHTML = "";                        // Used to clear the previous results on every keystroke
      for (var i = 0; i < videoCount; i++){
        $('#videos').append('<p><a href="https://www.youtube.com/embed/' + serverData['items'][i]['id']['videoId'] + '"> Title: ' + serverData['items'][i]['snippet']['title'] + '</a></p>');
      };
    }).fail(function(){
      console.log("fail..");
    });
  });
})