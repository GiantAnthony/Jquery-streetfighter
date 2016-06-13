
// When mouse enters the image area ryu moves //
$(document).ready(function(){
  $('.ryu').mouseenter(function(){
      $('.ryu-still').hide();
      $('.ryu-ready').show();
      $('.ryu-throwing').hide();
      $('.ryu-cool').hide();
  });
//when mouse enter the image area ryu is still no movement //
 $('.ryu').mouseleave(function() {
      $('.ryu-still').show();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').hide();
  })
  //when mouse is pressed down on the image ryu begin to throw his fireball//
  .mousedown(function(){
    playHadouken();
       $('.ryu-ready').hide();
       $('.ryu-throwing').show();
       $('.ryu-cool').hide();
       $('.ryu-still').hide();
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
      $('.ryu-still').hide();
      $('.ryu-cool').hide();
  });
    $('body').keydown(function(){
      if (event.keyCode == 88){
       $('.ryu-cool').show();
       $('.ryu-ready').hide();
       $('.ryu-throwing').hide();
       $('.ryu-still').hide();
      }
    });
    $('body').keyup(function(){
      if (event.keyCode == 88){
       $('.ryu-cool').hide();
       $('.ryu-ready').hide();
       $('.ryu-throwing').hide();
       $('.ryu-still').show();
      }
    });
});


// music for //

function playHadouken () {
      $('#hadouken-sound') [0].volume = 0.5;
      $('#hadouken-sound') [0].load();
      $('#hadouken-sound') [0].play();
}




  















