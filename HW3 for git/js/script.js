window.addEventListener('DOMContentLoaded', function () {
  // получаемм информацию для работы
  let products = document.querySelectorAll('.product'),
    buttons = document.querySelectorAll('button'),
    shop = document.getElementsByClassName('shop')[0],
    open = document.getElementsByClassName("open")[0];
  // console.log(products);

  //Функция создания корзины
  function createCart() {
    //Создаём элементы корзины
    let cart = document.createElement("div"),
      field = document.createElement("div"),
      heading = document.createElement("h2"),
      close = document.createElement("button");
    //Связываем стили с классами
    cart.classList.add("cart");
    field.classList.add("cart-field");
    close.classList.add("close");
    // добавили текст к элементам
    heading.textContent = "В нашей корзине";
    close.textContent = "Закрыть!";
    //вставили элементы на страницу
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(close);
  }
  createCart();

  let field = document.querySelector(".cart-field "),
    cart = document.querySelector(".cart"),
    close = document.querySelector(".close");

  for (let i = 0; i < buttons.length; i++) {
    // Добавляем клик на каждую из кнопок.
    buttons[i].addEventListener("click", function () {
      if (buttons[i].textContent == 'Купить!') {
        buttons[i].textContent = 'Вернуть!';
        field.appendChild(products[i])
      } else {
        buttons[i].textContent = 'Купить!';
        shop.appendChild(products[i]);
      }
    })
  }

  open.addEventListener("click", function () {
    cart.style.display = "block";
  });
  close.addEventListener("click", function () {
    cart.style.display = "none";
  })
})
