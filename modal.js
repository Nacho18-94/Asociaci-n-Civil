//variable
cover_img = document.getElementById("ctn-cover-img");
cover_img2 = document.getElementById("ctn-cover-img2");

//funciones

function mostrar_img() {
  cover_img.style.display = "flex";
}
function mostrar_img2() {
  cover_img2.style.display = "flex";
}
function ocultar_img() {
  cover_img.style.display = "none";
}
function ocultar_img2() {
  cover_img2.style.display = "none";
}

document.getElementById("btn-img").addEventListener("click", mostrar_img);
document.getElementById("btn-img2").addEventListener("click", mostrar_img2);
document.getElementById("cerrar-img").addEventListener("click", ocultar_img);
document.getElementById("cerrar-img2").addEventListener("click", ocultar_img2);
