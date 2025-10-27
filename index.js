// 1
const button = document.getElementById("myButton");
const textField = document.getElementById("textField");

button.addEventListener("click", function () {
  button.textContent = textField.value;
});

// 2
const image = document.getElementById("myImage");
image.src =
  "https://th.bing.com/th/id/OIP.fuhMpT6dxmHkRydhyyHA3gHaKw?w=129&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3";

// 3
const link = document.getElementById("myLink");
const img = document.getElementById("linkImage");

link.href = "https://www.youtube.com/";
img.alt = "Приклад зображення";
