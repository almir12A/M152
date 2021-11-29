function clickFun(){
  var clickDiv = event.target // element, das angeklickt wurde
  clickDiv.innerHTML = Number(clickDiv.innerHTML) +1
}
//beim Laden alle click-Elemente finden
var clickDivs = document.getElementsByClassName('click')
// an jedes click-Element dem onclick Attribut die clickFun-Funktion zuweisen
for (var x = 0; x < clickDivs.length; x++) {
 clickDivs[x].onclick = clickFun
}
