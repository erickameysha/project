var n = +prompt("Пожалуйста, введите число");
if (isNaN(n) || n < 0) {
  document.write("Нужно ввести положительное число");
} else {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum = sum + i
    document.write(i + " " + sum + "<br>");
  }
}