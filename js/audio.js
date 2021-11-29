
window.addEventListener('load',function(){
  var audioplayer = document.getElementById('bunnytrack')
  var ab = document.getElementById('ab')
  var isPlaying = false;

  ab.addEventListener('click', function(){
    var icon = document.createElement('i');
    if (isPlaying){
      icon.className="fas fa-pause"
      audioplayer.pause()
    }else{
      icon.className="fas fa-play"
      audioplayer.play()
    }
    ab.innerHTML = ""
    ab.appenChild(icon);
    isPlaying = !isPlaying
  }))
})
