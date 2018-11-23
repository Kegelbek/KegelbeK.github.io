
function myFirstApp(name, age) {
  document.write("Привет, меня зовут " + name + ", это моя первая программа! <br><br>");

function showMySkills() {
  let skills = ["HTML", "CSS", "Less", "Sass", "Bootstrap"];
  document.write("Я владею такими технологиями как: <br>")
  for (let i = 0; i < skills.length; i++) {
    
    skills[i] = document.write(skills[i] + " <br>");
    }

}
  showMySkills();

  function checkAge() {
if ( age > 18) {
document.write("<br>Спасибо, что показали паспорт, теперь Вы можете изучать JS!");
} else {
  document.write("<br>Спасибо, что показали паспорт, но увы, Вам нет 18ти. <br> И это не страшно Вы всё так же можете изучать JS!");
}    
  }
  checkAge();

  function CalcPow(num) {
    let result = num * num;
    document.write("<br> Квадратный корень числа " + num + " = " + result ); 
    
}
CalcPow(16);
}

myFirstApp("Илья", "25");

