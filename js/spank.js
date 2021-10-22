function playAudio(){
    var myAudio = new Audio;
    myAudio.src = "./assets/musics/slap3.mp3";
    myAudio.play();
  }
  jQuery(function(){
    $('#myLink').click(function(){
      playAudio();
    });
 });