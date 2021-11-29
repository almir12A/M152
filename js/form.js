/*
document.getElementById('submit').addEventListener(
  'click', function(){
    console.log('submit betätig ')
    alert('submit betätig')
  }
)

document.getElementById('form').addEventListener(
  'submit', function(){
    console.log('form wird abgeschickt')
    alert('form wird verschickt ')

  }
)
*/

function checkForm(){
  var isValid = true;
  var vorname = document.getElementById('vorname').value
  if (vorname.value.length < 2) {
    vorname.classList.add('error')
  }else {
    vorname.classList.remove('error')
  }
  var pwd1 = document.getElementById('pwd1')
  var pwd1 = document.getElementById('pwd2')
  if (pwd1.value.length < 4) {
    pwd1.classList.add('error')
  }else {
    pwd1.classList.remove('error')
  }

  if (pwd1.value != pwd2.value) {
    pwd2.classList.add('error')
  }else {
    pwd2.classList.remove('error')
  }

  if (document.getElementsByClassName('error').length > 0){
    event.stopPropagation();
    event.preventDefault();
  }
}

function checkForm(){
  var isValid = true;
  var nachname = document.getElementById('nachname').value
  if (nachname.value.length < 2) {
    nachname.classList.add('error')
  }else {
    nachname.classList.remove('error')
  }

  if (document.getElementsByClassName('error').length > 0){
    event.stopPropagation();
    event.preventDefault();
  }
}
