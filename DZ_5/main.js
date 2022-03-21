let expr=prompt("цвет?")
switch (expr) {
    case "красный":
      document.getElementsByClassName('red')[0].style.background = "red";
    alert("стой");
    break;
  case "жёлтый":
  document.getElementsByClassName('yellow')[0].style.background = "yellow";
    alert("На старт!");
    break;
  case "зеленый":
  document.getElementsByClassName('green')[0].style.background = "green";
    alert("проходи");
    break;
  default:
    alert('такого цвета не существует')
}
