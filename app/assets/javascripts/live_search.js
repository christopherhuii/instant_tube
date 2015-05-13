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

      //This is some messy code
      document.getElementById("embedded_player").innerHTML = "";   // Used to clear the previous results on every keystroke
      document.getElementById("videos").innerHTML = "";   // Used to clear the previous results on every keystroke


      //THIS IS THE WORST AND MESSIEST CODE EVER. FIX THIS IMMEDIATELY
      $('#embedded_player').append ('<div class="thumbnail"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + serverData['items'][0]['id']['videoId'] + "\"></iframe></div></div>");

      for (var i = 0; i < videoCount; i++){
        $('#videos').append('<p><a href="https://www.youtube.com/embed/' + serverData['items'][i]['id']['videoId'] + '"> Title: ' + serverData['items'][i]['snippet']['title'] + '</a></p>');
      };
    }).fail(function(){
      console.log("fail..");
    });
  });
})