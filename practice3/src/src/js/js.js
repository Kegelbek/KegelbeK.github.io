let headerBtn = document.getElementById("btn");
    x = window.matchMedia('(max-width: 767px)');

    function myFunc(x) {
      if (x.matches) {

       
        headerBtn.textContent = "Консульация";
      } else {
        
        headerBtn.textContent = "получить консультацию";
      }
      
    };

myFunc(x);
x.addListener(myFunc);