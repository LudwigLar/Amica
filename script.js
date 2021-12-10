var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

// Script til Settings side, for å velge språk: 
function openForm() {
  document.getElementById("LanguForm").style.display = "block";
}

function closeForm() {
  document.getElementById("LanguForm").style.display = "none";
}