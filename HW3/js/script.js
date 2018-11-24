let receive = document.getElementById('receive'),
     modal = document.getElementsByClassName('modal')[0],
      close = document.querySelector('.close'),
        inputName = document.querySelector('.contactform_name'),
        phone = document.getElementsByName('phone')[0],
        text = document.getElementsByName('message')[0];
        

        
receive.addEventListener("click", function () {
  modal.style.display = 'block';
});
close.addEventListener('click', function () {
  modal.style.display = "none";     
});

phone.addEventListener("input", function message() {

});

inputName.addEventListener("input", function message() {
  text.value = "Добрый день!\n" + "Меня зовут " + inputName.value + ",\nТелефон: " + phone.value;

  if (inputName.value == "") {
    text.value = "";
    
  }
});



