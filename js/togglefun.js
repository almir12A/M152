var toggleState = false

function togglefun(){
  if(toggleState == false){
  document.getElementById(textli).innerHTML= "Geändert"
}
else {
  document.getElementById(textli).innerhtml = "Original"
}
toggleState = ! toggleState
}
