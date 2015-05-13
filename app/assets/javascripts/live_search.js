// This probably isn't exactly a live search, but I kinda(?) got this to work..

var keyStrokeTimer;
var typingDelay = 200;


$(function(){
  $('input#search').bind('keyup', function(){
    clearTimeout(keyStrokeTimer);
    keyStrokeTimer = setTimeout(doneTyping, typingDelay);
  });

  $('input#search').bind('keydown', function(){
    clearTimeout(keyStrokeTimer);
  });
})

function doneTyping(){
  $('input[name=commit]').click();
};


// USING AJAX

// $(function(){
//   $('input#search').bind('keyup', function(e){
//     e.preventDefault();
//     var convertedQuery = $(this).val().split(' ').join('_');

//     $.ajax({
//       url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + convertedQuery + "&type=video&key=REMOVED_API_KEYYYYYYY=snippet,contentDetails,statistics,status",
//       dataType: 'jsonp'
//     }).done(function(serverData){

//       var videoCount = serverData['items'].length;

//       for (var i = 0; i < videoCount; i++){
//         $('#videos').append('<li> Title: ' + serverData['items'][i]['snippet']['title'] + '</li>');
//       };
//       // console.log(serverData);
//     }).fail(function(){
//       console.log("fail..");
//     });
//   });
// })