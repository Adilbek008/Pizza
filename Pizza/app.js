
let btn = document.getElementById('toggle-btn');
btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = 'black';
}); 
let dark = document.getElementById('toggle-btn');
dark.addEventListener('click', function onClick(event){
    document.body.style.backgroundColor = 'white'
}) 
function onload (){
  document.body.classList.toggle('white-mode', localStorage)
}
document.addEventListener('DOMContentLoaded', onload)








