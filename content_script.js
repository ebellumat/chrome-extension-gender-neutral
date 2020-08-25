var playbackRate = 1;

const changeSpeed = (increase) => {
  var videos =  document.querySelectorAll('video');
  
  for (video of videos) {
    video.playbackRate = playbackRate;
  };
}

document.addEventListener ('keypress', (event) => {

  if (event.shiftKey && event.key === '<') {
    playbackRate -= 0.5;
    changeSpeed();
  }

  if (event.shiftKey && event.key === '>') {
    playbackRate += 0.5;
    changeSpeed();
  }
});


function myfunc(){
  $(document).ready(function() { 

    setTimeout(() => {
      changeSpeed();
    }, 1000);
  });

}

$(document).ready(myfunc);