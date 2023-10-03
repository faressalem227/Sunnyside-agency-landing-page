let x = document.getElementById("barIcon");
x.onclick = function (e) {
  e.preventDefault;
  let y = document.getElementById("menu");
  y.classList.toggle("Active");
};
