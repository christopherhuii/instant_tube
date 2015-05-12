// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require jquery.turbolinks
//= require_tree .

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