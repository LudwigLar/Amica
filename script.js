var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}
$('.felt').on('click', function() {
    $(this).prop('readonly', '');
    $(this).focus();
  })
  
  // making the input readonly
  $('.felt').on('blur', function() {
    $(this).prop('readonly', 'readonly');
  });