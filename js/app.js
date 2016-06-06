// When mouse enters the image area ryu moves //
$(document).ready(function(){
  $('.ryu').mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
//when mouse enter the image area ryu is still no movement //
  .mouseleave(function() {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  //when mouse is pressed down on the image ryu begin to throw his firebal//
  .mousedown(function(){
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    //this is the how far ryu throws his fireball 
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function(){
        $(this).hide();
        $(this).css('left', '520px');
      });
    })
  // when the the mouse is not pressed down image stay still //
  .mouseup(function(){
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

// music for //

function playHadouken () {
      $('#hadouken-sound') [0].volume = 0.5;
      $('#hadouken-sound') [0].load();
      $('#hadouken-sound') [0].play();
}