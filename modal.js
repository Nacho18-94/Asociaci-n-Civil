//Esto corresponde al Modal
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

//Esto corresponde al Header
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
